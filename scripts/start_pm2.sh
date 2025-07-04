# #!/bin/bash
# cd /todo-react/frontend
# pm2 --name todo-app-fe start npm -- start


#!/bin/bash
set -e

# APP_DIR="/home/ubuntu/three-tier-app-code/frontend"
APP_DIR="/home/ubuntu/three-tier-app-code"

cd "$APP_DIR" || { echo "Directory not found: $APP_DIR"; exit 1; }

# Optionally reinstall deps:
# npm install

# Launch the app
pm2 start npm --name todo-app-fe -- start
pm2 save
