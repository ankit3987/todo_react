#!/bin/bash
cd /todo-react/frontend
pm2 --name todo-app-fe start npm -- start
