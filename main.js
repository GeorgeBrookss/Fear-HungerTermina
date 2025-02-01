document.addEventListener('DOMContentLoaded', function(){


    menu();

    DaanBio = false;
    AbellaBio = false;
    OsaaBio = false;
    OliviaBio = false;
    KarinBio = false;
    PavBio = false;
    MarcohBio = false;
    LeviBio = false;
    MarinaBio = false;
    SamarieBio = false;
    TanakaBio = false;
    HenrykBio = false;
    CaliguraBio = false;
    AugustBio = false;





function resetarPadd(){
    bio2.style.padding = '0 0'
}

function addPadd(){
    about.style.marginTop = '175px'
}

function resetarMarg(){
    about.style.marginTop = '2px'
}


function menu(){
    const menuBurg = document.getElementById('menu-burg');
    menuBurg.addEventListener('click', function(){
        const navmenu = document.getElementById('navLink')
        const navdisplay =window.getComputedStyle(navmenu).display;
        if(navdisplay === 'none'){
            navmenu.style.setProperty('display', 'block');
            addPadd();
        }else{
            navmenu.style.setProperty('display', 'none');
            resetarMarg();

        }
    });
}



    if(!DaanBio){

        const DaanBio = document.getElementById('charDaan');
        DaanBio.addEventListener('click', function(){



            const pict = document.getElementById('charAtual');
            const ico = document.getElementById('charDaan');
            ico.src = 'images/SelecaoNoClick/daan.png'
            pict.src = "images/CharacterProfile/image 1.png"
            nome.textContent = 'Daan';
            age.textContent = '28';
            soul.textContent = 'Blank soul';
            bio1.textContent = 'Daan is a smart and inquisitive man who uses his medical knowledge and experience with the occult to help make sense of the world around him.';
            bio2.textContent = "He is fairly independent, quickly setting off on his own to investigate Prehevil. However, he is happy to help others when the need arises, such as when he offers to mix drinks for contestants in PRHVL Bop. Daan can be found caring for the townspeople when not playing as him, and he is often polite and even caring towards the other contestants, indicating he has a compassionate side to him. Based on the player's descriptions of his drinks, he seems to have a talent for it. His signature drink, according to him, is an old-fashioned.";
            resetarPadd();

                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';


        


        
        
        DaanBio = true;


        AbellaBio = false;
        OsaaBio = false;
        OliviaBio = false;
        KarinBio = false;
        PavBio = false;
        MarcohBio = false;
        LeviBio = false;
        MarinaBio = false;
        SamarieBio = false;
        TanakaBio = false;
        HenrykBio = false;
        CaliguraBio = false;
        AugustBio = false;

        



    });
    } 
    if(!AbellaBio){

        const AbellaBio = document.getElementById('charAbella');
        AbellaBio.addEventListener('click', function(){
            

            
            const pict = document.getElementById('charAtual');
            const ico2 = document.getElementById('charAbella');
            ico2.src = 'images/SelecaoNoClick/abella.png';
            pict.src = "images/CharacterProfile/image 2.png";
            nome.textContent = 'Abella';
            age.textContent = '27';
            soul.textContent = 'Caressing soul';
            bio1.textContent = 'Abella is both a skilled and outgoing individual. She is willing to use her mechanical expertise to assist the party, though many of the horrors within Prehevil defy conventional solutions, which both puzzles and fascinates her.';
            bio2.textContent = 'Abella is quite perceptive, showing a great deal of knowledge and interest in the architecture of the various buildings in Prehevil; her reasons for studying engineering and mechanics are that it always follows a clear logic. She also has somewhat of a motherly side to her, evident by her comments towards the abandoned houses and mentioning that they could use some good housekeeping. Abella is optimistic and diplomatic with her fellow contestants.';
            bio2.style.padding = '16px 0';

    
                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico3 = document.getElementById('charOsaa');
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';


                    

    
        AbellaBio = true;
        
        
        OsaaBio = false;
        DaanBio = false;
        OliviaBio = false;
        KarinBio = false;
        PavBio = false;
        MarcohBio = false;
        LeviBio = false;
        MarinaBio = false;
        SamarieBio = false;
        TanakaBio = false;
        HenrykBio = false;
        CaliguraBio = false;
        AugustBio = false;

        

        });
    }

    if(!OsaaBio){
        const OsaaBio = document.getElementById('charOsaa');
        OsaaBio.addEventListener('click', function(){
            const pict = document.getElementById('charAtual');
            const ico3 = document.getElementById('charOsaa');
            ico3.src = 'images/SelecaoNoClick/osaa.png';
            pict.src = "images/CharacterProfile/image 3.png";
            nome.textContent = "O’saa";
            age.textContent = '32';
            soul.textContent = 'Enlightened soul';
            bio1.textContent = "O'saa is an experienced magical practitioner whose time as a yellow mage has shaped the way he views the world. He is very knowledgeable about both Old and New Gods, and will happily use their magic for his own benefit.";
            bio2.textContent = "O'saa prefers to act alone, and is distrustful of others, to the point of attacking those he sees as a threat. Even after being placed in a vulnerable situation, he will still question those who offer to help him, only reluctantly offering to join them. He acts dismissive toward the other contestants, and expresses hatred toward many aspects of the Western world. He is also not above making fun of other characters' religious beliefs and superstitions.";
            bio2.style.padding = '16px 0'

                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';

    

            
            OsaaBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OliviaBio = false;
            KarinBio = false;
            PavBio = false;
            MarcohBio = false;
            LeviBio = false;
            MarinaBio = false;
            SamarieBio = false;
            TanakaBio = false;
            HenrykBio = false;
            CaliguraBio = false;
            AugustBio = false;

            

        });
    }
    if(!OliviaBio){
        const OliviaBio = document.getElementById('charOlivia');

        OliviaBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico4 = document.getElementById('charOlivia');
            ico4.src = 'images/SelecaoNoClick/olivia.png';
            pict.src = "images/CharacterProfile/image 4.png";
            nome.textContent = 'Olivia'
            age.textContent = '20';
            soul.textContent = 'Shadowed soul';
            bio1.textContent = "Olivia is a reserved, yet outgoing woman. She is one of the only people on the train with openly friendly mannerisms and a caring personality. She is talkative towards her fellow contestants, especially towards Marcoh, as the two develop a friendship during the festival. Being a botanist, she is naturally interested in the flora and fauna of the areas.";
            bio2.textContent =  'Though she will freely discuss her medical condition with others, Olivia is secretly very self-conscious about it. She sees herself as a "freak", and resents the fact that others pity her. In a party talk, she asks the player to let her know if she is a burden on their travels.';
            bio2.style.padding = '62px 0'
            
                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';


            
            OliviaBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            KarinBio = false;
            PavBio = false;
            MarcohBio = false;
            LeviBio = false;
            MarinaBio = false;
            SamarieBio = false;
            TanakaBio = false;
            HenrykBio = false;
            CaliguraBio = false;
            AugustBio = false;

            


        });
    }
    if(!KarinBio){
        const KarinBio = document.getElementById('charKarin');
        KarinBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico5 = document.getElementById('charKarin');
            ico5.src = 'images/SelecaoNoClick/karin.png';
            pict.src = "images/CharacterProfile/image 5.png";
            nome.textContent = 'Karin'
            age.textContent = '26';
            soul.textContent = 'Endless soul';
            bio1.textContent = 'Karin is recognized for her animosity towards the Kaiser and the Bremen army (whom she refers to as pigs), having written newspaper articles denouncing them in the past. She initially believes that the events in Prehevil, and the mysterious dreams, are caused entirely by the Bremens.';
            bio2.textContent = 'An assertive woman who is determined to reach her goal by any means necessary, Karin is no stranger to hostile environments and quickly ventures into Prehevil to investigate what is happening. At first, she will be dismissive toward the other contestants and refuses their offers for help. However, she will eventually relent once she realizes the dangers within Prehevil are greater than she anticipated.';
            bio2.style.padding = '36px 0'

                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';


            
            KarinBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            OliviaBio = false;
            PavBio = false;
            MarcohBio = false;
            LeviBio = false;
            MarinaBio = false;
            SamarieBio = false;
            TanakaBio = false;
            HenrykBio = false;
            CaliguraBio = false;
            AugustBio = false;

            


        });
    }
    if(!PavBio){
        const PavBio = document.getElementById('charPav');
        PavBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico6 = document.getElementById('charPav');
            ico6.src = 'images/SelecaoNoClick/pav.png';
            pict.src = "images/CharacterProfile/image 6.png";
            nome.textContent = 'Pav'
            age.textContent = '??';
            soul.textContent = 'Chaotic soul';
            bio1.textContent = 'Pavel Yudin, more often referred to as just Pav, is an sly-looking former lieutenant of the Bremen army, and his skill set is focused around commanding and fast gunfighting. ';
            bio2.textContent = "Pav's hometown in Voroniya was destroyed by Kaiser during the First Great War, resulting in the death of his family and relatives. Seeking revenge against the man who caused his suffering and hoping to prevent others from experiencing the same. Pav is a sly, mischievous and chaotic man who is prone to violence and cares little about what others think of him. He is reckless, he casually threatens people who get in his way, and will even attempt to murder those who show any kind of hostility.";
            bio2.style.padding= '16px 0'

                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';


            
            PavBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            OliviaBio = false;
            KarinBio = false;
            MarcohBio = false;
            LeviBio = false;
            MarinaBio = false;
            SamarieBio = false;
            TanakaBio = false;
            HenrykBio = false;
            CaliguraBio = false;
            AugustBio = false;

            


        });
    }
    if(!MarcohBio){
        const MarcohBio = document.getElementById('charMarcoh');
        MarcohBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico7 = document.getElementById('charMarcoh');
            ico7.src = 'images/SelecaoNoClick/marcoh.png';
            pict.src = "images/CharacterProfile/image 7.png";
            nome.textContent = 'Marcoh';
            age.textContent = '31';
            soul.textContent = 'Tainted soul';
            bio1.textContent = 'Though initially reserved, Marcoh proves to be kindhearted over the course of the game. He is ready to risk his life helping other contestants, such as Olivia and Tanaka.';
            bio2.textContent = "Despite his strength and nature as a boxer, Marcoh is notably more shy and quiet in comparison to the other contestants. When talked to inside of the train, Marcoh is initially silent and will act flustered when the player attempts to make conversation with him. This is seemingly out of Marcoh's social awkwardness rather than feelings of disdain or mistrust towards the player character. Despite this, Marcoh is otherwise cooperative and friendly with the other contestants.";
            bio2.style.padding = '16px 0'
            
                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';


            
            MarcohBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            OliviaBio = false;
            KarinBio = false;
            PavBio = false;
            LeviBio = false;
            MarinaBio = false;
            SamarieBio = false;
            TanakaBio = false;
            HenrykBio = false;
            CaliguraBio = false;
            AugustBio = false;

            


        });
    }
    if(!LeviBio){
        const LeviBio = document.getElementById('charLevi');
        LeviBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico8 = document.getElementById('charLevi');
            ico8.src = 'images/SelecaoNoClick/levi.png';
            pict.src = "images/CharacterProfile/image 8.png";
            nome.textContent = 'Levi';
            age.textContent = '18';
            soul.textContent = 'Solitary soul';
            bio1.textContent = 'Levi is a nervous loner who seems reluctant to grow close to others. Once the train arrives, he immediately flees into the city, and will initially retreat from the player when approached.';
            bio2.textContent = 'An ex-soldier who has fought in wars since he was 13 years old, Levi excels at ranged combat and has a great aim with most firearms. Throughout the festival, Levi suffers from both paranoia and the effects of heroin withdrawal. At first, he believes the other contestants are hunting for him, causing him to withdraw from them whenever possible. Though he is often quiet and reserved, Levi can warm up to the other passengers after being recruited. He desires to leave his past behind.';
            bio2.style.padding = '16px 0'
            
                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';


            
            LeviBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            OliviaBio = false;
            KarinBio = false;
            PavBio = false;
            MarcohBio = false;
            MarinaBio = false;
            SamarieBio = false;
            TanakaBio = false;
            HenrykBio = false;
            CaliguraBio = false;
            AugustBio = false;

            


        });
    }
    if(!MarinaBio){
        const MarinaBio = document.getElementById('charMarina');
        MarinaBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico9 = document.getElementById('charMarina');
            ico9.src = 'images/SelecaoNoClick/marina.png';
            pict.src = "images/CharacterProfile/image 9.png";
            nome.textContent = 'Marina';
            age.textContent = '18';
            soul.textContent = 'Changeling soul';
            bio1.textContent = "Marina is a curious young woman who speaks very informally. She often speaks her mind about any given situation. An occultist that has refined her craft from a prestigious school, Marina focuses on the creative use of otherworldly powers, her abilities providing useful and unique buffs and effects. ";
            bio2.textContent = 'As a former resident of Prehevil, Marina is knowledgeable about various parts of the city, and will freely share what she knows with others. She has an intense distaste for her hometown, and does not seem disturbed by the disaster that has afflicted it. She would grow up homeschooled near the church and follow an orthodox path different from that of dark priests.';
            bio2.style.padding = '42px 0'
            
                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';


            
            MarinaBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            OliviaBio = false;
            KarinBio = false;
            PavBio = false;
            MarcohBio = false;
            LeviBio = false;
            SamarieBio = false;
            TanakaBio = false;
            HenrykBio = false;
            CaliguraBio = false;
            AugustBio = false;

            


        });
    }
    if(!SamarieBio){
        const SamarieBio = document.getElementById('charSamarie');
        SamarieBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico10 = document.getElementById('charSamarie');
            ico10.src = 'images/SelecaoNoClick/samarie.png';
            pict.src = "images/CharacterProfile/image 10.png";
            nome.textContent = 'Samarie';
            age.textContent = '18';
            soul.textContent = 'Radiating Soul';
            bio1.textContent = "Samarie is a secretive dark priest apprentice and a participant in the Termina festival. In the Vatican City, she was part of an exclusive group of naturally gifted children who were sequestered in the ninth circle of Fiend Petr's Basilica. ";
            bio2.textContent = "During her confinement, Samarie became infatuated with Marina, a regular student at the Vatican. This infatuation quickly evolved into an obsession, prompting Samarie to secretly observe Marina's every move, even resorting to reading her thoughts. Samarie is a disturbed and obsessive young woman who will go to lengths to follow Marina. Despite this, she is extremely secretive and actively hides herself from Marina and the others while on the train. ";
            bio2.style.padding = "16px 0"
            
                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';

            
            SamarieBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            OliviaBio = false;
            KarinBio = false;
            PavBio = false;
            MarcohBio = false;
            LeviBio = false;
            MarinaBio = false;
            TanakaBio = false;
            HenrykBio = false;
            CaliguraBio = false;
            AugustBio = false;

            
        });
    }
    if(!TanakaBio){
        const TanakaBio = document.getElementById('charTanaka');
        TanakaBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico11 = document.getElementById('charTanaka');
            ico11.src = 'images/SelecaoNoClick/tanaka.png';
            pict.src = "images/CharacterProfile/image 11.png";
            nome.textContent = 'Tanaka';
            age.textContent = '??';
            soul.textContent = 'Latent soul';
            bio1.textContent = "Tanaka is an Edoan businessman who has travelled far to Europa to take an advantage of the political turmoil to further his family's business.";
            bio2.textContent = "Tanaka is a timid and polite person, with many constant worries about failing his father and his business. He was raised to only rely on himself and he has a non-stop work mentality, seeming especially anxious that the train stopping will make him late, although he remains kind and helpful to the other people from the train out of formality. Also, his lack of survival skills and over-reliance on himself means that Tanaka more often than not finds himself in danger more than the other contestants.";
            bio2.style.padding = '3px 0';
            
                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png'
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';

            
            TanakaBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            OliviaBio = false;
            KarinBio = false;
            PavBio = false;
            MarcohBio = false;
            LeviBio = false;
            MarinaBio = false;
            SamarieBio = false;
            HenrykBio = false;
            CaliguraBio = false;
            AugustBio = false;



        });
    }
    if(!HenrykBio){
        const HenrykBio = document.getElementById('charHenryk');
        HenrykBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico12 = document.getElementById('charHenryk');
            ico12.src = 'images/SelecaoNoClick/henryk.png';
            pict.src = "images/CharacterProfile/image 12.png";
            nome.textContent = 'Henryk';
            age.textContent = '32';
            soul.textContent = 'Suffocated soul';
            bio1.textContent = 'Henryk is a chef from the Kingdom of Rondon with an acute taste for ingredients.  He had always dreamed becoming someone important by creating something great, whether it be a musician, artist or actor - he eventually "dipped his toes in everything", but did not take well to rejection and in the end gave up those plans.';
            bio2.textContent = "Henryk is very passionate about cooking food, and it is the main thing he seems to enjoy in life. He can be quite laid back but has low self-esteem, often trying to seek the approval of other contestants with his cooking and will seem devastated if anyone doesn't like it. He can also be impulsive sometimes making perverted remarks towards Abella at the train and starting a fight with Caligura.";
            bio2.style.padding = '62px 0'
            
                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png'
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';
                        

            
            HenrykBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            OliviaBio = false;
            KarinBio = false;
            PavBio = false;
            MarcohBio = false;
            LeviBio = false;
            MarinaBio = false;
            SamarieBio = false;
            TanakaBio = false;
            CaliguraBio = false;
            AugustBio = false;

            


        });
    }
    if(!CaliguraBio){
        const CaliguraBio = document.getElementById('charCaligura');
        CaliguraBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico13 = document.getElementById('charCaligura');
            ico13.src = 'images/SelecaoNoClick/caligura.png';
            pict.src = "images/CharacterProfile/image 13.png";
            nome.textContent = 'Caligura';
            age.textContent = '??';
            soul.textContent = 'Decrepit soul';
            bio1.textContent = 'Caligura is a hostile and foul-mouthed man who is not above assaulting and murdering others.';
            bio2.textContent = "Caligura's cruel ways and his ghoulish appearance earned him the nickname 'Count Dragul' among his peers. His reputation as a mobster is influent enough for other contestants to know who he is: journalist Karin recognizes him from the train and a possible altercation that he has with Henryk implies that the chef either heard of Caligura or actually ran into him before. He is a caporegime, or a captain, for a rival branch to the Accardos in The Family. During the festival, he is one of the select few participants who will actively engage in killing the other contestants.";
            resetarPadd();
            
                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png'
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';
                        
            
            CaliguraBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            OliviaBio = false;
            KarinBio = false;
            PavBio = false;
            MarcohBio = false;
            LeviBio = false;
            MarinaBio = false;
            SamarieBio = false;
            TanakaBio = false;
            HenrykBio = false;
            AugustBio = false;
        


            


        });
    }
    if(!AugustBio){
        const AugustBio = document.getElementById('charAugust');
        AugustBio.addEventListener('click', function(){

            
            const pict = document.getElementById('charAtual');
            const ico14 = document.getElementById('charAugust');
            ico14.src = 'images/SelecaoNoClick/august.png';
            pict.src = "images/CharacterProfile/image 14.png";
            nome.textContent = 'August';
            age.textContent = '??';
            soul.textContent = 'Tormented soul';
            bio1.textContent = "August had embraced a nomadic lifestyle, traversing many countries around the world.";
            bio2.textContent = "August is very kind towards the other contestants, but is quite reserved and keeps his distance from everybody for much of the Festival, revealing little about his life or intentions to others until the final day. He is very resilient and greatly capable of defending himself, and will sometimes go out of his way to assist the other contestants by protecting them or providing them with medical supplies. However, he will not hesitate to immediately turn on other contestants whenever he perceives them as a threat.";
            resetarPadd();
            
                    const ico = document.getElementById('charDaan');
                        ico.src = './images/SelecaoOnClick/daan-2.png';
                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');  
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png'
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';

                        
            
            AugustBio = true;
        
            AbellaBio = false;
            DaanBio = false;
            OsaaBio = false;
            OliviaBio = false;
            KarinBio = false;
            PavBio = false;
            MarcohBio = false;
            LeviBio = false;
            MarinaBio = false;
            SamarieBio = false;
            TanakaBio = false;
            HenrykBio = false;
            CaliguraBio = false;
        


            


        });
    }

    if(!DaanBio){

        const DaanBio = document.getElementById('charDaan-mobile');
        DaanBio.addEventListener('click', function(){



            const pict = document.getElementById('charAtual');
            const ico = document.getElementById('charDaan');
            ico.src = 'images/SelecaoNoClick/daan.png'
            pict.src = "images/CharacterProfile/image 1.png"
            nome.textContent = 'Daan';
            age.textContent = '28';
            soul.textContent = 'Blank soul';
            bio1.textContent = 'Daan is a smart and inquisitive man who uses his medical knowledge and experience with the occult to help make sense of the world around him.';
            bio2.textContent = "He is fairly independent, quickly setting off on his own to investigate Prehevil. However, he is happy to help others when the need arises, such as when he offers to mix drinks for contestants in PRHVL Bop. Daan can be found caring for the townspeople when not playing as him, and he is often polite and even caring towards the other contestants, indicating he has a compassionate side to him. Based on the player's descriptions of his drinks, he seems to have a talent for it. His signature drink, according to him, is an old-fashioned.";
            resetarPadd();

                    const ico2 = document.getElementById('charAbella');
                        ico2.src = './images/SelecaoOnClick/abella-2.png';
                    const ico3 = document.getElementById('charOsaa');
                        ico3.src = './images/SelecaoOnClick/osaa-2.png';
                    const ico4 = document.getElementById('charOlivia');
                        ico4.src = './images/SelecaoOnClick/olivia-2.png';
                    const ico5 = document.getElementById('charKarin');
                        ico5.src = './images/SelecaoOnClick/karin-2.png';
                    const ico6 = document.getElementById('charPav');
                        ico6.src = './images/SelecaoOnClick/pav-2.png';
                    const ico7 = document.getElementById('charMarcoh');
                        ico7.src = './images/SelecaoOnClick/marcoh-2.png';
                    const ico8 = document.getElementById('charLevi');
                        ico8.src = './images/SelecaoOnClick/levi-2.png';
                    const ico9 = document.getElementById('charMarina');
                        ico9.src = './images/SelecaoOnClick/marina-2.png';
                    const ico10 = document.getElementById('charSamarie');
                        ico10.src = './images/SelecaoOnClick/samarie-2.png';
                    const ico11 = document.getElementById('charTanaka');
                        ico11.src = './images/SelecaoOnClick/tanaka-2.png';
                    const ico12 = document.getElementById('charHenryk');
                        ico12.src = './images/SelecaoOnClick/henryk-2.png';
                    const ico13 = document.getElementById('charCaligura');
                        ico13.src = './images/SelecaoOnClick/caligura-2.png';
                    const ico14 = document.getElementById('charAugust');
                        ico14.src = './images/SelecaoOnClick/august-2.png';


        


        
        
        DaanBio = true;


        AbellaBio = false;
        OsaaBio = false;
        OliviaBio = false;
        KarinBio = false;
        PavBio = false;
        MarcohBio = false;
        LeviBio = false;
        MarinaBio = false;
        SamarieBio = false;
        TanakaBio = false;
        HenrykBio = false;
        CaliguraBio = false;
        AugustBio = false;

        



    });
    } 
});