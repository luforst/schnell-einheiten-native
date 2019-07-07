#!/bin/bash
python3 generate-texfiles.py contentdb.json
cd assets/formula
pdflatex -synctex=1 -interaction=nonstopmode -shell-escape *.tex
pdf2svg *.pdf
#rm *.{pdf,tex,aux,synctex,log}