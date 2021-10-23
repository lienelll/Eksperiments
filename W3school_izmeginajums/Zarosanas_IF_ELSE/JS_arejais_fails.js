function compare() {
    var a = document.getElementById("a_skaitlis").value;
    var b = document.getElementById("b_skaitlis").value;
    
    var conclusion = "";

    if(a>b) {
        conclusion = a ("+ a +") ir lielāks nekā b ("+ b +");
        else if (b<a){
            conclusion = b ("+ a +") ir lielāks nekā a ("+ b +");
        }
        else (a=b) {
            conclusion = a ("+ a +") ir vienāds b ("+ b +");
        }
        document.getElementById("demo").innerHTML=conclusion;
    }
    function compare_tree() {
        var a = document.getElementById(a_skaitlis).value;
        var b = document.getElementById(b_skaitlis).value;
        var c = document.getElementById(c_skaitlis).value;
        var conclusion = "...";
        var temp;
        /*...*/
        const array = [a, b, c];
        array.sort();
        /*
        if (a>b) {temp = a; a=b; b=temp;}
        if (b>a) {temp = b; b=a; a=temp;}
        if (a>b) {temp = a; a=b; b=temp;}
        */
        // document.getElementById ("demo").innerHTML = a + " " + b + " " + c;
        document.getElementById("demo").innerHTML = array[0] + " " +array[1]+ " "+array[2];
    }
}