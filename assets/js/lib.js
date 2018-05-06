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

const FadeIn = (element, opacity) => 
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
        opacity += 0.08;
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

const FadeOut = (element, opacity) => 
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
                opacity = 0.0;
        }
        opacity -= 0.06;
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