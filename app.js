function initialize(){
    var html=document.getElementById("html");
    var css=document.getElementById("css");
    var js=document.getElementById("js");
    var Code=document.getElementById("code").contentWindow.document;
    document.body.onkeyup=function(){
      Code.open();
      Code.writeln(
          html.value +

        "<style>" + css.value + "</style>"+


           "<script>"+js.value + "</script>" 
        );
      Code.close();

    }
}
initialize();