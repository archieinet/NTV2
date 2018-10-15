({
    handleFilesChange : function (event) {
        var files = event.getSource().get("v.files");
        alert(files.length + ' files !!');
    }
})
