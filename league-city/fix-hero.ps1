$newHero = @'
        <!-- Hero Carousel -->
        <section class="relative w-full h-[300px] md:h-[500px] overflow-hidden">
            <div class="hero-carousel absolute inset-0">
                <div class="hero-slide active">
                    <img src="homepagehero/Apetizers.webp" alt="Red River BBQ Appetizers" class="w-full h-full object-cover" />
                </div>
                <div class="hero-slide">
                    <img src="homepagehero/AYCE RIBS2021.webp" alt="Red River BBQ All You Can Eat Ribs" class="w-full h-full object-cover" />
                </div>
                <div class="hero-slide">
                    <img src="homepagehero/Poppers.webp" alt="Red River BBQ Poppers" class="w-full h-full object-cover" />
                </div>
                <div class="hero-slide">
                    <img src="homepagehero/Brisket Gumbo.webp" alt="Red River BBQ Brisket Gumbo" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                <button class="carousel-dot active w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all" data-slide="0"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all" data-slide="1"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all" data-slide="2"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all" data-slide="3"></button>
            </div>
        </section>
'@

$content = Get-Content "dine-in-menu.html" -Raw
$pattern = '(?s)<!-- Hero Image -->.*?<div class="absolute inset-0 bg-black/45"></div>\s*</section>'
$content = $content -replace $pattern, $newHero
$content | Set-Content "dine-in-menu.html" -NoNewline -Encoding UTF8
Write-Host "Done updating dine-in-menu.html"
