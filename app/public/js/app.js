const $questionContainer = $('.question-container');
const $surveyForm = $('#survey-form');
const $submitBtn = $('#submit');
const $nameInput = $('#name');
const $linkInput = $('#image');
const $modal = $('#modal-match');
const $nameModal = $('#modal-name');
const $photoModal = $('#modal-photo');

let questions = [
    'You tend to be a thinker, not a do-er.',
    'You like to tackle problems with a group.',
    'There is way more to do outside than there is inside.',
    'One dog is fine, but two would be better.',
    'People trust you, and often come to you for help',
    'Empathy comes naturally to you.',
    'You are always aware of your surroundings, and the needs of those around you.',
    'You prefer a good movie night to a night out.',
    'Candy is dandy but liquor is quicker.',
    'Today is going to be a good day.'
  ];

  // Function to generate html for survey questions and select inputs
let buildQuestions = function () {
    questions.forEach(function (x, y) {
      let html =
      `<h3>Question ${y + 1}</h3>
      <div class="form-group">
        <label for="q${y + 1}">${x}</label>
        <select class="form-control questions" id="q${y + 1}" required>
          <option value="" disabled selected>Select an option</option>
          <option value="1">1 (Disagree)</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 (Agree)</option>
        </select><br/>
      </div>`;
      $($questionContainer).append(html);
    });
  };


$surveyForm.submit(function(e) {
    e.preventDefault();
    const $questClass = $(".questions");
    let answers = [];
    $questClass.each(function(i) {
        answers.push($("#q" + (i + 1)).val());
    });
    var newFriend = {
        name: $nameInput.val().trim(),
        photo: $linkInput.val().trim(),
        scores: answers
    }
    let currentURL = window.location.origin;
    let apiPath = "/api/friends";
    $.post(currentURL + apiPath, newFriend, function(data) {
        $surveyForm[0].reset();
        $nameModal.text(data.name);
        $photoModal.attr("src", data.photo);
        $modal.modal("show");
    });
    console.log(newFriend);
});
