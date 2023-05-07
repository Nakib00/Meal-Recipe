function connect() {
  var userText = document.getElementById("user-input").value;
  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userText} `;

  var userloop = document.getElementById("user-loop").value;

  // document.getElementById('user-input').value = "";
  // document.getElementById('container').textContent = "";

  fetch(url)
    .then((res) => res.json())
    .then((data) => show(data.meals, userloop));
}

function show(items, userloop) {
  var oldContent = document.getElementById("card-container");
  //   console.log(userloop);
  for (var i = 0; i < userloop; i++) {

    const cardHtml= `<div class="m-3 flex-item">
                            <div class="card" style="width: 18rem;">
                                <img src="${items[i].strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${items[i].strMeal}</h5>
                                <div class="container">
                                <div class="row">
                                  <div class="col-md-8 offset-md-2">
                                    <div class="scrollable-div">
                                    <p class="card-text">${items[i].strInstructions}</p>
                                    </div>
                                  </div><hr>
                                  <div m-2>
                                    <a href="${items[i].strYoutub}" class="btn  btn-info">Recipe video</a>
                                  </div>
                                </div>
                              </div>
                                </div>
                            </div>
                        </div>`;
    oldContent.innerHTML += cardHtml;
  }
}
