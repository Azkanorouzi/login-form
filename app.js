const inputs = document.querySelectorAll("input");
const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z/d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}
function validate(field, regex) {
  console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = "valid";
  } else  {
    field.className = "invalid"
  }
}
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    console.log(e.target.attributes.name.value)
    validate(e.target, patterns[e.target.attributes.name.value]);
  })
})

// please note that you can also use special letters like /d for example inside the [] so if we start typing in something
// so now one thing is password password we want it to be alphanumeric as well but also we can have this as well so we wanna call this one password as well this password contains this as well

// email -> (yourname)@(domain).(extension)(.again) sometimes the extension is one word sometimes it's two word like .word.uk that second part is optional but the first one is not the question mark make the last thing optional as wel the important take away however is that it's giong to do this as well and then finally te other one whch is optional so then let's give this a word over here i am going to inspect this as well so i'm just going to say
// however just as a disclaimer notice that we don't have something called this is a basic regular expression this would probably not going to catch all the emails and there is a lot of debate on which is the best email regex but i've done a fairly simple one here it catches most of them and this is not the perfect one so many people debate on this as well you might not believe it ao so we still want to add some feedback for the user as well we want to add some classes as well we can use these classes dependant on state as well let's go to css right there but i'm just going to do some additional stuff as so the first thing that i want to do is to use input valid when something 