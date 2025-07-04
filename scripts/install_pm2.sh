# #!/bin/bash
# sudo apt update
# sudo apt install npm -y
# npm install pm2 -g


#!/bin/bash
set -e

# Install Node.js, npm, and pm2
apt-get update
apt-get install -y nodejs npm
npm install pm2 -g
