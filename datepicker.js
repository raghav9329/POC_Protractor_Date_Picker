describe("pick date from page",function () {
    it("date pick functionality",function () {
        browser.get("https://material.angular.io/components/datepicker/overview");
        element(by.xpath("//div[@class='mat-input-suffix mat-form-field-suffix ng-tns-c21-2 ng-star-inserted']//mat-datepicker-toggle[@class='mat-datepicker-toggle']//button[@type='button']")).click();
        element(by.xpath("//button[@class='mat-calendar-period-button mat-button' and @aria-label='Choose month and year']")).click();
        // element.all(by.xpath("//tbody[@allowdisabledselection='true']")).getText().then(function (rows) {
        element(by.xpath("//td[contains(@aria-label,'2017')]")).click();
        element(by.xpath("//td[contains(@aria-label,'June 2017')]")).click();
        var cells = element.all(by.xpath("//td[contains(@role,'gridcell')]"));
        cells.getText().then(function (text) {

            console.log(text);
            for (var i = 0; i < text.length; i++) {
                // var date = cells[i];
                if ((parseInt(text[i]))===27){
                    element(by.xpath("//td[@aria-label='June 27, 2017']")).click();
                    //cells.get(i).click();
                    break;
                }
                //
            }
            browser.sleep(2000);
        });
    });
});

