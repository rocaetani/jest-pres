#!/usr/bin/env sh

set -e

# Prints a heading in bold
print_stage_heading () {
    printf '\n\033[1m%s\033[0m\n\n' "$1"
}

# Verify and install dependencies
install_npm_dependencies () {
    if [ ! -d "$1/node_modules" ] ; then
        print_stage_heading "➕ Installing $1 dependencies..."
        cd $1
        npm install
        cd "$PROJECT_ROOT"
    fi
}

# Run from the project root
PROJECT_ROOT="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"/..
cd "$PROJECT_ROOT"

if [ ! "$(command -v concurrently)" ]; then
    npm install -g "concurrently"
fi

# Dependencies on the projects
install_npm_dependencies "mock-api"
install_npm_dependencies "frontend"

concurrently --kill-others \
    "cd frontend && npm run start" \
    --names "Frontend" \
    --prefix-colors "#848377"


# Here is an example of a much more complex "concurrently" command:

# concurrently --kill-others \
#     "cd avengers-tower/backend && source .env && mix deps.get && mix phx.server" \
#     "cd avengers-tower/frontend && source .env && npm start" \
#     "cd client-details && source .env && npm run build && npm run preview" \
#     "cd dashboard && source .env && npm run serve" \
#     "cd header && npm run serve" \
#     "cd invite && source .env && npm run serve" \
#     "cd shared-api && go get ./... && go run cmd/main.go -listen-addr=localhost:8888" \
#     --names "Tower BE,Tower FE,Details,Dashboard,Header,Invite,Shared API" \
#     --prefix-colors "#81688d,#848377,#9932CC,#FFFF00,#00FFFF,#008000,#00ADD8"
