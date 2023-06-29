let clutter = "";

function encryption() {
    document.querySelector("#encrypt-btn").addEventListener("click", function() {
       

    //    getting  a text value
  

        let input = document.getElementById('txtmsg').value
        console.log(input)
  

     //  getting a password value
        let password = document.getElementById('password').value
        console.log (password)

    //  splited the data
        const str = input.split("")
        // console.log(str)

        // converting it in an amojis
        str.forEach(element => {
            clutter += `&#128${(element.charCodeAt())} `
            
        });
        // console.log(clutter)
       

        // storing it in a #result div
       
        document.querySelector("#result").innerHTML = clutter

            let dataarr = [];

            if(JSON.parse(localStorage.getItem('data1'))){
                 dataarr=JSON.parse(localStorage.getItem('data1'));
                dataarr.push({"pass":password,"input":input,"clutter":clutter})

            }else{
                dataarr = [{"pass":password,"input":input,"clutter":clutter}]

            }
            localStorage.setItem('data1',JSON.stringify(dataarr))

    })
}

encryption();


function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        let clutter2 = '';

        // getting an given emoji msg

        let input2 = document.querySelector('#emojimsg').value

        // getting an given final password

        let pass2 = document.querySelector('#finalpassword').value

        let user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)

        let str2 = input2.split(" ")
        str2.forEach(element => {
            clutter2 += `&#${(element.codePointAt(0))} `
        });
        console.log(clutter2)
        let found;

        for(let i of user){
            if (i.clutter == clutter2){
                found = i;
                console.log(i)
            }
        }
    
        if(found.clutter === clutter2){
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.console ="#eee"
    
            document.querySelector("#result").innerHTML = found.input
        }else{
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.console ="red"
            document.querySelector("#result").innerHTML = "Wrong Password"
        }
    })
   
}

decryption()



function btnClicking(){
    document.querySelector('#dec-btn').addEventListener("click",function(){
        document.querySelector("#decryption").style.display ="block"
        document.querySelector("#encryption").style.display="none"
        document.querySelector('#dec-btn').style.backgroundColor = "#222"
        document.querySelector('#enc-btn').style.backgroundColor = "#333"
        document.querySelector('#main>h1 span i').style.rotate ="180deg"
         document.querySelector("#result").style.display = "none"
    })
    document.querySelector('#enc-btn').addEventListener("click",function(){
        document.querySelector("#encryption").style.display ="block"
        document.querySelector("#decryption").style.display="none"
        document.querySelector('#dec-btn').style.backgroundColor = "#333"
        document.querySelector('#enc-btn').style.backgroundColor = "#222"
        document.querySelector('#main>h1 span i').style.rotate ="1deg"
         document.querySelector("#result").style.display = "none"
    })

    document.querySelector("#encrypt-btn").addEventListener("click",function(){
     document.querySelector("#result").style.display = "block"
    })
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display = "block"
       })
}
btnClicking();