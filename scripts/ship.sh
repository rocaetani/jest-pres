#!/usr/bin/env sh

# Quits the script if any command fails
set -e

### First, some helper functions ###

# Takes 1 argument, the error message
quit_with_error () {
    printf '\033[1;97;41m ERROR \033[0;m %s\n' "$1"
    exit 1
}

# Prints a heading in bold
print_stage_heading () {
    printf '\n\033[1m%s\033[0m\n\n' "$1"
}

# Quits the script if there are any uncomitted changes
ensure_clean_workdir () {
    # Make sure the working directory is clean, so tests and stuff can run
    # properly
    if [ -n "$(git status --porcelain)" ]; then
      quit_with_error "The repository has uncommited changes. Please commit or stash before shipping."
    fi
}

### And now, the actual script ###

# Run from the project root and main branch
PROJECT_ROOT="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"/..
cd "$PROJECT_ROOT"

if [ "$(git branch --show-current)" != "main" ]; then
    quit_with_error "ship-it.sh must be run while on the main branch."
fi

# Check for uncommitted changes
ensure_clean_workdir

# Opening credits
cat ./scripts/logo

print_stage_heading "🤠🎣 Pulling latest changes"
git pull

# Translations
print_stage_heading "🌐🎣 Downloading new translations"
cd frontend
npm run getTranslations
cd .. > /dev/null

# Lint
print_stage_heading "🚗🧹 Linting the frontend"
cd frontend
npm run lint:fix
cd .. > /dev/null

print_stage_heading "🧱🧹 Linting the Infrastructure"
cd infrastructure
npm run lint:fix
cd .. > /dev/null

# Pull and format/lint stages may have modified some files.
ensure_clean_workdir

# Test
print_stage_heading "🚗🧪 Testing the frontend"
cd frontend
npm run test
cd .. > /dev/null

# Push
print_stage_heading "💨⛵ Sail away!"
git push
print_stage_heading "🎉 Great Success!!"
