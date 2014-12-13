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
		
			var introFile =  router.getLanguage() == 'french'? 'f_g_h_3':'e_g_h_3';

			tabs.showModal('sortingFirstVisit');
			playAudio.playFiles(introFile);
			$("#"+introFile).bind('ended', function(){
				
				$('.modal.fade.in').modal('hide');
				
				(router.VIStaus == 'OFF' ? playAudio.playFiles(tabs.panelAudio) : '');
				$("#"+tabs.panelAudio).bind('ended', function(){
					
				});
			});
			sortingPageAudio.sortingVisit();
			
			
		}
		else
		{
			$('.modal-backdrop').css({
				'position': 'relative'
			});
			(router.VIStaus == 'OFF' ? '' : sortingPageAudio.sortingVisit());
		}
	}

else
	{
		$('#mainContainer').empty();
		$("#mainContainer").html(htmlFactory.solvedSortingPage()); 
		(router.VIStaus == 'OFF' ? '' : sortingPageAudio.sortingVisit());
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
		return;
		if (correctCards == 6) 
		{
			$('#evaluationModalSuccess').modal('show');
			$.get( "server.php?action=addNewSortingPage&newSortingPageId=" + tabs.solvedPageId );
			tabs.myArray[tabs.solvedPageId] = 'checked';
			(router.VIStaus == 'OFF' ? (router.getLanguage() == 'french'? $('.purpleTextSort span').text(translator.T(tabs.correctSortPurpleText)): $('.purpleTextSort span').text((tabs.correctSortPurpleText))): (router.getLanguage() == 'french'? $('.purpleTextSort span').text(translator.T(tabs.correctSortPurpleTextVI)): $('.purpleTextSort span').text((tabs.correctSortPurpleTextVI))));
			tabs.changeImage();
			$('#sortThoughtBubble').remove();
		} 
		else if (correctCards != 6) 
		{
			tabs.failCounter++;
			
			if (tabs.failCounter == 1) {
				$('#evaluationModalFail').modal('show');
				$('#sortThoughtBubble').remove();
				var helpModalId = tabs.failCounter;

				$('.modal-body').html(translator.T(tabs.helpContent1));
				$('#helpContent').html(translator.T(tabs.helpContent1));

			}
			if (tabs.failCounter == 2) {
				$('#evaluationModalFail').modal('show');
				$('#sortThoughtBubble').remove();
				var helpModalId = tabs.failCounter;
				$('.modal-body').html(translator.T(tabs.helpContent2));
				$('#helpContent').html(translator.T(tabs.helpContent2));
				tabs.failCounter = 0;
			}
		}
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