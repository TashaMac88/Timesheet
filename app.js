
  var firebaseConfig = {
    apiKey: "AIzaSyCDSe7YVyFCm3Uaop9ffgiPYMY-KDR1ul8",
    authDomain: "timesheet-59f66.firebaseapp.com",
    databaseURL: "https://timesheet-59f66.firebaseio.com",
    projectId: "timesheet-59f66",
    storageBucket: "",
    messagingSenderId: "805998880268",
    appId: "1:805998880268:web:3caca7f63ab47a6e"
  }

firebase.initializeApp(firebaseConfig);

var database=firebase.database();
//database.ref().on("value", function (event))


$(".submit").on("click"   ){






    var EmployeeName = ("<tr>")
    var role = ("<tr>")
    var startDate = ("<tr>")
    var monthlyRate = ("<tr>")
    var totalBilled = ("<tr>")

    employeeName = $("#employee-name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#start-date-input").val().trim();
    monthlyRate = $("#monthly-rate-input").val().trim()

    $("#current-employees").append(EmployeeName)
    $("#role").append(role)
    $("#start-date").append(startDate)
    $("#monthly-rate").append(monthlyRate)
    $("#total-billed").append(totalBilled)




    database.ref().set({
       


        
      });



}