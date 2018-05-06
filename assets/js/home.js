window.onload = () => 
{
    var hiddenPortrait = document.querySelector('#hidden-portrait');
    var clicked = false;
    var clickedHamburguer = 0;
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

    document.querySelector('#hamburguer').addEventListener('click', () => 
    {
        if(clickedHamburguer == 0)
        {
            clickedHamburguer = 1;
            Rotate(document.querySelector('#hamburguer .line:nth-child(3)'), -45, 10);
            FadeOut(document.querySelector('#hamburguer .line:nth-child(2)'), 1, 0.8);MoveY
            MoveY(document.querySelector('#hamburguer .line:nth-child(1)'), -12, 12);
            MoveY(document.querySelector('#hamburguer .line:nth-child(3)'), -12, 12);
            Rotate(document.querySelector('#hamburguer .line:nth-child(1)'), 45, 10)
            .then( () => 
            {
                clickedHamburguer = 2;
            })
            .catch( () => 
            {
                clickedHamburguer = 2;
            });

            let list = document.querySelector('#sub-list');
            list.style.display = 'block';
            list.style.opacity = '1';   
            list.style.top = '-128px';
            MoveY(document.querySelector('#sub-list'), -64, 20);
        }
        else if(clickedHamburguer == 2)
        {
            clickedHamburguer = 1;
            Rotate(document.querySelector('#hamburguer .line:nth-child(3)'), 0, 10);
            FadeIn(document.querySelector('#hamburguer .line:nth-child(2)'), 0, 0.8);
            MoveY(document.querySelector('#hamburguer .line:nth-child(1)'), -6, 12);
            MoveY(document.querySelector('#hamburguer .line:nth-child(3)'), -22, 12);
            Rotate(document.querySelector('#hamburguer .line:nth-child(1)'), 0, 10)
            .then( () => 
            {
                clickedHamburguer = 0;
            })
            .catch( () => 
            {
                clickedHamburguer = 0;
            });
            
            let list = document.querySelector('#sub-list');
            MoveY(document.querySelector('#sub-list'), 128, 40)
            .then( () => 
            {
                list.style.display = 'none';
                list.style.opacity = '0';  
            })
            .catch( () => 
            {
                list.style.display = 'none';
                list.style.opacity = '0';  
            });
        }
    });
}
