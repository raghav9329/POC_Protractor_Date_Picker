describe("printing the webtable on console",function () {
    it("print webtable",function () {
      //  browser.ignoreSynchronization=true;
        browser.get("https://material.angular.io/components/table/overview");
    element.all(by.xpath("//table-basic-example[@class='ng-star-inserted']//div[@class='example-container mat-elevation-z8']")).getText().then(function(rows) {
    var noofItems=rows.length;
    for(var i=0;i<noofItems;i++){
     var table=element(by.xpath("//html//div[@material-docs-example='table-basic']"));
     table.getText().then(function (text) {
         console.log(text);
     });
    }
    });
    });
});