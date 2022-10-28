function clickAlart() {
    alert('mother is coming');

}
function picnicEvent() {
    const feedback = confirm('tui ki jabi amder sathe');
    console.log(feedback);
    if (feedback === true) {
        console.log('amr number a ajker modde bkash kr');
        const bkashNumberShow = document.getElementById('bkashNumberShow');
        const div = document.createElement('div');
        div.innerText = 'bkash number 01774162025,tarateri de ';
        bkashNumberShow.appendChild(div);
    }
}