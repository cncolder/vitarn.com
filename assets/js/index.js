/*!
 * ViTarn website (http://vitarn.com)
 */

(function($) {
  'use strict'; // Start of use strict

  // jQuery for QR code - requires jQuery QR Code plugin
  $('div.qrcode').each(function() {
    $(this).qrcode({
      width: 86,
      height: 86,
      foreground: '#f05f40',
      text: $(this).data('qrtext'),
    });
  });

})(jQuery); // End of use strict
