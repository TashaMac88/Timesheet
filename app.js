
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

//database.ref().on("value", function (snap))
//snapshot.ref.child('dishes').push({ mykey: 'true', ...
//$("#current-employees").append(EmployeeName)
//$("#role").append(role)
//$("#start-date").append(startDate)
//$("#monthly-rate").append(monthlyRate)
//$("#total-billed").append(totalBilled)





$(".submit").on("click", function(event){
event.preventDefault()




    var employeeName = $("#employee-name-input").val().trim();
    var employeeRole = $("#role-input").val().trim();
    var startDate = $("#start-date-input").val().trim();
    var monthlyRate = $("#monthly-rate-input").val().trim()

    var newEmployee ={
        name: employeeName,
        role: employeeRole,
        start: startDate,
        rate: monthlyRate
        
    };

    database.ref().push(newEmployee);

   



})