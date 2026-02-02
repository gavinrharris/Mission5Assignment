// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#submitBtn").click(function () {
    let sessions = $("#numSessions").val();
    let totalCost = sessions * hourlyRate;
    $("#txtTotal").val("$" + totalCost);
});