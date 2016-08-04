// Model

var model = {
  loggedIn: false,
  user: {
    email: 'undefined'
  },
  messages: {
    ab32cd4: {
      author: 'cool@example.com',
      text: 'Hello World!',
      upvotes: 0
    },
    kc4nd2dc: {
      author: 'neat@example.com',
      text: 'Foobar!',
      upvotes: 3
    }
  }
};

// View

var chatTemplate;
var formTemplate;
function compileTemplates() {
  var templateSource = $('#chat-template').html();
  chatTemplate = Handlebars.compile(templateSource);

  var formTemplateSource = $('#form-template').html();
  formTemplate = Handlebars.compile(formTemplateSource);
}
function renderChat() {
  var chatHtml = chatTemplate(model);
  $('#chatLog').html(chatHtml);
}

function renderForm() {
  var formHtml = formTemplate(model);
  $('#formContainer').html(formHtml);
}

// Controller

function setup() {
  compileTemplates();
  renderForm();
  renderChat();

  // TODO: Event Listeners
  $('#formContainer').on('click', '#register', handleRegister);
  $('#formContainer').on('click', '#signin', handleLogin);
  $('#formContainer').on('click', '#signOut', handleSignOut);
  //custom event listener//
  firebase.auth().onAuthStateChanged(handleAuthStateChange);
}

function handleAuthStateChange(){
  //currentUser is a variable! //
  var user = firebase.auth().currentUser;

  if (user) {
    model.loggedIn = true;
    model.user = user;
    console.log(user + ' just logged in')
  }
  else {
    model.loggedIn = false;
    model.user = undefined;
  }
  //moving the rendering outside of the conditional//
  renderForm();
  renderChat();
}

function handleSignOut() {
  firebase.auth().signout();
};

function handleRegister(){
var email = $('input[name="email"]').val();
var password = $('input[name="password"]').val();
firebase.auth().createUserWithEmailAndPassword(email, password);
};

function handleLogin(){
  var email = $('input[name="email"]').val();
  var password = $('input[name="password"]').val();
  firebase.auth().signInWithEmailAndPassword(email, password);
};
$(document).ready(setup);
