const Request = new XMLHttpRequest();
const Get = (url) =>
{
    return new Promise( (resolve, reject) =>
    {
        try
        {
            Request.open('GET', url);
            Request.onload = () => 
            {
                if(Request.status == 200)
                {
                    resolve(JSON.parse(Request.responseText));
                    return;
                }
                reject('Status Error');
            };
            Request.onerror = () => reject(Request.statusText);
            Request.send();
        }
        catch(e)
        {
            reject('Catch error ' + JSON.stringify(e));
        }
    });
}

const Post = (url, data) => 
{
    return new Promise( (resolve, reject) => 
    {
        try
        {
            Request.open('POST', url);
            Request.setRequestHeader('Content-Type', 'application/json');
            Request.onload = () => 
            {
                if(Request.status == 200)
                {
                    resolve(JSON.parse(Request.responseText));
                    return;
                }
                reject('Status Error');
            };
            Request.onerror = () => reject(Request.statusText);
            Request.send(JSON.stringify(data));
        }
        catch(e)
        {
            reject('Catch error ' + JSON.stringify(e));
        }
    });
}

const FadeIn = (element, opacity, speed) => 
{
    return new Promise((resolve, reject) => 
    {
        if(opacity >= 1)
        {
            reject();
            return;
        } 
        if(!opacity)
        {
            if(!element.style.display || element.style.display == 'none')
                element.style.display = 'block';
            if(element.style.opacity)
                opacity = parseFloat(element.style.opacity);
            else
                opacity = 0.0;
        }

        if(!speed) speed = 0.08;
        opacity += speed;
        if(opacity >= 1)
        {
            opacity = 1;
            element.style.opacity = opacity;
            resolve();
        } 
        else
        {
            element.style.opacity = opacity;
            setTimeout( () => FadeIn(element,opacity).then(() => resolve()).catch( () => reject()), 50);
        }
    });
}

const FadeOut = (element, opacity, speed) => 
{
    return new Promise((resolve, reject) => 
    {
        if(opacity <= 0)
        {
            reject();
            return;
        } 
        if(!opacity)
        {
            if(!element.style.display || element.style.display == 'none')
                element.style.display = 'block';
            if(element.style.opacity)
                opacity = parseFloat(element.style.opacity);
            else
                opacity = 1;
        }
        if(!speed) speed = 0.08;
        opacity -= speed;   
        if(opacity <= 0)
        {
            opacity = 0;
            element.style.opacity = opacity;
            resolve();
        } 
        else
        {
            element.style.opacity = opacity;
            setTimeout( () => FadeOut(element, opacity).then(() => resolve()).catch( () => reject()), 50);
        }
    });
}

const Rotate = (element, rotation, speed) => 
{
    return new Promise( (resolve, reject) => 
    {
        if(!element.style.transform)
        {
            element.style.transform = 'rotate(0deg)';
        }
        else
        {
            let props = element.style.transform.trim().split(' '); 
            let currentRotation = undefined;
            for(let i = 0; i < props.length; i++)
            {
                if(props[i].toLowerCase().indexOf('rotate') > -1)
                {
                    currentRotation = props[i].trim();
                    props.splice(i, 1);
                }
            }
            if(!currentRotation)
            {
                currentRotation = 'rotate(0deg)';
            }
            
            let calcRotation = parseFloat(currentRotation.substring(currentRotation.indexOf('(') + 1, currentRotation.indexOf('d')));
            
            let finish = false;
            if(calcRotation < rotation)
            {
                calcRotation += speed;
                if(calcRotation >= rotation)
                {
                    calcRotation = rotation;
                    finish = true;
                }
            }
            else
            {
                calcRotation -= speed;
                if(calcRotation <= rotation)
                {
                    calcRotation = rotation;
                    finish = true;
                }
            }
            
            props.push('rotate(' + calcRotation + 'deg)');
            element.style.transform = props.join(' ');

            if(finish == true)
            {
                resolve();
                return;
            }
        }
        setTimeout( () => Rotate(element, rotation, speed).then(() => resolve()).catch( () => reject()), 30);
    });
}

const MoveY = (element, position, speed) => 
{
    return new Promise( (resolve, reject) =>
    {
        let currentY = 0;
        if(!element.style.top)
        {
            element.style.top = '0px';
        }
        else
        {
            console.log(element.style.top);
            currentY = parseFloat(element.style.top.substring(0, element.style.top.length - 2));
        }

        if(!speed) speed = 0.5;

        let finished = false;

        if(position > 0)
        {
            currentY -= speed;
            if(-currentY > position)
            {
                currentY = -position;
                finished = true;
            } 
        }
        else
        {
            currentY += speed;
            if(currentY > -position)
            {
                currentY = -position;
                finished = true;
            }
        }

        element.style.top = currentY + 'px';

        if(finished == true)
        {
            resolve();
            return;
        }

        setTimeout( () => MoveY(element, position,speed).then(() => resolve()).catch( () => reject()), 30);
    });
}