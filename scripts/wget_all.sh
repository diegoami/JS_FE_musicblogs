#!/bin/bash

function do_wget {
    /usr/bin/wget "http://18.194.147.93:3001/$1" -O "../public/$1.json"
}

do_wget "french"
do_wget "italian"
do_wget "russian"
do_wget "polish"
do_wget "romanian"
do_wget "easteurope"
do_wget "southslavic"


