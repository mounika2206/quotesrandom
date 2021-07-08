let btn=document.getElementById('btn');
let output=document.getElementById('output');
let quotes=
    [
       'Knowledge is Power',
       'Try and Try but dont Cry!!',
       'Nothing is impossible, the word itself says “I’m possible”!',
       'Perfection is not attainable, but if we chase perfection we can catch excellence. -- Vince Lombardi.',
       'Too many of us are not living our dreams because we are living our fears. -- Les Brown',
       'Believe you can and you’re halfway there. -- Theodore Roosevelt',
       'None of us is as smart as all of us. -- Ken Blanchard',
       'Perfection is not attainable, but if we chase perfection we can catch excellence. -- Vince Lombardi',
       'Whether you think you can or you think you can’t, you’re right. -- Henry Ford',
       'To handle yourself, use your head; to handle others, use your heart. -- Eleanor Roosevelt',
       'The real opportunity for success lies within the person and not in the job. -- Zig Ziglar',
       'Strive not to be a success, but rather to be of value. -- Albert Einstein',
    ];
btn.addEventListener('click',function()
{
    var randomQuote=quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML=randomQuote;
})
