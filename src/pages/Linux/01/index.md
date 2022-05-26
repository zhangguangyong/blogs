### mysql8忘记密码
[mysql忘记密码](https://alexspring123.github.io/2020/07/21/202007/linux%E4%B8%8Bmysql8%E5%BF%98%E8%AE%B0%E5%AF%86%E7%A0%81%E5%90%8E%E9%87%8D%E7%BD%AE%E5%AF%86%E7%A0%81/)

```
#!/bin/bash#每两小时清除一次缓存
echo "开始清除缓存"
#写入硬盘，防止数据丢失
sync;sync;sync
 #延迟10秒
sleep 10
echo 1 > /proc/sys/vm/drop_caches
echo 2 > /proc/sys/vm/drop_caches
echo 3 > /proc/sys/vm/drop_caches

show variables like 'thread%';
show status like '%connect%';
show status like '%thread%';

show variables like 'table_cache';
show status like 'open_tables';

show variables like 'max_user_connections';
show variables like '%max_connections%';
show variables like '%max_%';

set persist max_connections=800;
set persist thread_cache_size=100;
```

### Linux

```
把home分区的空间划一部分到root分区
# 设置home分区大小为100G，释放剩余的空间
lvreduce -L 100G /dev/centos/home
# 将空闲空间扩展到root分区
lvextend -l +100%FREE /dev/centos/root
# 增加分区空间(xfs_growfs 只支持增大分区，不支持缩小分区)
xfs_growfs /dev/mapper/centos-root
# 格式化
mkfs.xfs /dev/mapper/centos-home -f
# 再次挂载
mount /dev/mapper/centos-home /home/
```

###### 脚本

```shell
# 更新源
cd /etc/
tar zcf yum.repos.d.tar.gz yum.repos.d
# 下载阿里云源
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
# 清除缓存重新索引
yum clean all && yum makecache && yum repolist

# 安装依赖环境
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel

# 设置英文字符集
localectl set-locale LANG="en_US.UTF-8"
localectl status

# 设置自动时间同步
echo '*/30 * * * * /usr/sbin/ntpdate ntp1.aliyun.com >/dev/null 2>&1' >>/var/spool/cron/root

# 修改用户可打开的文件描述符数量
cp /etc/security/limits.conf /etc/security/limits.conf.backup
echo "*        -       nofile       100000" >> /etc/security/limits.conf
# 所有进程最大文件符
# cat /proc/sys/fs/file-max
# 单个进程最大文件符
# ulimit -n
# soft limit 不能超过 hard limit

# 关闭防火墙
systemctl disable firewalld
systemctl stop firewalld
setenforce 0
cp /etc/selinux/config /etc/selinux/config.backup
sed -i.bak 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config

# 优化ssh连接速度
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup
sed -i.bak 's@#UseDNS yes@UseDNS no@g;s@^GSSAPIAuthentication yes@GSSAPIAuthentication no@g'  /etc/ssh/sshd_config

# 命令提示符加彩色
cp /etc/profile /etc/profile.backup
echo "export PS1='[\[\e[32;1m\]\u@\[\e[33;1m\]\h\[\e[34;1m\] \W\[\e[0m\]]\$ '" >> /etc/profile
source /etc/profile

```

### mysql大数据导入
```sql
-- https://blog.csdn.net/ydyuse/article/details/110109312
1.进入mysql
 mysql -u root -p

2.创建数据库
 CREATE DATABASE 数据库名;

3.设置参数
 set sql_log_bin=OFF; //关闭日志
 set autocommit=0; //关闭autocommit自动提交模式

4.使用数据库
 use 数据库名;

5.开启事务
 START TRANSACTION;

6.引入SQL文件
 source 文件的路径;

7.成功后事务提交
 COMMIT;
```
