#!/usr/bin/env bash

set -e


# From https://stackoverflow.com/a/16844327/7446875

BIWhi='\x1b[1;97m';
On_Red='\x1b[41m';
ResetColor='\x1b[0m';


brew_install () {
    if brew list "$1" > /dev/null; then
        echo "$1 already installed"
    else
        brew install "$1"
    fi
}

brew_install_cask () {
    if brew list --cask "$1" > /dev/null; then
        echo "$1 already installed"
    else
        brew install --cask "$1"
    fi
}


SCRIPT_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd "$SCRIPT_PATH"/..

if groups "$USER" | grep -E '\badmin\b' > /dev/null; then
     : # ok, nothing needs to be done
else
    echo -e "$BIWhi""$On_Red"" ERROR ""${ResetColor}" "You need PowerUser enabled from Self-Service for this script to work."
    exit 1
fi

echo "🔌 Install requirements"

brew tap phrase/brewed
brew_install phrase
brew_install asdf

echo "🤫 Creating secrets files"
./scripts/update-envs.sh

asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git || :

echo
echo "🛠 Installing tool versions"
echo
cd frontend && asdf install && cd ..

# asdf
echo "🤔 Is this your first time using asdf? If so, please follow these instructions:"
echo '🔗 https://asdf-vm.com/guide/getting-started.html#_3-install-asdf'
echo "Otherwise..... 🚶‍♂️"
echo
echo "✅ Setup complete!"
echo
echo "🥳"
