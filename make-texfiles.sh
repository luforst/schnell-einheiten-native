#!/bin/bash
python3 generate-texfiles.py contentdb.json
pdflatex -shell-escape assets/formula/*.tex
#rm assets/formula/*.tex