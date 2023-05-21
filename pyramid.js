var pyramid ='';
for (let i=0; i <= 5; i++) {
    for (let j=0; j < i; j++) {
        pyramid+="*";
    }
    pyramid+="\n";
}

for (let i=0; i <= 4; i++) {
    for (let j=4; j > i; j--) {
        pyramid+="*";
    }
    pyramid+="\n";
}

console.log(pyramid);
