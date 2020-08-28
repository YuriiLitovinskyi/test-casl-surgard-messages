const hl7 = require('simple-hl7')
const data = require('./codes')
const codes = data.codes

const ip = '194.187.110.62'
const port = 20003


const client = hl7.Server.createTcpClient(ip, port)

function sendMessage(code){
    const msg = new hl7.Message(code)  
    console.log(`${msg.header.fields[0].value[0]}`)
    client.send(msg.header.fields[0].value[0], function(err, ack) {      
        console.log(`Message ${code} has been sent!`)                
    })
}

for(let i = 0; i < codes.length; i++){
    setTimeout(() => {
        sendMessage(codes[i])
    }, i * 1000)
}

