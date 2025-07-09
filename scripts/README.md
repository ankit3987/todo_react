# install codedeply agent

sudo apt update

sudo apt install ruby

sudo apt install wget

wget https://aws-codedeploy-ap-south-1.s3.ap-south-1.amazonaws.com/latest/install

chmod +x ./install

sudo ./install auto

systemctl status codedeploy-agent
