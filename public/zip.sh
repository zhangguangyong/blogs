# 切换到当前目录
current_dir=$(cd `dirname $0`; pwd)
cd "$current_dir/img"

# 文件列表
files=($(ls))
for (( i = 0; i < 5; i++ )); do
  squoosh-cli --mozjpeg auto "${files[@]}"
done

