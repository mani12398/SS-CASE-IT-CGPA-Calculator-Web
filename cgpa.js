var nrows = 0;

document.getElementById("gpa_cal").onclick = function () {
  document.getElementById("mini-container").style.display = "block";
  document.getElementById("main-table").style.display = "none";
  document.getElementById("result-show-div").style.display = "none";
  document.getElementById("submit_button").style.display = "none";

  var tableElement = document.getElementById("use_js");
  tableElement.innerHTML = "";
  document.getElementById("show_result").innerHTML = "";
  document.getElementById("table_heading").innerHTML = "";

  document.getElementById("choose_dropdown").innerHTML =
    "<p>Select number of Courses: <select id='courses_drop_down'> <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> <option value='5'>5</option> <option value='6'>6</option> <option value='7'>7</option>  </select> <input id='submit' class='buttons dropdown-submit-btn' type='submit'></p>";

  document.getElementById("submit").onclick = function () {
    document.getElementById("main-table").style.display = "block";
    document.getElementById("submit_button").style.display = "inline";
    document.getElementById("result-show-div").style.display = "none";

    document.getElementById("show_result").innerHTML = "";
    document.getElementById("table_heading").innerHTML =
      "<th>Courses</th> <th>Credit Hours</th> <th>Grade Points</th>";
    var selectField = document.getElementById("courses_drop_down");
    var selected = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selected];

    var a = parseInt(selectedValue.innerHTML);
    nrows = a;
    tableElement.innerHTML = "";
    for (var i = 0; i < a; i++) {
      tableElement.innerHTML +=
        "<td> <input type='text' placeholder='Course " +
        (i + 1) +
        "'> </td> <td> <select class='cred'> <option value=''>0</option> <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> </td> <td> <select class='grad'> <option value=''> ---Select Grade--- </option> <option value='4.00'>A</option> <option value='3.67'>A-</option> <option value='3.33'>B+</option> <option value='3.00'>B</option> <option value='2.67'>B-</option> <option value='2.33'>C+</option> <option value='2.00'>C</option><option value='1.67'>C-</option><option value='1.33'>D+</option><option value='1.00'>D</option><option value='0.00'>F</option> </select> </td>";
    }

    document.getElementById("submit_button").innerHTML =
      "<input type='submit' class='buttons calc-btn' value='Calculate'>";
  };

  document.getElementById("submit_button").onclick = function () {
    var gradePoints = 0.0;
    var creditsTotal = 0.0;

    var creditArray = document.getElementsByClassName("cred");
    var gradeArray = document.getElementsByClassName("grad");

    for (var i = 0; i < nrows; i++) {
      creditsTotal += parseFloat(creditArray[i].value);
      gradePoints +=
        parseFloat(gradeArray[i].value) * parseFloat(creditArray[i].value);
    }

    var res = gradePoints / creditsTotal;
    document.getElementById("result-show-div").style.display = "block";
    document.getElementById("show_result").innerHTML =
      "Your GPA : <span id='final-val'>" + res.toFixed(2) + "</span>";
  };
};

document.getElementById("cgpa_cal").onclick = function () {
  document.getElementById("mini-container").style.display = "block";
  document.getElementById("main-table").style.display = "none";
  document.getElementById("result-show-div").style.display = "none";
  document.getElementById("submit_button").style.display = "none";

  var tableElement = document.getElementById("use_js");
  tableElement.innerHTML = "";
  document.getElementById("show_result").innerHTML = "";
  document.getElementById("table_heading").innerHTML = "";

  document.getElementById("choose_dropdown").innerHTML =
    "<p>Select number of Semesters: <select id='courses_drop_down'> <option value='1'>1</option><option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> <option value='5'>5</option> <option value='6'>6</option> <option value='7'>7</option> <option value='8'>8</option> </select> <input id='submit' class='buttons dropdown-submit-btn' type='submit'> </p>";

  document.getElementById("submit").onclick = function () {
    document.getElementById("main-table").style.display = "block";
    document.getElementById("submit_button").style.display = "inline";
    document.getElementById("result-show-div").style.display = "none";

    document.getElementById("show_result").innerHTML = "";

    document.getElementById("table_heading").innerHTML =
      "<th>Semester</th> <th>Credit Hours</th> <th>GPA</th>";
    var selectField = document.getElementById("courses_drop_down");
    var selected = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selected];

    var a = parseInt(selectedValue.innerHTML);
    nrows = a;
    tableElement.innerHTML = "";

    for (var i = 0; i < a; i++) {
      tableElement.innerHTML +=
        "<td> <input type='text' placeholder='Semester " +
        (i + 1) +
        "'readonly> </td><td> <input type ='text' id='inputField' maxlength='2' placeholder='00' id='inputField' required class='cred'>  </td><td> <input type='text' maxlength='4' placeholder='0.00' id='inputField1' required class='grad'> </td>";
    }

    document
      .getElementById("inputField")
      .addEventListener("keypress", function (event) {
        if (this.value.length === 0 && (event.which < 48 || event.which > 58)) {
          event.preventDefault();
        }

        if (this.value.length === 1 && (event.which < 48 || event.which > 58)) {
          event.preventDefault();
        }
      });

    document
      .getElementById("inputField1")
      .addEventListener("keypress", function (event) {
        if (this.value.length === 0 && (event.which < 48 || event.which > 52)) {
          event.preventDefault();
        }
        if (this.value.length === 1 && event.which !== 46) {
          event.preventDefault();
        }
        if (this.value.length === 2 && (event.which < 48 || event.which > 58)) {
          event.preventDefault();
        }
        if (this.value.length === 3 && (event.which < 48 || event.which > 58)) {
          event.preventDefault();
        }
      });

    document.getElementById("submit_button").innerHTML =
      "<input type='submit'; class='buttons calc-btn'  value='Calculate'>";
  };

  document.getElementById("submit_button").onclick = function () {
    var gradePoints = 0.0;
    var creditsTotal = 0.0;

    var creditArray = document.getElementsByClassName("cred");
    var gradeArray = document.getElementsByClassName("grad");

    for (var i = 0; i < nrows; i++) {
      creditsTotal += parseFloat(creditArray[i].value);
      gradePoints +=
        parseFloat(gradeArray[i].value) * parseFloat(creditArray[i].value);
    }

    var res = gradePoints / creditsTotal;
    document.getElementById("result-show-div").style.display = "block";
    document.getElementById("show_result").innerHTML =
      "Your CGPA : <span id='final-val'>" + res.toFixed(2) + "</span>";
  };
};
