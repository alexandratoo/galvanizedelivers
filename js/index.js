(function($) {
  $(function() {
    // $('.button-collapse').sideNav();
    let allPrices = 0;
    function subTotal() {
      let itemSub = Number($(event.target).parent('p').siblings('span').children('h6:last-child').text().replace(/[^0-9\.]+/g, ""));
      var dollars = allPrices += itemSub;
      return dollars;
    }
    $(this).on('click', '.clicky', function() {
      let tr = $('<tr></tr>');
      $('tbody').append(tr);
      let td = $('<td></td>');
      let td2 = $('<td></td>');
      let td3 = $('<td></td>');
      tr.append(td, td2);
      let itemValue = $(event.target).parent('p').siblings('span').children('h6:first-child').text();
      let itemPrice = $(event.target).parent('p').siblings('span').children('h6:last-child').text();
      let itemQuantity = $(event.target).parent('p').text();
      $(td).append(itemValue);
      $(td2).append(itemPrice);
      $(td3).append(itemQuantity);
      $('.subtotal').text('$' + subTotal().toFixed(2));

      let tax = $('.tax').text('$' + ($('.subtotal').text().slice(1) * 0.08995).toFixed(2));
      $('.total').text('$' + (+$('.subtotal').text().slice(1) + +(tax.text().slice(1))).toFixed(2));

    })
  }); // end of document ready
})(jQuery); // end of jQuery name space

  //
  //       $('#salmon').click(function(){
  //         console.log('salmon clicks');
  //         var inputVal = 'Alaskan King Salmon';
  //         var inputPrice = '$19.99';
  //         console.log(inputVal);
  //         console.log($('tr'));
  //         $('tbody')[0].append(inputVal);
  //         $('tr')[1].append(inputPrice);
  //       })
  //       $('#scallops').click(function(){
  //         console.log('scallops clicks');
  //         var inputVal = 'Scallops';
  //         var inputPrice = '16.99';
  //         console.log(inputVal);
  //         console.log($('tr'));
  //         $('tbody')[1].append(inputVal);
  //         $('tr')[1].append(inputPrice);
  //       })
  //       $('#mixed').click(function(){
  //         console.log('mixed clicks');
  //         var inputVal = 'Mixed Seafood';
  //         var inputPrice = '18.99';
  //         console.log(inputVal);
  //         console.log($('tr'));
  //         $('tbody')[1].append(inputVal);
  //         $('tr')[1].append(inputPrice);
  //       })
  //       $('#sri').click(function(){
  //         console.log('pie clicks');
  //         var inputVal = 'Sriracha Lollipop';
  //         var inputPrice = '4.99';
  //         console.log(inputVal);
  //         console.log($('tr'));
  //         $('tbody')[1].append(inputVal);
  //         $('tr')[1].append(inputPrice);
  //       })
 // end of document ready
// })(jQuery); // end of jQuery name space
