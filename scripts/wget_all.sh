#!/bin/bash

function do_wget {
    wget "http://www.techcontroversy.com:3001/$1" -O "../public/$1.json"
}

do_wget "french"
do_wget "italian"
do_wget "russian"
do_wget "polish"
do_wget "romanian"
do_wget "easteurope"
do_wget "southslavic"


