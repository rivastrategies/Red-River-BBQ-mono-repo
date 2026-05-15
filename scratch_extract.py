with open(r'c:\Users\suppo\OneDrive\Desktop\Developer\Red-River-BBQ-mono-repo\league-city\catering\index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

match1 = re.search(r'(<div class="cat-section-title">Texas Bar-B-Que Meals</div>.*?)(?=<div class="cat-section-title">Sandwich Packages</div>)', text, re.DOTALL)
if match1:
    print('--- TEXAS BBQ ---')
    print(match1.group(1).strip())

match2 = re.search(r'(<div class="cat-section-title">Sandwich Packages</div>.*?)(?=<div class="cat-section-title">Salads</div>)', text, re.DOTALL)
if match2:
    print('--- SANDWICH PACKAGES ---')
    print(match2.group(1).strip())

match3 = re.search(r'(<div class="cat-section-title">Salads</div>.*?)(?=</div>\s*</div>\s*<!-- Specialty Items -->|</div>\s*<div class="cat-sheet">)', text, re.DOTALL)
if match3:
    print('--- SALADS ---')
    print(match3.group(1).strip())
