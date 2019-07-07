#!/bin/bash
python3 generate-texfiles.py contentdb.json
pdflatex -synctex=1 -interaction=nonstopmode -shell-escape assets/formula/*.tex
#rm assets/formula/*.tex