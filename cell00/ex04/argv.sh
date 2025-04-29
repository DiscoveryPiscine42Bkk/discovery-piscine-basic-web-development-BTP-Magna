#!/bin/bash

arg_count=$#

if [ $arg_count -eq 0 ]; then
    echo "No arguments supplied"
elif [ $arg_count -eq 1 ]; then
    echo $1
elif [ $arg_count -eq 2 ]; then
    echo $1
    echo $2
else
    echo $1
    echo $2
    echo $3
fi
