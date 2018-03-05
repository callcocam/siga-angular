 
  $.widget.bridge('uibutton', $.ui.button);

  //receive calls from typescript code to update the layouts
  var AdminLTE = (function() {
    return {
      init: function() {
        $(function(){
          $.AdminLTE.layout.activate();
          $.AdminLTE.layout.fix();
          $.AdminLTE.layout.fixSidebar();
          //iCheck for checkbox and radio inputs
          $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass   : 'iradio_minimal-blue'
          })
          //Red color scheme for iCheck
          $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
            checkboxClass: 'icheckbox_minimal-red',
            radioClass   : 'iradio_minimal-red'
          })
          //Flat red color scheme for iCheck
          $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass   : 'iradio_flat-green'
          })
        });
      }
    }
  })(AdminLTE||{});
  $(function(){
    // AdminLTE.init();
  })
  