Vue.config.devtools = true,


new Vue ({
    el: "#root",
    data:{
        x: 10,
        
        newMessageSent:'',
        ricercaUtente:'',
        index:0,
        contact:[
           {
                name:'Giulia',
                avatar:'img/Giulia.png',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
                }
                ],},
           {
            name:'Bob',
            avatar:'img/Bob.jpg',
            messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
                ],},
            {
            name:'Kevin',
            avatar:'img/Kevin.png',
            messages: [
                {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
                }
                ]},
            {
            name:'Ryan Reynolds',
            avatar:'img/deeapool.jpg',
            messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received',
                
                }
                ],},
            ],
    },


    methods:{
        //al clic 
        onPress(){
            //calcolo data
            let datanuova = new Date()
            //creo in oggetto da inserire nell'array
            //il mio oggetto conterra data / messaggio / e chi ha scritto il messaggio
            this.contact[this.index].messages.push({ 
                date: datanuova.toLocaleString('it'),
                text: this.newMessageSent,
                status: 'sent',
            })

            //devo vuotare il contenitore del messaggio
            this.newMessageSent = '';


            //risposta automatica dopo 1s
            setTimeout(() => {

              //calcolo data
                datanuova = new Date();

                //creo in oggetto da inserire nell'array
                //il mio oggetto conterra data / messaggio / e chi ha scritto il messaggio
                this.contact[this.index].messages.push({
                    date:datanuova.toLocaleString('it'),
                    text : 'ok',
                    status :'received',
                })
            }, 1000)
        
        },
       
    },
})