```shell
# 切换到当前目录
current_dir=$(cd `dirname $0`; pwd)
cd $current_dir

function installJava() {
  local name="jdk"
  local file=$(ls | grep $name | grep 'tar.gz')

  echo "===================================================== tar zxf $current_dir/$file ====================================================="
  tar zxf $current_dir/$file

  local dir=$(ls -l | grep '^d' | grep $name | awk '{print $9}')
  local config=/etc/profile.d/java.sh
  echo "JAVA_HOME=$current_dir/$dir" > $config
  echo "CLASSPATH=.:\$JAVA_HOME/lib" >> $config
  echo "PATH=\$JAVA_HOME/bin:\$PATH" >> $config
  echo "export JAVA_HOME CLASSPATH PATH" >> $config
  echo "===================================================== config $config ====================================================="
  echo "$(cat $config)"

  echo "===================================================== source /etc/profile ====================================================="
  source /etc/profile

  echo "===================================================== java -version ====================================================="
  echo "$(java -version)"
}

function installMaven() {
  local name="apache-maven"
  local file=$(ls | grep $name | grep 'tar.gz')
  echo "===================================================== tar zxf $current_dir/$file ====================================================="
  tar zxf $current_dir/$file

  local dir=$(ls -l | grep '^d' | grep $name | awk '{print $9}')
  local config=/etc/profile.d/java.sh
  echo "M2_HOME=$current_dir/$dir" > $config
  echo "PATH=\$M2_HOME/bin:\$PATH" >> $config
  echo "export M2_HOME PATH" >> $config
  echo "===================================================== config $config ====================================================="
  echo "$(cat $config)"

  echo "===================================================== source /etc/profile ====================================================="
  source /etc/profile

  echo "===================================================== mvn --version ====================================================="
  echo "$(mvn --version)"
}

function installMysql() {
#  rpm -qa | grep mysql
  local file="mysql80-community-release-el7-6.noarch.rpm"
  echo "===================================================== wget http://repo.mysql.com/$file -O $file ====================================================="
  wget http://repo.mysql.com/$file -O $file
  echo "===================================================== rpm -ivh $current_dir/$file ====================================================="
  rpm -ivh $current_dir/$file
  echo "===================================================== ls -l /etc/yum.repos.d/ | grep mysql ====================================================="
  ls -l /etc/yum.repos.d/ | grep mysql
  echo "===================================================== yum repolist all | grep mysql ====================================================="
  yum repolist all | grep mysql
  echo "===================================================== yum-config-manager --disable mysql57-community ====================================================="
  yum-config-manager --disable mysql57-community
  echo "===================================================== yum-config-manager --enable mysql80-community ====================================================="
  yum-config-manager --enable mysql80-community
  echo "===================================================== yum install mysql-community-server ====================================================="
  yum install -y mysql-community-server
}

function installRedis() {
  local file="redis-stable.tar.gz"
  echo "===================================================== wget http://download.redis.io/$file -O $file ====================================================="
  wget http://download.redis.io/$file -O $file
  echo "===================================================== tar zxf $current_dir/$file ====================================================="
  tar zxf $current_dir/$file
  local dir=$(ls -l | grep '^d' | grep $name | awk '{print $9}')
  echo "===================================================== cd $current_dir/$dir ====================================================="
  cd $current_dir/$dir
  echo "===================================================== make ====================================================="
  make
}

installMysql

```
