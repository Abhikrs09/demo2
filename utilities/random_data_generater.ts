
const firstNames = ["JOhn","Emmma","Michael","Sophia","James","Olivia"];
const lastName   = ["Smith","Johnson","Brown","Lee","Williams","Jones"];


export function generateRandomFirstName() {
    const shortFirstName = firstNames.filter((name) => name.length < 8);
    const randomIndex = Math.floor(Math.random()*shortFirstName.length);
    return shortFirstName[randomIndex];
}

export function generateRandomLastName(): string {
    const shortFirstName = lastName.filter((name) => name.length < 8);
    const randomIndex = Math.floor(Math.random()*shortFirstName.length);
    return shortFirstName[randomIndex];
}

export function generateRandomNumber(n: number):string{

    if (n<=0) {
        throw new Error ("Length of the number must be greater then 0.");
    }

    let randomNumber = '';
    for (let i=0;i<n;i++){
        const randomDigit = Math.floor(Math.random()*10);
        randomNumber +=randomDigit.toString();
    }
    return randomNumber;
}

export function generateRandomEmail(): string{

    const randomFirstName = generateRandomFirstName();
    const randomNum = generateRandomNumber(3);
    const eamil = `${randomFirstName.toLowerCase()}${randomNum}@example.com`;
    return eamil;
}

export function getRandomString(n: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    let randomString = '';
  
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
  }
  
  
  
  
  
  
  