document.getElementById('submit-btn').addEventListener('click', () => {
  let userName = document.getElementById('userName').value;
  let userPhoto = document.getElementById('userPhoto').value;
  let userChoice = [
    document.getElementById('q1').value
    // document.getElementById('q2').value,
    // document.getElementById('q3').value,
    // document.getElementById('q4').value,
    // document.getElementById('q5').value,
    // document.getElementById('q6').value,
    // document.getElementById('q7').value,
    // document.getElementById('q8').value,
    // document.getElementById('q9').value,
    // document.getElementById('q10').value
  ];
  console.log('hi', userName, userPhoto, userChoice);
  if (userChoice.includes('') || userName === '' || userPhoto === '') {
    alert('Please fill out all fields!');
  } else {
    let newUser = {
      name: userName,
      photo: userPhoto,
      scores: userChoice
    };
    console.log(newUser, newUser.scores);
    fetch('/api')
      .then(res => res.json())
      .then(result => {
        console.log('hello', result);
      });
  }
});
