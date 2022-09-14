const back_evnt = () => {
  $("#category_quotes").fadeOut("slow", () => {
    $("#categories_wrapper").fadeIn("slow");
  });
};

const populateQuotes = (quotes) => {
  let html = "";
  $("#category_quotes").html("");
  quotes.forEach((element) => {
    html = `
    <ul class="list-group list-group-flush " style="margin-bottom:2%" >
  <li class="list-group-item text-center " style="background-image: linear-gradient(45deg,rgb(217, 238, 250),rgb(255, 236, 239));"><blockquote class="blockquote">
  <p class="mb-0">${element.quote}</p>
</blockquote></li>

</ul>
</div>`;

    $("#category_quotes").append(html);
  });
  $("#category_quotes").append(
    `
        <i
          class="fa-solid fa-circle-left"
          onclick="back_evnt();"
          style="font-size: 50px; margin-bottom:2%;"
        ></i>
      `
  );
};

const showQuotes = (id) => {
  $("#categories_wrapper").fadeOut("slow");
  $("#category_quotes").fadeIn("slow");
  let catg = "";
  switch (id) {
    case 0:
      catg = "motivationalQuotes";
      break;
    case 1:
      catg = "loveQuotes";
      break;
    case 2:
      catg = "sorryQuotes";
      break;
    case 3:
      catg = "emotionalQuotes";
      break;
    case 4:
      catg = "crushQuotes";
      break;
    case 5:
      catg = "angryQuotes";
      break;
  }

  let url = `https://anonic-quotesapi.herokuapp.com/62cfbb9123b1930016ed8232/${catg}`;
  $.get(url, (resp) => {
    // $("#category_quotes").fadeIn("slow");
    populateQuotes(resp);
  });
};

$(document).ready(() => {});
