// ==UserScript==
// @author      Snakejuice
// @name        Pornhub gif thumb replace
// @description Changes a websites user-agent (device view) to that of a desktop web-browser
// @match        https://www.Pornhub.com/gif*
// @include      https://www.Pornhub.com/gif*
// @match        *pornhub.com/gif*
// @include      *pormhub.com/gif*
// @include     https://www.pornhub.com/gif/*
// @match      https://www.pornhub.com/gif/*
// @match     *pornhub.com/gif/*
// @include     *pornhub.com/gif/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @run-at      document-start
// @grant       none
// ==/UserScript==

   function() {
    if (!(window.location.host == "pornhub.com"))
	 { 
		return; 
	};

var elements = document.document.getElementByTagName("html").innerHTML;
const html = elements;

const regex = /(<div class="title">Related GIFs<\/div>\n\s+\D+)(\n?\s+((<a href.*)(img) src="(https:\/\/web.archive.org\/web\/\d{14}(im_)?\/)(https:\/\/dl.phncdn.com\/pics\/gifs\/\d{3}\/\d{3}\/\d{3}\/)\(.{9}\)\(.{19}\)(\d{7}a.)jpg".*<\/a>)+)(\n?\s+((<a href.*)(img) src="(https:\/\/web.archive.org\/web\/\d{14}(im_)?\/)(https:\/\/dl.phncdn.com\/pics\/gifs\/\d{3}\/\d{3}\/\d{3}\/)\(.{9}\)\(.{19}\)(\d{7}a.)jpg".*<\/a>)+?)+?/igm;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('(<div class="title">Related GIFs<\\\/div>\\n\\s+\\D+)(\\n?\\s+((<a href.*)(img) src="(https:\\\/\\\/web.archive.org\\\/web\\\/\\d{14}(im_)?\\\/)(https:\\\/\\\/dl.phncdn.com\\\/pics\\\/gifs\\\/\\d{3}\\\/\\d{3}\\\/\\d{3}\\\/)\\(.{9}\\)\\(.{19}\\)(\\d{7}a.)jpg".*<\\\/a>)+)(\\n?\\s+((<a href.*)(img) src="(https:\\\/\\\/web.archive.org\\\/web\\\/\\d{14}(im_)?\\\/)(https:\\\/\\\/dl.phncdn.com\\\/pics\\\/gifs\\\/\\d{3}\\\/\\d{3}\\\/\\d{3}\\\/)\\(.{9}\\)\\(.{19}\\)(\\d{7}a.)jpg".*<\\\/a>)+?)+?', 'igm')

const str = html;
/* `					<div class="title">Related GIFs</div>
					<div class="content clearfix">
																					<a href="/web/20190518100031/https://www.pornhub.com/gif/5439692"><img src="https://web.archive.org/web/20190518100031im_/https://dl.phncdn.com/pics/gifs/005/439/692/(m=bKOCwLV)(mh=ydRvF5_MuAAS7TiN)5439692a.jpg" alt="lil pregaz emo slut sitting on dick"></a>
																												<a href="/web/20190518100031/https://www.pornhub.com/gif/5321392"><img src="https://web.archive.org/web/20190518100031im_/https://dl.phncdn.com/pics/gifs/005/321/392/(m=bKOCwLV)(mh=WF1gRZXi6r48ZWkw)5321392a.jpg" alt="lil emo MILF slut humping pillow tits out"></a>`;
                                                                                                                */
const subst = `$1<div>\n<video src="$5$70$8mp4"><\/video>\n<\/div>\n<div>\n<video src="$14$160$17mp4"><\/video>\n<\/div>`;

// The substituted value will be contained in the result variable
const result = str.replace(regex, subst);
document.getElementByTagName("html").innerHTML = result; 
console.log('Substitution result: ', result);


/*

            var puTargetURLvalue = localStorage.getItem('puTargetURL');
            if (puTargetURLvalue && isURL(puTargetURLvalue) && window.opener) {
                if ((typeof puTargetURLvalue === "string") && (puTargetURLvalue != "")) {
                    localStorage.removeItem('puTargetURL');
                    document.write('</head><body style="background: black;"><a target="_blank" href="' + puTargetURLvalue +'" id="linkToGo">&nbsp;</a></body></html>');
                    document.getElementById('linkToGo').click();
                }
            }
        }
        var page_params = {};

*/

/*

li.

li id="gif41150001"

data-mp4

<script type="text/javascript">
    var YES_NO_MODAL_TEXT = {"deleteGif":"Delete\/Remove GIF","accept":"Accept","cancel":"Cancel"};
</script>
                                            <li id="gif41150001">
	<a href="/gif/41150001" title="Lil Emo Slut cums from masturbating with her spray - Gif 3">
		<img
			alt="Lil Emo Slut cums from masturbating with her spray - Gif 3"
			src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
			data-thumb_url="https://dl.phncdn.com/pics/gifs/041/150/001/(m=bKOCwLV)(mh=liHvkUgmj1GRQWox)41150001a.jpg"
			title="Lil Emo Slut cums from masturbating with her spray - Gif 3"
			data-static-url="https://dl.phncdn.com/pics/gifs/041/150/001/(m=bKOCwLV)(mh=liHvkUgmj1GRQWox)41150001a.jpg"
			data-gif-url="https://dl.phncdn.com/pics/gifs/041/150/001/(m=ldpwiqaIYzv_Ai)(mh=dbw1_oLkv-F0m-jV)41150001a.gif"
			width="168" height="125"
            class="js-gifPreview"
		/>
					<span class="gifTitle">Lil Emo Slut cums from masturbating with her spray - Gif 3</span>
		        <div id="js-gifWebMWrapper" class="gifPreviewWrapper" data-gif="https://dl.phncdn.com/pics/gifs/041/150/001/(m=ldpwiqaIYzv_Ai)(mh=oKYPqi98PuhqT2lJ)41150001b.gif"
            data-jpg="https://dl.phncdn.com/pics/gifs/041/150/001/(m=bKOCwLV)(mh=liHvkUgmj1GRQWox)41150001a.jpg" data-mp4="https://dl.phncdn.com/pics/gifs/041/150/001/41150001a.mp4"
            data-webm="https://dl.phncdn.com/pics/gifs/041/150/001/41150001a.webm" data-fallback="https://dl.phncdn.com/pics/gifs/041/150/001/41150001a.mp4">
            <?
            / **
             * GIF or Webm created dymanically
             * append to #js-gifWebMWrapper
             * /
            ?>
        </div>
        	</a>
</li>



/>
*/

/*

const text  = document.querySelectorAll("body").innerHTML; 

var htmlz = mystring;
let mystring = text.replace(/\[h2\]\[\/h2\]/img, '');
console.log(string);





const htmlz  = document.querySelectorAll("body").innerHTML; 

var regex = /(\<a href=")(https:\/\/www.pornhub.com\/gif\/)(\d{2})(\d{3})(\d{3})(.*)(\<\/a\>)/igm
,   text = htmlz
,   result = text.replace(regex, "");

console.log(result);




const iterator = text.matchAll(/(\<a href=")(.*pornhub\.com\/gif\/)(\d{2})(\d{3})(\d{3})(.*".*)(\<\/a\>)/mgi);
const nodes = element.getElementsByTagName("a");

let numb = nodes.length;




function getAllElementsWithAttribute(attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName('a');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}

getAllElementsWithAttribute('href');



<a href="https://www.pornhub.com/gif/38557941"></a>

<script>
const  htmlz = document.getElementByTagName("html").innerHTML; 

let text = htmlz;
let result = text.replace(/(\<a href\=\")(.*pornhub\.com\/gif\/)(\d{2})(\d{3})(\d{3})(.*\".*)(\<\/a\>)/img, /is);
document.getElementByTagName("html").innerHTML = result; 
</script>






// 1  2      3                              4                        5   6   7   8      9
const string.match = "(<a)(.*)(href=")(https://www.pornhub.com/gif/)((..)(...)(...))(".*)(</a>)"

var x = string.replace("<video $2 src="https://dl.phncdn.com/pics/gifs/0$5/$6/$7a.mp4$8</video>")




tag.replace(/(a[^>]*href=['"])(['"])+(\s*)[^'"]*\s?/g, '$1REPLACEDa.mp4');

(img[^>]*src=['"])+(?!http:\/\/)\s*[^'"]*





<!-- /* //*** !!  PROPER - from regex 101 testing site  !! ***// */ -->
/*
(\<a h(https:\/\/www.pornhub.com\/gif\/)(\d{2})(\d{3})(\d{3})(.*)(\<\/a\>)

\<video loop="" unmuted="" autoplay="" src=\"https://dl.phncdn.com/pics/gifs/0$3/$4\/$5a.mp4$6\<\/video\>

var x = document.getElemenByTagNamet("a");  
*/
*/


*/
