document.getElementById('submit-btn').addEventListener('click', () => {
  let userName = document.getElementById('userName').value;
  let userPhoto = document.getElementById('userPhoto').value;
  let userChoice = [
    document.getElementById('q1').value,
    document.getElementById('q2').value,
    document.getElementById('q3').value,
    document.getElementById('q4').value,
    document.getElementById('q5').value,
    document.getElementById('q6').value,
    document.getElementById('q7').value,
    document.getElementById('q8').value,
    document.getElementById('q9').value,
    document.getElementById('q10').value
  ];
  console.log('hi', userName, userPhoto, userChoice);
  if (userChoice.includes('') || userName === '' || userPhoto === '') {
    alert('Please fill out all fields!');
  } else {
    document.getElementById('custom-modal').innerHTML = `
    <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
             <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Your match is
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <span id="match-name"></span>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div> 
          </div>`;
    let newUser = {
      name: userName,
      photo: userPhoto,
      scores: userChoice
    };
    console.log(newUser, newUser.scores);
    fetch('/api')
      .then(res => res.json())
      .then(result => {
        const resultArr = result;
        let currentMin = false;
        let matchIndex;
        resultArr.forEach((result, j) => {
          let loopMin = 0;
          for (let i = 0; i < 10; i++) {
            loopMin += Math.abs(result.scores[i] - userChoice[i]);
          }
          if (currentMin === false || loopMin <= currentMin) {
            currentMin = loopMin;
            matchIndex = j;
          }
        });
        console.log(`Match is ${matchIndex} ${resultArr[matchIndex].name}`);
        document.getElementById('match-name').innerHTML =
          resultArr[matchIndex].name;
      });
  }
});
