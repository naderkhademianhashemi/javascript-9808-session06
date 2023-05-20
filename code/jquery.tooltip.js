$.fn.tooltip = function(options){
    let setting = {
        move: true,
        marginX: 10,
        marginY: 10,
        title: 'data-title'
    }
    //Object.assign({}, setting, options)
    options = {
        ...setting,
        ...options
    }


    
   this.hover(
        e => {
          let $elem = $(e.target);
          $('<div/>')
            .addClass('tool-tip')
            .text($elem.attr(options.title))
            .hide()
            .fadeIn()
            .css({ top: e.pageY + options.marginY, left: e.pageX + options.marginX })
            .appendTo('body');
        },
        e => {
          $('.tool-tip').fadeOut(e => {
            $('.tool-tip').remove();
          });
        }
      ).mousemove(function (e) {
          if(options.move){
              $('.tool-tip').css({ top: e.pageY + options.marginY, left: e.pageX + options.marginX});              
          }
        })
}