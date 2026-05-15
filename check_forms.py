import re

lc_path = r'c:\Users\suppo\OneDrive\Desktop\Developer\Red-River-BBQ-mono-repo\league-city\catering\index.html'
katy_path = r'c:\Users\suppo\OneDrive\Desktop\Developer\Red-River-BBQ-mono-repo\katy\catering\index.html'

with open(lc_path, 'r', encoding='utf-8') as f:
    lc_html = f.read()

with open(katy_path, 'r', encoding='utf-8') as f:
    katy_html = f.read()

def get_action(html):
    m = re.search(r'<form[^>]*action=\"([^\"]+)\"', html)
    return m.group(1) if m else "None"

print("LC action:", get_action(lc_html))
print("Katy action:", get_action(katy_html))
