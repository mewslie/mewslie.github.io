$.get('Dialog.mhtml', function(response) {
  var dom_nodes = $($.parseHTML(response));
  console.log(dom_nodes.find('clickable').text());
});
