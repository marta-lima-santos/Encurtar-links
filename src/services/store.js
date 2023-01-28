//==========Get Saved Link=======
export async function SaveLink(key) {
    const searchLink = await localStorage.getItem(key)

    let hereLinks = JSON.parse(searchLink) || [];
    return hereLinks;
}

//=======SAVE LINK=============== 
export async function savedLink(key, newLink) {
    let storegeLink = await SaveLink(key);

//=======you can't duplicate links=======
    const hadLink =  storegeLink.some(link => link.id === newLink.id)
    
    if(hadLink) {
        console.log('Deu muito certo :) ')
        return;
    }

    //=======ADD NEW LINK======
    storegeLink.push(newLink) 
    await localStorage.setItem(key, JSON.stringify(storegeLink))
    console.log('Tá salvo xuxu!');
}


 //=======BUTTON DELETE LINK======
export function deletingLink(links, id) {

    let usLink = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@shortenLink', JSON.stringify(usLink))

    return usLink
}