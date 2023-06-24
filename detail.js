var selector = $(".tab-button");
var content = $(".tab-content");
var count = $(".tab-button").length;

// for (let i = 0; i < count; i++) {
//     selector.eq(i).on("click", function () {
//         openTab(i);
//     });
// }

$(".list").on("click", function (e) {
    openTab(e.target.dataset.id);
});

function openTab(i) {
    selector.removeClass("orange");
    selector.eq(i).addClass("orange");
    content.removeClass("show");
    content.eq(i).addClass("show");
}
