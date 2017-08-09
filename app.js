// Template

var resultTemplate = '<div class=row><div class="col-4"><h4>Character Info</h4><div class="container"><div id="name"></div><div id="realm"></div><div id="battlegroup"></div><div id="faction"></div><div id="class"></div>' +
'<div id="gender"></div><div id="level"></div><div id="guild-name"></div><img class="js-image" src=""></div></div>' +

'<div class="col-4"><h4>Character Items</h4><div class="container2"><div id="item-level"></div><div id="item-level2"></div><a id="back" href="" target="_blank"></a>' + 
'<div><a id="chest" href="" target="_blank"></a><div><a id="feet" href="" target="_blank"></a><div><a id="finger1" href="" target="_blank"></a><div><a id="finger2" href="" target="_blank"></a>' +
'<div><a id="hands" href="" target="_blank"></a><div><a id="head" href="" target="_blank"></a><div><a id="legs" href="" target="_blank"></a><div><a id="mainhand" href="" target="_blank"></a>' + '<div><a id="offhand" href="" target="_blank"></a>' +
'<div><a id="neck" href="" target="_blank"></a><div><a id="shoulder" href="" target="_blank"></a><div><a id="trinket1" href="" target="_blank"></a><div><a id="trinket2" href="" target="_blank">' +
'</a><div><a id="waist" href="" target="_blank"></a><div><a id="wrist" href="" target="_blank"></a></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>' + 

'<div class="col-4"><h4>Professions</h4><div class="container3"><div id="profession-name1"></div><div id="profession-level1"></div><div id="profession-name2"></div><div id="profession-level2"></div></div></div>' +

'<div class="col-4"><h4>Stats</h4><div class="container4"><div id="crit"></div><div id="haste"></div><div id="mastery"></div><div id="spellcrit"></div><div id="versatility"></div>' + 
'<div id="health"></div><div id="mana"></div><div id="int"></div><div id="str"></div><div id="agi"></div><div id="sta"></div><div id="armor"></div></div></div></div>'



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

function ifExists(obj) {
	var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < args.length; i++) {
        if (!obj || !obj.hasOwnProperty(args[i])) {
            return false;
        }
        obj = obj[args[i]];
    }
    return true;
}


