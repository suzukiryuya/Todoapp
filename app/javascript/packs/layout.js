// ナビゲーションを閉じる処理
<script>
$(document).ready(function () {
 $(".navbar-nav li a").click(function(event) {
 $(".navbar-collapse").collapse('hide');
 });
});
</script>
