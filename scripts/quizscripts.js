var xmlData;

window.onload = initialization();

function initialization() {
    loadXML();

}

function loadXML() {
    var ajax = new XMLHttpRequest();
    ajax.open('GET', './assets/FinalQuiz.xml', true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            xmlData = ajax.responseXML;
        }
    }
    ajax.send();
}

function questionSearch() {
    var showScore = document.getElementById('score_show');
    var searchValue = document.getElementById('question_search');
    var searchIndex = "qnumber";
    var display = "";

    if (searchValue != null && searchValue != '') {

        display += "<tr>";
        display += "<th>Question Number</th>";
        display += "<th>Questions</th>";
        
        display += "<th>Choices</th>";
        display += "</tr>";

        var questionList = xmlData.getElementsByTagName('question');
        // var bookList = xmlData.querySelectorAll('book');
        //console.log(questionList);

        for (var i = 0; i < questionList.length; i++) {
            var thisquestionList = questionList[i];

            var questionListId = thisquestionList.getAttribute('id');
            //console.log(questionListId);
            var questionNum = thisquestionList.getElementsByTagName('qnumber')[0].childNodes[0].nodeValue;
            var questionTitle = thisquestionList.getElementsByTagName('qtitle')[0].childNodes[0].nodeValue;
            var a = thisquestionList.getElementsByTagName("a")[0].childNodes[0].nodeValue;
            var b = thisquestionList.getElementsByTagName("c")[0].childNodes[0].nodeValue;
            var c = thisquestionList.getElementsByTagName("c")[0].childNodes[0].nodeValue;
            var d = thisquestionList.getElementsByTagName("d")[0].childNodes[0].nodeValue;
            //console.log(questionNum);

            display += "<tr>";
            display += "<td>" + questionNum + "</td>";
            display += "<td>" + questionTitle + "</td>";
            
            
            display += '<td><br><input type="radio" name = "choices[`' + i + '`]" onclick="a_answer(`' + i + '`);"> a. ' + a + '</br></td>';
            display += '<td><br><input type="radio" name = "choices[`' + i + '`]" onclick="b_answer(`' + i + '`);"> b. ' + b + '</br></td>';
            display += '<td><br><input type="radio" name = "choices[`' + i + '`]" onclick="c_answer(`' + i + '`);"> c. ' + c + '</br></td>';
            display += '<td><br><input type="radio" name = "choices[`' + i + '`]" onclick="d_answer(`' + i + '`);"> d. ' + d + '</br></td>';
            
            //  display += '<td> <input type="radio" name="questionlist" onclick="displayQuestion(`' + a + '`);"></td>';
            display += "</tr>";
            showScore.style.opacity = 1;

        }
    }

    document.getElementById('quizItems').innerHTML = display;

}

var countCorrect = 0;


function a_answer(i) {
    if(i == 0){
        countCorrect += 0;
    }
    if(i == 1){
        countCorrect += 1;
    }
    if(i == 2){
        countCorrect += 0;
    }
    if(i == 3){
        countCorrect += 1;
    }
    if(i == 4){
        countCorrect += 0;
    }
}

function b_answer(i) {
    if(i == 0){
        countCorrect += 1;
    }
    if(i == 1){
        countCorrect += 0;
    }
    if(i == 2){
        countCorrect += 0;
    }
    if(i == 3){
        countCorrect += 0;
    }
    if(i == 4){
        countCorrect += 0;
    }
}

function c_answer(i) {
    if(i == 0){
        countCorrect += 0;
    }
    if(i == 1){
        countCorrect += 0;
    }
    if(i == 2){
        countCorrect += 0;
    }
    if(i == 3){
        countCorrect += 0;
    }
    if(i == 4){
        countCorrect += 1;
    }
}

function d_answer(i) {
    if(i == 0){
        countCorrect += 0;
    }
    if(i == 1){
        countCorrect += 0;
    }
    if(i == 2){
        countCorrect += 1;
    }
    if(i == 3){
        countCorrect += 0;
    }
    if(i == 4){
        countCorrect += 0;
    }
}

function score() {
    var display = "";
    display += "<tr>";
    display += "<td> Your Grade is " + countCorrect + "/5</td>";
    display += "</tr>";

    document.getElementById('score').innerHTML = display;
}





