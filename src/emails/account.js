const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'staratulchauhan@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}, Let me know how you get along with the app.`
    };
      
    sgMail.send(msg).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    });
}

const sendCancelationEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'staratulchauhan@gmail.com',
        subject: 'Let me know about cancelation',
        text: `Bye ${name}, Thanks for using App!`
    };

    sgMail.send(msg).then(() => {
        console.log("Message sent");
    }).catch((error) => {
        console.log(error.response.body);
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};