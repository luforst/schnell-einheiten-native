#!/bin/bash
python3 generate-texfiles.py contentdb.json
cd assets/formula
for texfile in *.tex
do
    pdflatex -synctex=1 -interaction=nonstopmode -shell-escape $texfile
    pdf2svg *.pdf
    rm *.pdf
done
#rm *.{pdf,tex,aux,synctex,log}