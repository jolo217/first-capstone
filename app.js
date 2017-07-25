var resultTemplate = '<div class="container"><div id="name"><div id="realm"><div id="battlegroup"><div id="class"><div id="gender"><div id="level"><div id="gender"><img class="js-image" src="">' + 
'</div></div></div></div></div></div></div></div>'

function getCharacterInfo(realm, characterName, successCallback, errorCallback) {
  $.ajax({
    url: 'https://us.api.battle.net/wow/character/' + realm + '/' + characterName,
    dataType: 'jsonp',
    jsonp: 'jsonp',
    type: 'get',
    data: {
      locale: 'en_US',
      apikey: '8u9cayx2chkvpepxdj5b9yhzwy6n7kqn',
    },
    success: successCallback,
    error: errorCallback,
  });
}

// DOM

function renderResult(result) {
	var template = $(resultTemplate);
	template.find('.js-results-title').text().attr();
	template.find('.js-image').attr('src', );
	return template;
}

function displayData(data) {
	var results = data.map(function(item, index) {
		return renderResult(data);
	});
	$('.js-search-results').html();
	console.log(data);
}

function displayError() {
	$('#general-error').text('something went wrong');
}

// Event Listener

$('#search-button').on('click', function(event){
	var characterInput = $('.search-input').val();
	var realmInput = $('.search-input2').val();
	getCharacterInfo(characterInput, realmInput, displayData, displayError);
});

getCharacterInfo('illidan','sofast', displayData, displayError);