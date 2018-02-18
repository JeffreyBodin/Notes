// Module 2: Designing Your Own Website

// Components and Structure of a Website
// Websites are setup structurally like a tiered setup.
// Home Page --> Main Sections --> Subsections (content)
// Home page of a website is also known as an index page.
// Each piece of content is hosted on its own address, its own page.
// HTML = Hypertext Markup Language
// CSS = Cascading Style Sheets 

// Creating Your Own HTLM
// Tag = thing in <>

// Tag Attributes
// Tags can have attributes they give browser additional information. Alter other html tags. 
// href
href = ''
<a href = ''></a>
<a href="http://www.google.com">Link To Google</a>
// href specifies a link. Ie a link to google.
// src
src = ''
<img src='kizuna_ai_chibi.jpg'/>
// src specifies the source file. Ie displayed image etc.

// HTML Tag
<html></html>
// Required to validate every webpage. They enclose the entire html document following the the <!DOCTYPE html> tag until the end of the code.

// Head Tag
<head></head>
// Required to validate every webpage.

// Title Tag
<title></title>
// Required to validate every webpage.
// Goes inside of the <head></head> tag. Is the title of the webpage. Displays in the tab on top of webbrowser ie chrome tab's text.

// Body Tag
<body></body>
// Required to validate every webpage.

// Heading tag
<h1></h1>
<h2></h2>
// Header tags can be incremented as needed. Ex h1, h2, h3 etc.
// Each subsequent heading decreases in size inversely proportional to its designated header number.
// Ie header h1 seems to be around 20 font whereas h3 looks like 12 font.
// Headers are bolded.

// Paragraph Tag
<p></p>
// Is not large. Is not bolded by defualt.
// Will wrap text automatically by defualt.

// Anchor Tag
<a></a>
<a href = ''></a>
// Marks the beginning and/or end of a hypertext link.

// Break Tag
<br></>
<br/> // Same as above break tag.  
// Adds a paragraph/line/whitespace break. 
// Goes within the another tag containg text where whitespace/break required. 
// No closing tag.

// Strong Tag
<strong></strong>
<strong>山卄卂丅 下口口乚丂.. 卄口山 工 尸工丅丫 丅卄乇从. </strong>
// Bolds text that it surrounds.
// Use this tag instead b/c best practise.

// Bold "b" Tag
<b></b>
<b>丫口凵 卄卂リ乇 丅口 卄卂リ乇 卂 リ乇尺丫 卄工厶卄 工㔿 丅口 凵𠘨刀乇尺丂丅卂𠘨刀 尺工匚长 卂𠘨刀 从口尺丅丫.</b> 
// Bolds text that it surrounds.
// b tag is being deprecated in some browsers. Use strong tag instead. 

// Emphasis Tag
<em></em>
<em>丂从工尺长工𠘨厶</em>
// Italicises text that it surrounds.

// Image Tag
<img></img>
<img src="kizuna_ai_chibi.jpg"/>
<img src="https://raw.githubusercontent.com/JeffreyBodin/Notes/master/Coursera%20Intro%20To%20Web%20Development/kizuna_ai_chibi.jpg"/>
<img src="kizuna_ai_chibi.jpg" alt="AiGames"/>
<a href="https://www.youtube.com/channel/UCbFwe3COkDrbNsbMyGNCsDg"><img src="kizuna_ai_chibi.jpg" alt="AiGames"/></a>
// Image tags like above kizuna ai image will display once their source is defined by the src attribute.
// The images will be sourced by defualt to the directory where the html file is located.
// Other child/parent directories may be defined too.
// Images can be displayed from a direct link too. Ie kizuna ai image hosted in my github repository.
// Alt is an attribute that displays corresponding text in place of the image in err.
// Using an anchor tag with an img tag wrapped inside will display the image as a replacement for displayed link text.
// Ie the link's text pointing to the url would be instead the src'd image.

// HTML Table
<table></table>
// Similar to an excel table.
// Needs defined rows with the tr (table row tag)
// Needs defined data with td (table data)

// Border Attribute
<table border=""></table>
<table border="1"></table>
<table border="2"></table>
<table border="3" style="border: solid;"></table>
//This attribute sets the border surrounding the table.
// Value of 1 sets the border. Border thickness corresponds proportionally to value.
// The style attribute modifies the border. 
// Syles are setup similar too js object key value pairs but with a ; instead of a comma to end. Similar to how statements end.

// Table Row Tag
<tr></tr>
<tr>
    <td>Column A Row 1</td><td>Column B Row 1</td>
</tr>
// Table Data Tag
<td></td>
<td>Column A Row 1</td>
// dt is wrapped within the tr tag. See above.

// HTML Comments 
<!-- Commment goes here -->
// HTML comments are wrapped with in arrows. Arrow exclamation mark at beggining and just arrow at end.
// Is different than the <comment></comment> tag. Which displays text.