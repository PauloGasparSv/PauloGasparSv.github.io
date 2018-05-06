window.onload = () => 
{
    var hiddenPortrait = document.querySelector('#hidden-portrait');
    var clicked = false;
    document.querySelector('#hidden-portrait-activate').addEventListener('click', () => 
    {
        if(clicked == false)
        {
            clicked = true;
            FadeIn(hiddenPortrait)
            .then(()  => 
            {
                setTimeout( () => FadeOut(hiddenPortrait)
                .then( () => clicked = false)
                .catch( () => clicked = false), 1000);
            })
            .catch( () => clicked = false);
        }
    });
}
