#!/bin/bash
python3 generate-texfiles.py contentdb.json
pdflatex assets/formula/*.tex
#rm assets/formula/*.tex