function displayData(data) {
  console.log("Test: ", data);
  let message = "Airport " + data.Name + "<br/>";
  message += "<h3>STATUS: </h3>";
  for (i in data.Status[0]) {
    if (data.Status[0] != "") {
      message += i + ": " + data.Status[0][i] + "<br/>";
    }
  }
  message += "<h3>WEATHER: </h3>";
  for (i in data.Weather) {
    if (i !== "Meta" && i !== "Weather") {
      message += i + ": " + data.Weather[i][0] + "<br/>";
    } else if (i === "Weather") {
      message += i + ": " + data.Weather.Weather["0"].Temp + "<br/>";
    } else if (i === "Meta") {
      message += "";
    }
  }
  $('#info').html(message).css('color', '#062270');
}

$(document).ready(function() {

  $('#btn').click(function() {
    $('#info').html("Getting info...");

    let code = $('#airportCode').val();

    $.get("https://soa.smext.faa.gov/asws/api/airport/status/" + code + "?format=application/json",
    '',
    function(data) {
      displayData(data);
    });
  });
});
