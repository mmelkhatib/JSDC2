// Model
 count = 0;

// View

function renderCount() {
  var source = $('#count-template').html();
  var template = Handlebars.compile(source);
  var countHtml = template({
    count: count
  });
  $('#counts').html(countHtml);
}


// Controller

function setup() {
  renderCount();

  // Setup the event listeners
  $('#plus').on('click', increment);
  $('#minus').on('click', decrement);
  $('#zero').on('click', zero);
}

function increment() {
  count++;
  renderCount();
}

function decrement() {
  count -= 2;
  renderCount();
}

function zero() {
  count = 0;
  renderCount();
}

$(document).ready(setup);
