export class Profile {
    constructor(fullname, firstname, lastname, birthdate, age, education, email, emailWork,phone) {
        this.fullname = "Ilia Sichinava",
        this.firstname = "Ilia",
        this.lastname = "Sichinava",
        this.birthdate = "25/09/2003",
        this.education = ['Free University of Tbilisi', 'ICT - Mziuri'],
        this.email = "sichinavailia@gmail.com",
        this.emailWork = "isich21@freeuni.edu.ge",
        this.phone = "+995 579 97 79 79"
    }
    getContactInfo() {
        return `Primary Email: ${this.email}\nOrganisation Email: ${this.emailWork}\nMobile: ${this.phone}`;
    }
    whoami() {
        return `My name is ${this.firstname}\nI am Next.js developer`;
    }
    fullInfo() {
        return `fullname: ${this.fullname} birthdate: ${this.birthdate} education: ${this.education} email: ${this.email} emailWork: ${this.emailWork} phone: ${this.phone}`;
    }
}