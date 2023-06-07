Basic HTML to be able to make multiple templates.



~~~~~~~~~~~~~~~~~~~~~

To Do :
menu collapse after click
locations are correct on menu click
color-independent glyphs for the top bar

@media_queries
on wide view: 
picture takes 100vw
	or possibly a large vw with a blurred background of similar colors?
td needs margins
p needs columns and margins
header - slight margin increase (up to 5em, no larger)
reorganize footer : 
	coiffeur to the left - justify left, takes up 60% of the used space min
	suivre to the right - a little more breathing room for these guys
	legal and credit in-line with a vertical break between them





Multiple Languages : 
Research suggests : 
-1- have your html page in each language -- clicking on the toggle loads the other page (likely linked to the same js and css etc, just language html switch. 
	this necessarily means changing two files any time you make a change which is a bit annoying/tedious/error prone.
	sometimes this leads to really clunky different sites : https://www.isparis.edu/about-fr
-2-  britishschool.fr has a link : <a href="#googtrans/en" class="eng isSelected" title="in english" area-label="in english" data-taptarget>
	they seem to be using bootstrap : https://stackoverflow.com/questions/21944735/what-is-the-data-target-attribute-in-bootstrap-3
	also json
	also thousands of lines of css in the index.html body. wow. why. I have much to learn.

▼▼---- this is a comment : this starts the code snippet ----▲▲ 
▼▼---- uninspected scripts from above site probably to do with google translate ----▲▲ 

▼▼---- PS there is more below ----▲▲ 

   <script>
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,fr',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true,
            gaTrack: true,
        }, 'google_translate_element');
    }
    </script>
    <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <script>
    var languageInterval = setInterval(function() {
        if (window.jQuery !== undefined) {
            $('.langOptions a').click(function(event) {
                window.location = $(this).attr('href');
                location.reload();
            });
            clearInterval(languageInterval);
        }
    }, 500);
    </script>
▼▼---- this is a comment : this ends the code snippet ----▲▲ 

-3- service-public.fr uses an automatic translator (and has a warning about it)
	they use a tiny form for their toggle, but I don't see how the translation happens...especially since it doesn't work on the page right now.
-- not working on a few different sites. -\_O_/-   <-- (shrug)

~~~~~~~
my idea : 
Have a [main] element for each language.
By default one is visible, the others are hidden.
JS switch that hides one and makes another visible on click.


callToAction :
don't use 'innerHTML'
Just find and replace so you have the correct original throughout the site

