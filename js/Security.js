class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'orange');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', rgb(24,255,0));    

        this.access2 = createInput("Code1")
        this.access2.position(545,180);
        this.access2.style('background', 'yellow');  

        this.button2 = createButton('Check');
        this.button2.position(595,210);
        this.button2.style('background', 'red');

        this.access3 = createInput("Code1")
        this.access3.position(100,325);
        this.access3.style('background', 'pink');  

        this.button3 = createButton('Check');
        this.button3.position(100,350);
        this.button3.style('background', 'purple');
//add code for creating and positioning the third input box and button
        this.access4 = createInput("Code1")
        this.access4.position(425,295);
        this.access4.style('background', 'pink');  

        this.button4 = createButton('Check');
        this.button4.position(480,320);
        this.button4.style('background', 'purple');

    }

    
    

    display(){
       
        this.button4.hide();
        this.access4.hide();
        
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
                fill("green");
            text("Correct", 100, 90);
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
        
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
    }
});

    }
    
    
    display2(){
        if(score===3){
        this.button4.show();
        this.access4.show();
        
        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score= score+47;
            }
        })
    }
}
}


   