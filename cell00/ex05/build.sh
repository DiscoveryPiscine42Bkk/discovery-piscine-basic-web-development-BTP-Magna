#!/bin/bash

# if not argument exit
if [[ $# -eq 0 ]]; then
    echo "No arguments supplied"
else
    # get each argument into arg variable
    for arg in $@; do
        mkdir ex$arg
    done
fi
