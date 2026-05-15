with open(r'c:\Users\suppo\OneDrive\Desktop\Developer\Red-River-BBQ-mono-repo\katy\catering\index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

new_content = """
                        <!-- TEXAS BAR-B-QUE MEALS -->
                        <div>
                            <h3 class="bg-red-600 text-white px-4 py-2 font-oswald font-bold text-lg uppercase tracking-wide text-center mb-4">Texas Bar-B-Que Meals</h3>
                            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4 text-xs">
                                <p class="font-semibold mb-1">Includes: Pickles, Onions, Jalapenos, Sliced Bread, our famous Bar-B-Que Sauce, Plates, Napkin Packs &amp; Serving Utensils</p>
                                <p class="font-semibold">Includes your Choice of Two Sides: Potato Salad, Pinto Beans, Baked Beans, Cole Slaw &amp; Macaroni Salad</p>
                            </div>
                            <div class="space-y-4 text-xs">
                                <div>
                                    <p class="font-bold text-sm uppercase">Ranch Hand</p>
                                    <p class="text-gray-600 italic mb-1">Pick two meats:</p>
                                    <p class="text-gray-600">Slow-smoked Angus Brisket, Sausage (reg or spicy), Bone-in Chicken or Pulled Pork</p>
                                    <p class="text-red-600 font-bold mt-1">Pick-Up or Delivery: $15.95 | Full-Service: $19.95</p>
                                </div>
                                <div>
                                    <p class="font-bold text-sm uppercase">Wagon Wheel</p>
                                    <p class="text-gray-600 italic mb-1">Pick three meats:</p>
                                    <p class="text-gray-600">Slow-smoked Angus Brisket, Sausage (reg or spicy), Bone-in Chicken or Pulled Pork</p>
                                    <p class="text-red-600 font-bold mt-1">Pick-Up or Delivery: $17.95 | Full-Service: $21.95</p>
                                </div>
                                <div>
                                    <p class="font-bold text-sm uppercase">Outlaw</p>
                                    <p class="text-gray-600">Slow-smoked Angus Brisket, Pulled Pork &amp; Tender Pork Ribs</p>
                                    <p class="text-red-600 font-bold mt-1">Pick-Up or Delivery: $19.95 | Full-Service: $23.95</p>
                                </div>
                                <div>
                                    <p class="font-bold text-sm uppercase">Big-Tex</p>
                                    <p class="text-gray-600">Slow-smoked Angus Brisket, Bone-in Bar-B-Que Chicken, Pulled Pork &amp; Slow-smoked Turkey Breast</p>
                                    <p class="text-red-600 font-bold mt-1">Pick-Up or Delivery: $20.95 | Full-Service: $24.95</p>
                                </div>
                                <div>
                                    <p class="font-bold text-sm uppercase">Texas Spread</p>
                                    <p class="text-gray-600">Angus Beef Brisket, Sausage (reg or spicy), Bone-in Bar-B-Que Chicken &amp; Tender Pork Ribs</p>
                                    <p class="text-red-600 font-bold mt-1">Pick-Up or Delivery: $21.95 | Full-Service: $25.95</p>
                                </div>
                                <p class="text-gray-500 italic">*500 Guests or more please inquire</p>
                            </div>
                        </div>

                        <!-- UPGRADE OPTIONS -->
                        <div>
                            <h3 class="bg-gray-800 text-white px-4 py-2 font-oswald font-bold text-md uppercase tracking-wide text-center mb-4 mt-8">Upgrade Options</h3>
                            <div class="space-y-2 text-xs">
                                <div class="flex justify-between border-b border-gray-200 pb-1">
                                    <span class="font-bold">Mashed Potatoes &amp; Gravy</span>
                                    <span class="text-red-600 font-bold">$1.50</span>
                                </div>
                                <div class="flex justify-between border-b border-gray-200 pb-1">
                                    <span class="font-bold">Mac &amp; Cheese</span>
                                    <span class="text-red-600 font-bold">$1.50</span>
                                </div>
                                <div class="flex justify-between border-b border-gray-200 pb-1">
                                    <span class="font-bold">Broccoli, Rice &amp; Cheese</span>
                                    <span class="text-red-600 font-bold">$1.50</span>
                                </div>
                                <div class="flex justify-between border-b border-gray-200 pb-1">
                                    <span class="font-bold">Green Beans</span>
                                    <span class="text-red-600 font-bold">$1.25</span>
                                </div>
                                <div class="flex justify-between border-b border-gray-200 pb-1">
                                    <span class="font-bold">Wild Rice</span>
                                    <span class="text-red-600 font-bold">$1.25</span>
                                </div>
                                <div class="mt-4">
                                    <p class="font-bold">Add 3<sup>rd</sup> Side: <span class="text-red-600">$2.75</span></p>
                                    <p class="text-gray-600 mt-1">Pinto Beans, Baked Beans, Cole Slaw, Mac Salad, Mashed Potatoes, Mac &amp; Cheese, Green Beans, Wild Rice, Cream Corn and Broccoli, Rice &amp; Cheese Casserole</p>
                                </div>
                                <div class="mt-4 pt-2 border-t border-gray-300">
                                    <p class="font-bold text-center">Add a Tossed Salad: <span class="text-red-600">$2.95 per person</span></p>
                                </div>
                            </div>
                        </div>

                        <!-- URBAN COWBOY MEALS -->
                        <div>
                            <h3 class="bg-red-600 text-white px-4 py-2 font-oswald font-bold text-lg uppercase tracking-wide text-center mb-4 mt-8">Urban Cowboy Bar-B-Que Meals</h3>
                            <p class="text-xs italic text-gray-700 leading-relaxed mb-4">The Urban Cowboy menu is only available for Full-Service Events. Includes upgraded acrylic plates &amp; linen-like wrapped flatware. These meals offer boneless bar-b-que chicken breast, homemade yeast rolls &amp; choice side dishes.</p>
                            <div class="space-y-4 text-xs">
                                <div>
                                    <p class="font-bold text-sm uppercase">Texas Twist</p>
                                    <p class="text-gray-600">Brisket &amp; Turkey Breast Carving Station. Green Beans &amp; Mashed Potato Bar with toppings &amp; rolls.</p>
                                    <p class="text-gray-500 italic mt-1">*Meat Carver required &amp; will be added to your proposal.</p>
                                    <p class="text-red-600 font-bold mt-1">Full-Service: $23.95</p>
                                </div>
                                <div>
                                    <p class="font-bold text-sm uppercase">Texas Tango</p>
                                    <p class="text-gray-600">Brisket &amp; Bar-B-Que Chicken Breast. Green Beans, Garlic Mashed Potatoes, Cream Gravy, sweet &amp; spicy Bar-B-Que sauce &amp; homemade yeast rolls</p>
                                    <p class="text-red-600 font-bold mt-1">Full-Service: $23.95</p>
                                </div>
                                <div>
                                    <p class="font-bold text-sm uppercase">Taste of Texas</p>
                                    <p class="text-gray-600">Brisket, peppered Turkey Breast &amp; tender Pork Ribs. Served with Cream Corn, Mac &amp; Cheese, Green Beans, sweet &amp; spicy Bar-B-Que sauce &amp; homemade yeast rolls</p>
                                    <p class="text-red-600 font-bold mt-1">Full-Service: $26.95</p>
                                </div>
                            </div>
                        </div>
"""

target = '<!-- SPECIALTY MENU ITEMS -->'
text = text.replace(target, new_content + '\n                        ' + target)

with open(r'c:\Users\suppo\OneDrive\Desktop\Developer\Red-River-BBQ-mono-repo\katy\catering\index.html', 'w', encoding='utf-8') as f:
    f.write(text)
print('Done!')
