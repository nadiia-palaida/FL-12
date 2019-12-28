let inpEmail = prompt('Enter your email:', '');
let inpPass = null,
    oldPass = null,
    newPass = null,
    newPassCheck = null,
    changePass = null;

const inpEmailLength = 5,
    inpPassLength = 6;

if (inpEmail === '' || inpEmail === null) {
    alert('Canceled.');
} else if (inpEmail.length < inpEmailLength) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else {
    if (inpEmail === 'user@gmail.com' || inpEmail === 'admin@gmail.com') {
        inpPass = prompt('Enter your password:', '');

        if (inpPass === '' || inpPass === null) {
            alert('Canceled.');
        } else {
            if (inpEmail === 'user@gmail.com' && inpPass === 'UserPass' ||
                inpEmail === 'admin@gmail.com' && inpPass === 'AdminPass') {
                    changePass = confirm('Do you want to change your password?');
                    if (!changePass) {
                        alert('You have failed the change.');
                    } else {
                        oldPass = prompt('Write old password, please', '');
                        if (oldPass === '' || oldPass === null) {
                            alert('Canceled.');
                        } else if (oldPass === inpPass) {
                            newPass = prompt('Write new password, please', '');
                            if (newPass === '' || newPass === null) {
                                alert('Canceled');
                            } else if (newPass.length < inpPassLength) {
                                alert('It’s too short password. Sorry.');
                            } else {
                                newPassCheck = prompt('Write new password again, please', '');
                                if (newPassCheck === newPass) {
                                    alert('You have successfully changed your password');
                                } else {
                                    alert('You wrote the wrong password');
                                }
                            }
                        } else {
                            alert('Wrong password');
                        }
                    }
            } else {
                alert('Wrong password');
            }
        }

    } else {
        alert('I don’t know you');
    }
}