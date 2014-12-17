$(document).ready(function () {
    // $("#purpleBoxAudioSorting")[0].play();
    // 	$(".play").click(function(){
    // 		$("#purpleBoxAudioSorting")[0].play();
    // 		});  
});

tabs.askLeft = 35;
tabs.askTop = 83;

tabs.postLeft = 735;
tabs.postTop = 83;

if (tabs.myArray[tabs.solvedPageId] != 'checked')
	{
		$('#mainContainer').empty();
		$("#mainContainer").html(htmlFactory.unsolvedSortingPage()); 
		var currentHashArray = location.hash.split('_');
		
		if (currentHashArray[4].length == 1 && router.sortingFirstVisit == 0)
		{
			router.sortingFirstVisit ++;
			tabs.showModal('sortingFirstVisit');
			
			sortingPageAudio.sortingFirstVisit();
						
		}
		else
		{
			$('.modal-backdrop').css({
				'position': 'relative'
			});			
			sortingPageAudio.playSortingTitle();
		}
	}

else
	{
		$('#mainContainer').empty();
		$("#mainContainer").html(htmlFactory.solvedSortingPage()); 

		//(router.VIStaus == 'OFF' ? '' : sortingPageAudio.sortingVisit());
	}
	
init = function() {
            correctCards = 0;

            for (var i = 0; i < 6; i++) {
                $('#cardPile' + [i]).html('');
            }

            for (var i = 1; i <= 6; i++) {
                $('#cardSlots' + [i]).html('');
            }

            var numbers = ['post', 'post', 'post', 'ask', 'ask', 'ask'];
            var sortTexts = [
                translator.T(tabs.e_1_1_r_6),
                translator.T(tabs.e_1_1_r_5),
                translator.T(tabs.e_1_1_r_4),
                translator.T(tabs.e_1_1_r_3),
                translator.T(tabs.e_1_1_r_2),
                translator.T(tabs.e_1_1_r_1)
            ];

            //we use stack to ensure that dragged cards always sits on top the other cards
            for (var i = 0; i < 6; i++) {
                $('<div><span class="textStyle">' + sortTexts[i] + '</span></div>').data('number', numbers[i]).attr('id', 'cardPile' + [i]).appendTo('#cardPile' + [i]).prepend('<img id="theImg" src="images/' + tabs.yellowCard + '.png" />').draggable({
                    stack: '#cardPile' + [i] + ' div',
                    cursor: 'move',
                    revert: true
                });
            }

            var words = ['ask', 'ask', 'ask', 'ask', 'post', 'post', 'post'];

            for (var i = 0; i <= 6; i++) {
                $('<div></div>').data('words', words[i]).appendTo('#cardSlots' + [i]).droppable({
                    hoverClass: 'hovered',
                    drop: handleCardDrop
                });
            }

            $('#activeAsk').click("click", function () 
			{
				router.addSceneToHash(tabs.activeAskScene);
				tabs.clickNext();
			});
	
			$('#activePost').click("click", function () 
			{	
				router.addSceneToHash(tabs.activePostScene);
				tabs.clickNext();
			});


        };

init();

function handleCardDrop(event, ui) 
{
	var slotNumber = $(this).data('words');
	var cardNumber = ui.draggable.data('number');

	var innerAnswerFixHtml = $('<div id="'+$(this).data('words')+'"></div>');
	$(ui.helper[0]).append(innerAnswerFixHtml);

	ui.draggable.draggable('disable');
	$(this).droppable('disable');

	ui.draggable.position({
		of: $(this),
		my: 'left top',
		at: 'left top'
	});
	
	ui.draggable.draggable('option', 'revert', false);

	tabs.dropCounter ++;
	tabs.cardCounter ++;
	
	if (slotNumber == cardNumber) {
		correctCards++;
	} else {
		correctCards = correctCards - 1;
	}

	if (tabs.dropCounter == 6) {
		tabs.sortingResult();		
	}
};

var sortedPages;

$.getJSON( "server.php?action=getSortedPages", function(sortedPageIds ) {
						
			// Check if index of this page is in sortedPageIds array.
			sortedPages = sortedPageIds;
			var sortedPageId = sortedPages.indexOf(tabs.solvedPageId);

			if (sortedPageId != -1)
			{
				$('#mainContainer').empty();
				$("#mainContainer").html(htmlFactory.solvedSortingPage());	
			}
			else
			{
			}
			// $('#activeAsk').click("click", function () 
			// {
			// 	router.addSceneToHash(tabs.activeAskScene);
			// 	tabs.clickNext();
			// });
	
			// $('#activePost').click("click", function () 
			// {	
			// 	router.addSceneToHash(tabs.activePostScene);
			// 	tabs.clickNext();
			// });

			
		}, "json" );


function showHelpModal() {
    $('#HelpModal').modal('show');
};

function coverUpHelpModal() {
    $('#coverUpHelpModal').modal('show');
};

function askHelpModal() {
    $('#AskPageHelpModal').modal('show');
};