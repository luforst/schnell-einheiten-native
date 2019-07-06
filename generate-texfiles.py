#!/usr/bin/env python3
import json
import sys

BOILERPLATE_A = "\\documentclass[11pt,border=1pt,convert]\{standalone\}\n\\begin\{document\}\n$"
BOILERPLATE_B = "$\\end\{document\}"

contentdb = open(sys.argv[1], 'r')
contentdb = json.load(contentdb)

textemplate = open('formula.tex', 'r')

def generateTexFile(texformula: str, filename: str):
    f = open(filename, "w")
    f.write(BOILERPLATE_A + texformula + BOILERPLATE_B)
    f.close()

for category in contentdb.keys():
    for elem in category:
        generateTexFile(elem[0], elem[0]+"_gr.tex")
        generateTexFile(elem[1], elem[0]+"_fz.tex")
        generateTexFile(elem[2], elem[0]+"_einh.tex")
generateTexFile("?", "no.tex")