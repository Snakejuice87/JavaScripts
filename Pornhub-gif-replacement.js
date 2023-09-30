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


