console.log('connected')
//random number
const randnum = parseInt(Math.random() * 10 + 1)      // *10+1--> 1-10 values and parseint removes decimals here
console.log(randnum)

//Accessing Form
const form = document.getElementsByClassName('border')[0]

//accessing h1 of form #notice
const notice = document.getElementById('notice')

//acess score class for Tries in form h3
const score = document.getElementsByClassName('score')[0]

var count=0

//Accessing Button
const btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click', function (e) {
    e.preventDefault()    // button has feature to refresh page to control it preventdefault.

    const num = document.getElementById('num').value  //when i click on button, input value given by user
    // console.log(num)     what ever value given by us in input box it prints
    if (randnum > num) {        //if randomnumber given by computer is >r than user input value

        notice.innerText = "Try Bigger Number🙌"
        form.style.borderColor="red"    //form-class as border used to change bordercolor
        count++
        score.innerText = count

    } else if (randnum == num) {

        notice.innerText = "Congratulations🎊🎉💥"
        form.style.borderColor="green"
        score.innerText = count

    } else {

        notice.innerText = "Try Smaller Number🙌"
        form.style.borderColor="red"
        count++
        score.innerText = count   //count== will be given as Tries which has score as class
    }
    form.reset()        // removes entered value of inputbox it resets form
})

