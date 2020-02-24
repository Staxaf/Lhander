
let active = document.getElementById('bar');
for(let i = 0; i < active.children.length - 1; i++)
{
    active.children[i].querySelector('a').classList.remove('active');
    active.children[i].querySelector('a').onclick = add_class;
}
function add_class(){
    for(let i = 0; i < active.children.length - 1; i++)
    {
        active.children[i].querySelector.remove('active');
    }
    this.classList.add('active');
}