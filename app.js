$(".submit").on("click"){



    var EmployeeName = ("<tr>") 
    var role =("<tr>")
    var startDate = ("<tr>")
    var monthlyRate = ("<tr>")
    var totalBilled = ("<tr>")

   employeeName = $("#employee-name-input").val().trim();
   role=$("#role-input").val().trim();
   startDate=$("#start-date-input").val().trim();
   monthlyRate=$("#monthly-rate-input").val().trim()


    $("#current-employees").append(EmployeeName)
    $("#current-employees").append(role)
    $("#current-employees").append(startDate)
    $("#current-employees").append(monthlyRate)




}