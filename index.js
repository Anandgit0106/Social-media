//SIDE BAR

const menuItems= document.querySelectorAll('.menu-item');

//MESSAGE
const messagesNotification = document.querySelector('#messages-notification');
const  messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes= document.querySelectorAll('.choose-size span')
var root=document.querySelector(':root');
const colorpalette =document.querySelectorAll('.choose-color span');
const bg1= document.querySelector('.bg-1');
const bg2= document.querySelector('.bg-2');
const bg3= document.querySelector('.bg-3');
//==========================SIDEBAR========================= //

//remove active class from menu items
const changeActiveItems = ()=>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click', () =>{
        changeActiveItems();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display='block';
           // document.querySelector('#notifications .notification-count').style.display='none';
            document.querySelector('#notifications .notifications-count').style.display = 'none';
            console.log(document.querySelector('#notifications .notifications-count'));


        }
    })
})

//======================================MESSAGES ==========================//
//seraches chats
const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat =>{
        let name =chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1){
            chat.style.display='flex' ;
        }else{
            chat.style.display = 'none';
        }
    })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage);



//highlight messages card when  message item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow='0  0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifications-count').style.display='none';
    setTimeout(() => {
        messages.style.boxShadow='none';
    },1000);
   
})

//THEME DISPLAY CUSTOMIZATION

//open Model
const openThememodel = () => {
    themeModel.style.display='grid';
}

//close Model
const closeThememodel = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display='none';
    }
    

}

//close model
themeModel.addEventListener('click',closeThememodel);
theme.addEventListener('click',openThememodel);

//============================ FONTS ========================= //
//remove active  class from spans ot font size selectors
const removeSizeSelector = () =>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size =>{
    
   size.addEventListener('click',() =>{
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','5.4rem');
    }
    else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','-7rem');
    }
    else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('--sticky-top-left','-2rem');
        root.style.setProperty('--sticky-top-right','-17rem');
    }
    else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('--sticky-top-left','-5rem');
        root.style.setProperty('--sticky-top-right','-25rem');
    }
    else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('--sticky-top-left','-10rem');
        root.style.setProperty('--sticky-top-right','-33rem');
    }
     //change font size of  the  root html element
     document.querySelector('html').style.fontSize = fontSize;
   })
   
})


const changeActiveColorClass = () =>{
    colorpalette.forEach(colorpicker =>{
        colorpicker.classList.remove('active');
    })
}

// change primary colors
colorpalette.forEach(color =>{
    color.addEventListener('click',() => {
      let primaryHue;  
      changeActiveColorClass()
      if(color.classList.contains('color-1')){
        primaryHue =252;
      }  
      else if(color.classList.contains('color-2')){
        primaryHue =52;
      }
      else if(color.classList.contains('color-3')){
        primaryHue =352;
      }
      else if(color.classList.contains('color-4')){
        primaryHue =152;
      }
      else if(color.classList.contains('color-5')){
        primaryHue =202;
      }
      color.classList.add('active');
      root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

//theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change background color
const changeBG=() =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness)
    root.style.setProperty('--white-color-lightness',whiteColorLightness)
    root.style.setProperty('--dark-color-lightness',darkColorLightness)
}

// change background color
bg1.addEventListener('click', ()=> {
    //active active class
    bg1.classList.add('active');
    //remove active class from the others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
})


bg2.addEventListener('click', ()=> {
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    //active active class
    bg2.classList.add('active');
    //remove active class from the others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});

bg3.addEventListener('click', ()=> {
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    //active active class
    bg3.classList.add('active');
    //remove active class from the others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})
