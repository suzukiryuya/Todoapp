// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

// ナビゲーションを閉じる処理
<script>
$(document).ready(function () {
 $(".navbar-nav li a").click(function(event) {
 $(".navbar-collapse").collapse('hide');
 });
});
</script>
