// Template

var resultTemplate = '<h4>Character Info</h4><div class="container"><div id="name"></div><div id="realm"></div><div id="battlegroup"></div><div id="faction"></div><div id="class"></div><div id="gender"></div><div id="level"></div>' + 
'<img class="js-image" src=""></div>' + '<div id="guild-name"></div></div>' + 

'<h4>Character Items</h4><div class="container2"><div id="item-level"></div><div id="back"></div>' + 
'<div id="chest"></div><div id="feet"></div><div id="finger1"></div><div id="finger2"></div><div id="hands"></div><div id="head"></div><div id="legs"></div><div id="mainhand"></div><div id="neck"></div>' +
'<div id="shoulder"></div><div id="trinket1"></div><div id="trinket2"></div><div id="waist"></div><div id="wrist"></div></div>' + 

'<h4>Professions</h4><div class="container3"><div id="profession-name1"></div><div id="profession-level1"></div><div id="profession-name2"></div><div id="profession-level2"></div></div>' +

'<h4>Stats</h4><div class="container4"><div id="crit"></div><div id="haste"></div><div id="mastery"></div><div id="spellcrit"></div><div id="versatility"></div></div>' + 

'<div class="container5"><div id="health"></div><div id="mana"></div><div id="int"></div><div id="str"></div><div id="agi"></div><div id="sta"></div><div id="armor"></div></div>'



// API

function getCharacterInfo(realm, characterName, successCallback, errorCallback) {
  $.ajax({
    url: 'https://us.api.battle.net/wow/character/' + realm + '/' + characterName,
    dataType: 'jsonp',
    jsonp: 'jsonp',
    type: 'get',
    data: {
      locale: 'en_US',
      apikey: '8u9cayx2chkvpepxdj5b9yhzwy6n7kqn',
      fields: 'guild,items,professions,progression,stats,talents,titles',
    },
    success: successCallback,
    error: errorCallback,
  });
}

// DOM

function ifExists(results) {
	return "n/a";
}

function renderResult(result) {
	var template = $(resultTemplate);
	template.find('#name').text('Character name: ' + ifExists());
	template.find('#realm').text('Realm: ' + result.realm);
	template.find('#battlegroup').text('Battlegroup: ' + result.battlegroup);
	template.find('#class').text('Class: ' + result.class);
	template.find('#gender').text('Gender: ' + result.gender);
	template.find('#level').text('Level: ' + result.level);
	template.find('#faction').text('Faction: ' + result.faction);
	template.find('.js-image').attr('src', 'http://render-api-us.worldofwarcraft.com/static-render/us/' + result.thumbnail);
	template.find('#guild-name').text('Guild name: ' + result.guild.name);
	template.find('#item-level').text('Average item level: ' + result.items.averageItemLevel + ' Average item level equipped: ' + result.items.averageItemLevelEquipped);
	template.find('#back').text('Back item: ' + result.items.back.name);
	template.find('#chest').text('Chest item: ' + result.items.chest.name);
	template.find('#feet').text('Feet item: ' + result.items.feet.name);
	template.find('#finger1').text('Finger 1: ' + result.items.finger1.name);
	template.find('#finger2').text('Finger 2: ' + result.items.finger2.name);
	template.find('#hands').text('Hand item: ' + result.items.hands.name);
	template.find('#head').text('Head item: ' + result.items.head.name);
	template.find('#legs').text('Leg item: ' + result.items.legs.name);
	template.find('#mainhand').text('Weapon item: ' + result.items.mainHand.name);
	template.find('#neck').text('Neck item: ' + result.items.neck.name);
	template.find('#shoulder').text('Shoulder item: ' + result.items.shoulder.name);
	template.find('#trinket1').text('Trinket 1: ' + result.items.trinket1.name);
	template.find('#trinket2').text('Trinket 2: ' + result.items.trinket2.name);
	template.find('#waist').text('Waste item: ' + result.items.waist.name);
	template.find('#wrist').text('Wrist item: ' + result.items.wrist.name);
	template.find('#profession-name1').text('Profession 1: ' + result.professions.primary[0].name);
	template.find('#profession-name2').text('Profession 2: ' + result.professions.primary[1].name);
	template.find('#profession-level1').text(result.professions.primary[0].rank + '/' + result.professions.primary[0].max);
	template.find('#profession-level2').text(result.professions.primary[1].rank + '/' + result.professions.primary[1].max);
	template.find('#crit').text('Crit rating: ' + result.stats.critRating);
	template.find('#haste').text('Haste rating: ' + result.stats.hasteRating);
	template.find('#mastery').text('Mastery rating: ' + result.stats.masteryRating);
	template.find('#spellcrit').text('Spell crit rating: ' + result.stats.spellCritRating);
	template.find('#versatility').text('Versatility rating: ' + result.stats.versatility);
	template.find('#health').text('Health: ' + result.stats.health);
	template.find('#mana').text('mana: ' + result.stats.mana5);
	template.find('#int').text('Intellect: ' + result.stats.int);
	template.find('#str').text('Strength: ' + result.stats.str);
	template.find('#agi').text('Agility: ' + result.stats.agi);
	template.find('#sta').text('Stamina: ' + result.stats.sta);
	template.find('#armor').text('armor: ' + result.stats.armor);
	return template;
}

function displayData(data) {
	var html = renderResult(data);
	$('.search-results').html(html);
}

function displayError() {
	$('#general-error').text('something went wrong');
}

// Event Listener

$('#search-button').on('click', function(event){
	var realmInput = $('.search-input').val();
	var characterInput = $('.search-input2').val();
	getCharacterInfo(realmInput, characterInput, displayData, displayError);
});


object.hasOwnProperty