function renderResult(result) {
	var template = $(resultTemplate);
	template.find('#name').text('Character name: ' + result.name);
	template.find('#realm').text('Realm: ' + result.realm);
	template.find('#battlegroup').text('Battlegroup: ' + result.battlegroup);
	template.find('#class').text('Class: ' + result.class);
	template.find('#gender').text('Gender: ' + result.gender);
	template.find('#level').text('Level: ' + result.level);
	template.find('#faction').text('Faction: ' + result.faction);
	template.find('.js-image').attr('src', (ifExists(result, 'thumbnail') ? 'http://render-api-us.worldofwarcraft.com/static-render/us/' + result.thumbnail : 'Not Found'));
	template.find('#guild-name').text('Guild name: ' + result.guild.name);
	template.find('#item-level').text('Average item level: ' + result.items.averageItemLevel);
	template.find('#item-level2').text('Average item level equipped: ' + result.items.averageItemLevelEquipped);
	template.find('#back').text('Back item: ' + (ifExists(result, 'items', 'back', 'name') ? result.items.back.name : "No item")).attr('href', (ifExists(result, 'items', 'back', 'id') ? 'http://www.wowhead.com/item=' + result.items.back.id : '#'));
	template.find('#chest').text('Chest item: ' + (ifExists(result, 'items', 'chest', 'name') ? result.items.chest.name : "No item")).attr('href', (ifExists(result, 'items', 'chest', 'id') ? 'http://www.wowhead.com/item=' + result.items.chest.id : '#'));
	template.find('#feet').text('Feet item: ' + (ifExists(result, 'items', 'feet', 'name') ? result.items.feet.name : "No item")).attr('href', (ifExists(result, 'items', 'feet', 'id') ? 'http://www.wowhead.com/item=' + result.items.feet.id : '#'));
	template.find('#finger1').text('Finger 1: ' + (ifExists(result, 'items', 'finger1', 'name') ? result.items.finger1.name : "No item")).attr('href', (ifExists(result, 'items', 'finger1', 'id') ? 'http://www.wowhead.com/item=' + result.items.finger1.id : '#'));
	template.find('#finger2').text('Finger 2: ' + (ifExists(result, 'items', 'finger2', 'name') ? result.items.finger2.name : "No item")).attr('href', (ifExists(result, 'items', 'finger2', 'id') ? 'http://www.wowhead.com/item=' + result.items.finger2.id : '#'));
	template.find('#hands').text('Hand item: ' + (ifExists(result, 'items', 'hands', 'name') ? result.items.hands.name : "No item")).attr('href', (ifExists(result, 'items', 'hands', 'id') ? 'http://www.wowhead.com/item=' + result.items.hands.id : '#'));
	template.find('#head').text('Head item: ' + (ifExists(result, 'items', 'head', 'name') ? result.items.head.name : "No item")).attr('href', (ifExists(result, 'items', 'head', 'id') ? 'http://www.wowhead.com/item=' + result.items.head.id : '#'));
	template.find('#legs').text('Leg item: ' + (ifExists(result, 'items', 'legs', 'name') ? result.items.legs.name : "No item")).attr('href', (ifExists(result, 'items', 'legs', 'id') ? 'http://www.wowhead.com/item=' + result.items.legs.id : '#'));
	template.find('#mainhand').text('Weapon item: ' + (ifExists(result, 'items', 'mainHand', 'name') ? result.items.mainHand.name : "No item")).attr('href', (ifExists(result, 'items', 'mainHand', 'id') ? 'http://www.wowhead.com/item=' + result.items.mainHand.id : '#'));
	template.find('#offhand').text('Offhand item: ' + (ifExists(result, 'items', 'offHand', 'name') ? result.items.offHand.name : "No item")).attr('href', (ifExists(result, 'items', 'offHand', 'id') ? 'http://www.wowhead.com/item=' + result.items.offHand.id : '#'));
	template.find('#neck').text('Neck item: ' + (ifExists(result, 'items', 'neck', 'name') ? result.items.neck.name : "No item")).attr('href', (ifExists(result, 'items', 'neck', 'id') ? 'http://www.wowhead.com/item=' + result.items.neck.id : '#'));
	template.find('#shoulder').text('Shoulder item: ' + (ifExists(result, 'shoulder', 'back', 'name') ? result.items.shoulder.name : "No item")).attr('href', (ifExists(result, 'items', 'shoulder', 'id') ? 'http://www.wowhead.com/item=' + result.items.shoulder.id : '#'));
	template.find('#trinket1').text('Trinket 1: ' + (ifExists(result, 'items', 'trinket1', 'name') ? result.items.trinket1.name : "No item")).attr('href', (ifExists(result, 'items', 'trinket1', 'id') ? 'http://www.wowhead.com/item=' + result.items.trinket1.id : '#'));
	template.find('#trinket2').text('Trinket 2: ' + (ifExists(result, 'items', 'trinket2', 'name') ? result.items.trinket2.name : "No item")).attr('href', (ifExists(result, 'items', 'trinket2', 'id') ? 'http://www.wowhead.com/item=' + result.items.trinket2.id : '#'));
	template.find('#waist').text('Waist item: ' + (ifExists(result, 'items', 'waist', 'name') ? result.items.waist.name : "No item")).attr('href', (ifExists(result, 'items', 'waist', 'id') ? 'http://www.wowhead.com/item=' + result.items.waist.id : '#'));
	template.find('#wrist').text('Wrist item: ' + (ifExists(result, 'items', 'wrist', 'name') ? result.items.wrist.name : "No item")).attr('href', (ifExists(result, 'items', 'wrist', 'id') ? 'http://www.wowhead.com/item=' + result.items.wrist.id : '#'));
	template.find('#profession-name1').text('Profession 1: ' + (ifExists(result, 'professions', 'primary', '0', 'name') ? result.professions.primary[0].name : "No profession"));
	template.find('#profession-name2').text('Profession 2: ' + (ifExists(result, 'professions', 'primary', '1', 'name') ? result.professions.primary[1].name : "No profession"));
	template.find('#profession-level1').text('Profession level: ' + (ifExists(result, 'professions', 'primary', '0', 'rank') ? result.professions.primary[0].rank : "No profession") + '/' + (ifExists(result, 'professions', 'primary', '0', 'max') ? result.professions.primary[0].max: "No Profession"));
	template.find('#profession-level2').text('Profession level: ' + (ifExists(result, 'professions', 'primary', '1', 'rank') ? result.professions.primary[1].rank : "No profession") + '/' + (ifExists(result, 'professions', 'primary', '1', 'max') ? result.professions.primary[1].max: "No Profession"));
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

function scroll() {
	$('html, body').animate({
    scrollTop: $(".search-results").offset().top
}, 1000);
}

// Event Listener

$('#search-button').on('click', function(event){
	event.preventDefault();
	var realmInput = $('.search-input').val();
	var characterInput = $('.search-input2').val();
	getCharacterInfo(realmInput, characterInput, displayData, displayError);
	scroll();
	$('input[type="text"], textarea').val('');
});
