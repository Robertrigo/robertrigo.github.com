/*jslint browser: true*/
/*global $ */

$(document).ready(function () {
    // Get url parameters if there. Otherwise c will be undefined
    var URLparameters = window.location.search.substring(1).split('&');
    for (var i = 0; i < URLparameters.length; i++) {
      var parameter = URLparameters[i].split('=');
      window[parameter[0]] = parameter[1];
    }
    
    // Initialize classTable
    var classTable = $('.classTable').DataTable({
      "paging": false,
      "info": false,
      "searching": false,
      "ordering": false });

    // Adjust content if user want to see specific level
    if (typeof lvl !== 'undefined') {
      $(".lvl1").hide();
      var nextLevelInfo = '<h3>Next level</h3><strong>Hit points:</strong> 1d10 or 6 hp<br><strong>Proficiency modifier:</strong> ';
      
      var prof = parseInt(classTable.cell(lvl, 1).data());
      var previousProf = parseInt(classTable.cell(lvl-1, 1).data());
      if (prof == previousProf) {
        nextLevelInfo += 'No change';
      } else { 
        nextLevelInfo += '+1';
      }
      
      var features = classTable.cell(lvl, 2).data();
      $("#nextLevel").html(nextLevelInfo + '<br><strong>New features:</strong> ' + features )
      $(".nextLevel").show();
      
      for (var i = 20; i > lvl-1; i--) { 
       classTable.rows(i).remove();
      }
      classTable.draw()
    }
    
    // For showing&hiding relevant features
    $(".btn-show").click(function(){
      $(".features").collapse('show');
    });
    $(".btn-hide").click(function(){
      $(".features").collapse('hide');
    });
    
    $(".order-show").click(function(){
      $(".orderFeatures").collapse('show');
    });
    $(".order-hide").click(function(){
      $(".orderFeatures").collapse('hide');
    });
    
    // Selecting archetypes to view
    $("#archetypeSelection").change(function(){          
      var value = $("#archetypeSelection option:selected").val();
      var archetype = $("#" + value);
      $(".archetype").addClass("hidden");
      archetype.removeClass("hidden");
    });    

    // Spell tooltip
    $('#calmEmotions').tooltip({title: "<h4 class='tooltip-header'>Calm Emotions</h4><br><em>2nd-level enchantment</em><br><strong>Casting time:</strong> Action<br><strong>Range:</strong> 60ft<br><strong>Components:</strong> V, S<br><strong>Duration:</strong> Concentration, up to 1 minute<br><p>You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects.</p><p>You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.</p><p>Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.", html: true, placement: "auto"}); 
    
    });
