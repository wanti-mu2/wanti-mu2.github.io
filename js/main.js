function quiz1(answer) {
    let message = '';

    if (answer === 0) {
        message = 'A. 15件　　　不正解！';
    } else if (answer === 1) {
        message = 'A. 25件　　　正解！！';
    } else if (answer === 2) {
        message = 'A. 35件　　　不正解！';
    } else if (answer === 3) {
        message = 'A. 45件　　　不正解！';
    }

    console.log(message);
    const p_quiz1 = document.querySelector('#quiz1');
    p_quiz1.textContent = message;
    return message;
}

function quiz2(answer) {
    let message = '';

    if (answer === 0) {
        message = 'A. メキシコ合衆国　　　正解！！';
    } else if (answer === 1) {
        message = 'A. ハイチ共和国　　　不正解！';
    } else if (answer === 2) {
        message = 'A. エクアドル共和国　　　不正解！';
    } else if (answer === 3) {
        message = 'A. コロンビア共和国　　　不正解！';
    }

    console.log(message);
    const p_quiz2 = document.querySelector('#quiz2');
    p_quiz2.textContent = message;
    return message;
}

function quiz3(answer) {
    let message = '';

    if (answer === 0) {
        message = 'A. モン-サン-ミシェルとその湾　　　不正解！';
    } else if (answer === 1) {
        message = 'A. オークニー諸島の新石器時代遺跡中心地　　　不正解！';
    } else if (answer === 2) {
        message = 'A. ストーンヘンジ、エーヴベリーと関連する遺跡群　　　正解！！';
    } else if (answer === 3) {
        message = 'A. デルフィの古代遺跡　　不正解！';
    }

    console.log(message);
    const p_quiz3 = document.querySelector('#quiz3');
    p_quiz3.textContent = message;
    return message;
}





