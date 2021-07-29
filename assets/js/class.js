
$(document).ready(function () {
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  // Initialize featTable and its functions
    var featTable = $('#featTable').DataTable({
      'autoWidth': false,
      'paging': false,
      'info': false});

    $('.featName').click( function () {
      $(this).parent().toggleClass('info');
    });

    $('.featDesc').click( function () {
      $(this).toggleClass('line-clamp');
    });

    $('#deselect').click( function () {
      featTable.rows('.info').nodes().to$().removeClass('info');
    });

    $('#addFeats').click( function () {
      var selectedRows = featTable.rows('.info').data();
      if (selectedRows.length == 0) {
        alert('No feats selected!');
      } else {
        var featString = ''
        for (var i=0 ; i < selectedRows.length ; i++) {
          featString += selectedRows[i].DT_RowId;
        };

        var currentURL = window.location.href;
        if (currentURL.includes('feat=')) {
          featString = currentURL.match(/feat=\w+/) + featString;
          var newURL = currentURL.replace(/feat=\w+/, featString);
        } else if (currentURL.includes('?')) {
          var newURL = currentURL + '&feat=' + featString;
        } else {
          var newURL = currentURL + '?feat=' + featString;
        }
        window.location.href = newURL;
      }
   });

    $('#applyFeats').click( function () {
      var selectedRows = featTable.rows('.info').data();
      var currentURL = window.location.href;
      
      if (selectedRows.length == 0) {
        if (currentURL.includes('&feat=')) {
          var newURL = currentURL.replace(/&feat=\w+/, '');
        } else if (currentURL.includes('?feat=')) {
          var newURL = currentURL.replace(/feat=\w+&/, '');
          newURL = currentURL.replace(/\?feat=\w+/, '');
        } else {
          return '';
        }

      } else {
        var featString = 'feat='
        for (var i=0 ; i < selectedRows.length ; i++) {
          featString += selectedRows[i].DT_RowId;
        };

        if (currentURL.includes('feat=')) {
          var newURL = currentURL.replace(/feat=\w+/, featString);
        } else if (currentURL.includes('?')) {
          var newURL = currentURL + '&' + featString;
        } else {
          var newURL = currentURL + '?' + featString;
        }
      }
      window.location.href = newURL;

   });

    ///////////////////////////////////////////
    ///////////////////////////////////////////
    // Initialize classTable and its functions
    var classTable = $('.classTable').DataTable({
      'paging': false,
      'info': false,
      'searching': false,
      'ordering': false });

    $('.applySub').click( function () {
      var sub = $(this).attr("id");
      var currentURL = window.location.href;
      if (currentURL.includes('sub=')) {
        var newURL = currentURL.replace(/sub=\w+/, 'sub=' + sub);
      } else if (currentURL.includes('?')) {
        var newURL = currentURL + '&sub=' + sub;
      } else {
        var newURL = currentURL + '?sub=' + sub;
      };
      window.location.href = newURL;
    });
  
  
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    // Get url parameters if there. Otherwise they will be undefined
    var URLparameters = window.location.search.substring(1).split('&');
    for (var i = 0; i < URLparameters.length; i++) {
      var parameter = URLparameters[i].split('=');
      window[parameter[0]] = parameter[1];
    }
    
    // Adjust content based on GET parameters in the URL
    if (typeof sub !== 'undefined') {
      applySub(sub)
    }

    if (typeof feat !== 'undefined') {
      var featList = feat.match(/(.{1,2})/g);
      applyFeat(featList);
    }

    if (typeof lvl !== 'undefined') {
      $('.lvl1').hide();
      var nextLevelInfo = '<h3>Next level</h3><strong>Hit points:</strong> 1d10 or 6 hp<br><strong>Proficiency modifier:</strong> ';
      
      var prof = parseInt(classTable.cell(lvl, 1).data());
      var previousProf = parseInt(classTable.cell(lvl-1, 1).data());
      if (prof == previousProf) {
        nextLevelInfo += 'No change';
      } else { 
        nextLevelInfo += '+1';
      }
      
      var features = classTable.cell(lvl, 2).data();
      $('#nextLevel').html(nextLevelInfo + '<br><strong>New features:</strong> ' + features )
      $('.nextLevel').show();
      
      for (var i = 20; i > lvl-1; i--) { 
       classTable.rows(i).remove();
      }
      classTable.draw()
    }
    
    //////////////////////////////////////////
    //////////////////////////////////////////
    // For showing&hiding relevant features
    $('.btn-show').click(function(){
      $('.features').collapse('show');
    });
    $('.btn-hide').click(function(){
      $('.features').collapse('hide');
    });
    
    $('.sub-show').click(function(){
      $('.subFeatures').collapse('show');
    });
    $('.sub-hide').click(function(){
      $('.subFeatures').collapse('hide');
    });
    
    //////////////////////////////////
    // Selecting archetypes to view
    $('#archetypeSelection').change(function(){          
      var value = $('#archetypeSelection option:selected').val();
      var archetype = $('#' + value);
      $('.archetype').addClass('hidden');
      archetype.removeClass('hidden');
    });    

    ////////////////////////////////////////
    // Initialize tooltip and its functions
    $('[data-toggle="tooltip"]').tooltip();

    $('.spellName').on('click', function () {
      var temp_input = document.createElement("textarea");
      document.body.appendChild(temp_input);
      temp_input.value = $(this).data('original-title');
      temp_input.select();
      document.execCommand("copy");
      document.body.removeChild(temp_input);
    });

});



///////////////////////////////////////////////////////
// Select archetype and add its features to main table
function applySub(selector) {
  ///////////////////////////////////////////
  // Reset main table and descriptions
  $('.sub').each(function () {
       $(this).html('');
  });

  ///////////////////////////////////////////////
  // Include archetype description to main class
  $('#subDesc').html($('#' + selector + 'Desc').html())

  ///////////////////////////////////////////
  // Add all archetype features to main class
  $('.' + selector).each(function () {
    var lvl = $(this).data("lvl")
    var feature = $(this).clone()
    feature.removeClass("subFeatures").addClass("features")
    feature.prop('id',feature.prop('id').replace(selector, 'sub'))
    $('#f' + lvl).append(feature)
  });

  //////////////////////////////////////////////////
  // Add archetype feature names to main classTable
  $('.' + selector + 'Link').each(function () {
    var lvl = $(this).data("lvl")
    var featureNames = $(this).html()
    featureNames = featureNames.replaceAll(selector, 'sub')
    $('#fName' + lvl).append(featureNames)
  });
};

///////////////////////////////////////////////////////
// Select feats and add to main table

function applyFeat(featList) {
  var featTable = $('#featTable').DataTable()

  $('.asi').each(function () {
    if (featList.length == 0) {
      return false;
    } else {
      var lvl = $(this).data("lvl")
      var nextFeat = '#' + featList.shift()
      $(nextFeat).addClass('info');
      
      var featRow = featTable.row(nextFeat);
      var featName = featTable.cell(featRow[0], 0).data();
      var featNameHtml = '<a href="#asi' + lvl + '" data-toggle="collapse">' + featName + '</a>'
      
      $(this).html(featNameHtml);

      var featDesc = featTable.cell(featRow[0], 2).data();
      featDesc = '<h3>' + featName + '</h3>' + featDesc
      $('#asi' + lvl).html(featDesc);
    }
  });

  featTable.draw();

};
