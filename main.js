
var keys = {
    0: ['Esc','1', '2', '3', '4', '5', '6', '7', '8', '9', '0','-','+','~'],
    1: ['Tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','[',']','Delete'],
    2: ['Control','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',';','"','Return'],
    3: ['shl','z', 'x', 'c', 'v', 'b', 'n', 'm','<','>','?','shr','fn'],
    length: 4
}

var hash = {
    q: 'qq.com',
    w: 'wix.com',
    e: 'evernote.com',
    r: 'https://raymondguo78.github.io',
    t: 'https://blog.techbridge.cc',
    y: 'yahoo.com.hk',
    u: 'uniqlo.com',
    i: 'ikea.com',
    o: 'office.com',
    p: 'paypal.com'
}

 //取出localstorage 中的 storage1 對應的 hash
 var hashInLocalStorage = JSON.parse(localStorage.getItem('storage1') || 'null')
if (hashInLocalStorage) {
    hash = hashInLocalStorage
}


//根據hash建立鍵盤
index = 0
while (index < keys.length) {
    div1 = document.createElement('div')
    main1.appendChild(div1)
    row = keys[index]
    index2 = 0
    while (index2 < row.length) {
        kbd1 = document.createElement('kbd')
        div1.appendChild(kbd1)
        kbd1.textContent = row[index2]
        kbd1.className = 'key'
        kbd1.id = row[index2] + 'p'
        button1 = document.createElement('button')
        kbd1.appendChild(button1)
        button1.textContent = 'edit'
        button1.id = row[index2]
        button1.onclick = function (click1) {
            key = click1.target.id
            x = prompt('input new link')
            hash[key] = x
            localStorage.setItem('storage1', JSON.stringify(hash))
        }
        index2 = index2 + 1
    }
    index = index + 1
}



//specific size of key cap
Esc.parentElement.className = 'key esc second-keycap';
Tab.parentElement.className = 'key tab second-keycap';
Delete.parentElement.className = 'key delete second-keycap';
Control.parentElement.className = 'key control second-keycap';
Return.parentElement.className = 'key return second-keycap';
shl.parentElement.className = 'key shl second-keycap';
shr.parentElement.className = 'key shr second-keycap';
fn.parentElement.className = 'key fn second-keycap';





document.onkeypress = function (press1) {
    key = press1.key
    website = hash[key]
    document.getElementById('p1').innerHTML = website
    }

document.onkeydown = function (pp) {
    presedKey = pp.key
    console.log(presedKey)
   document.getElementsByClassName('key').classList.add('pressed')
}

document.onkeyup = function (ee) {
    presedKey1 = ee.key
    console.log(presedKey1)
   document.getElementsByClassName('key').classList.remove('pressed')
}