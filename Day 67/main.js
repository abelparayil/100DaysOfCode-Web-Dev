document.body.cursor = 'none';

const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const follow = document.createElement('div');
follow.classList.add('follow');
document.body.appendChild(follow);

function move(obj, e) {
    obj.style = '';
    obj.style.top = e.clientY +'px';
    obj.style.left = e.clientX +'px';
}

if (cursor) {
    window.addEventListener('mousemove', function(event) {
        let e = event;
        let t = e.target;
        let f = follow;
        let c = cursor;

        if (t.tagName === 'A') {
            c.style.background = 'transparent';
            f.style.top = t.offsetTop + 'px';
            f.style.left = t.offsetLeft + 'px';
            // f.style.top = t.offsetTop + (t.clientHeight - f.clientHeight) / 2 + 'px';
            // f.style.left = t.offsetLeft + (t.clientWidth - f.clientWidth) / 2 + 'px';
            f.style.display = 'flex';
            f.style.alignItems = 'center';
            f.style.justifyContent = 'center';


            // f.style.right = t.offsetRight + 'px';
            // f.style.bottom = t.offsetBottom + 'px';
            f.style.width = t.clientWidth + 'px';
            f.style.height = t.clientHeight + 'px';

            f.classList.add('on-focus');
        } else {
            move(c, e);
            move(f, e);
            f.classList.remove('on-focus');
        }

    })
}