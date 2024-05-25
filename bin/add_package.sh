#!/bin/bash

read -r -p 'Package name: ' package

pip install $package

pip freeze > requirements.txt

echo "Success"
