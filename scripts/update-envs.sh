#!/usr/bin/env sh

set -e

SCRIPT_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd "$SCRIPT_PATH"/..

if op account list | grep 'team-eagle.vwds.rs.pt@vwds.pt' > /dev/null; then
    : # Nothing to do
else
    op account add --address 'https://digitallablisbon.1password.com' --email 'team-eagle.vwds.rs.pt@vwds.pt'
fi

OP_SIGNIN_CMD=$(op signin)
eval "$OP_SIGNIN_CMD"

op read -f 'op://Team-Eagle/PDE-new Sales Index .phrase.yml/notesPlain' -o 'frontend/.phrase.yml'
op read 'op://Team-Eagle/PDE-new Sales Index .npmrc/notesPlain' -o 'frontend/.npmrc'
op read 'op://Team-Eagle/PDE-new Sales Index .env/notesPlain' -o 'frontend/.env'
