import re
with open(r'c:\Users\suppo\OneDrive\Desktop\Developer\Red-River-BBQ-mono-repo\league-city\catering\index.html', 'r', encoding='utf-8') as f:
    text = f.read()

def get_action(html):
    m = re.search(r'<form[^>]*action="([^"]+)"', html)
    return m.group(1) if m else "None"

print("LC action:", get_action(text))

with open(r'c:\Users\suppo\OneDrive\Desktop\Developer\Red-River-BBQ-mono-repo\katy\catering\index.html', 'r', encoding='utf-8') as f:
    katy_text = f.read()
print("Katy action:", get_action(katy_text))

# Let's extract the form block from Katy
katy_form_match = re.search(r'(<div id="booking-form".*?</form>\s*</div>)', katy_text, re.DOTALL)
katy_form = katy_form_match.group(1) if katy_form_match else ""

# Let's extract the form block from LC
lc_form_match = re.search(r'(<div id="booking-form".*?</form>\s*</div>)', text, re.DOTALL)
lc_form = lc_form_match.group(1) if lc_form_match else ""

if katy_form and lc_form:
    print("Found forms in both!")
    print("Katy form length:", len(katy_form))
    print("LC form length:", len(lc_form))

    # To satisfy the user, we will replace the LC layout into Katy, BUT KEEP KATY'S HEADER, FOOTER, and FORM EXACTLY AS IS.
    # We will grab the whole 'cat-board-wrap' from LC, replace the 'catering-menu' section in Katy with it.
    
    lc_board_match = re.search(r'(<div class="cat-board-wrap py-8 px-4">.*?</div>\s*</main>)', text, re.DOTALL)
    if lc_board_match:
        lc_board = lc_board_match.group(1)
        # Update LC specific info to Katy inside lc_board
        lc_board = lc_board.replace('Red River BBQ & Grill', 'Red River BBQ & Burger')
        lc_board = lc_board.replace('Red River BBQ &amp; Grill', 'Red River BBQ &amp; Burger')
        lc_board = lc_board.replace('281-332-8086', '281-578-3800')
        lc_board = lc_board.replace('(281) 332-8086', '(281) 578-3800')
        lc_board = lc_board.replace('+12813328086', '+12815783800')
        
        # Now replace the 'booking-form' inside lc_board with the original Katy 'booking-form'
        lc_board_form_match = re.search(r'(<div id="booking-form".*?</form>\s*</div>)', lc_board, re.DOTALL)
        if lc_board_form_match:
            lc_board = lc_board[:lc_board_form_match.start()] + katy_form + lc_board[lc_board_form_match.end():]
        
        # Now let's extract the menu section from Katy and replace it
        katy_menu_match = re.search(r'(<section class="py-12 px-4 bg-gray-50" id="catering-menu">.*?</div>\s*</main>)', katy_text, re.DOTALL)
        if katy_menu_match:
            new_katy = katy_text[:katy_menu_match.start()] + lc_board + katy_text[katy_menu_match.end():]
            
            with open(r'c:\Users\suppo\OneDrive\Desktop\Developer\Red-River-BBQ-mono-repo\katy\catering\index.html', 'w', encoding='utf-8') as f:
                f.write(new_katy)
            print("Wrote new Katy file.")
        else:
            print("Could not find Katy menu section.")
