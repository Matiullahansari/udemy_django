$('h1')
Object { 0: h1
, length: 1, prevObject: Object(1) }

$('dfs')
Object { length: 0, prevObject: Object(1) }

var x = $('h1')
undefined
x
Object { 0: h1
, length: 1, prevObject: Object(1) }

x.css('color','red')
Object { 0: h1
, length: 1, prevObject: Object(1) }

x.css('background','black')
Object { 0: h1
, length: 1, prevObject: Object(1) }

var newCSS = {
'color':'white',
'background':'blue',
}
undefined

newCSS
Object { color: "white", background: "blue" }

x.css(newCSS)
Object { 0: h1
, length: 1, prevObject: Object(1) }

var listItems = $('li')
undefined

listItems
[li, li, li, li, li, li#special]

listItems.css('color', 'blue')
[li, li, li, li, li, li#special]

listItems.eq(0).css('color', 'orange')
[li]

listItems.eq(-1).css('color', 'orange')
[li]

$('hi').text()

$('hi').text('BRAND NEW TEXT')

$('hi').html("<em>new</em>")

$('input')

$('input').eq(1).attr('type', 'checkbox')

$('input').eq(0).val('New Value!')

$('h1').addClass('turnRed')

$('h1').removeClass('turnRed')

$('h1').toggleClass('turnBlue')
