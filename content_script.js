chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // This line is new!
        var result = "";
        $("table.w3-table-all").each(function(index, element){
            var ele = $(element);
            ele.find("a").removeAttr("href");
            result += ele.prev().prop('outerHTML');
            result += ele.prop('outerHTML');
        });
        sendResponse({message: result});
    }
);