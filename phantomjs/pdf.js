var page = new WebPage();

page.paperSize = {
    format        : "A4",
    orientation    : "portrait",
    margin        : { left:"1cm", right:"1cm", top:"1cm", bottom:"1cm" }
};

page.open("http://fluxecranpapier.sarahgarcin.com/page/google/youtube/index.html", function (status) {
    page.render("test.pdf");
    phantom.exit();
});