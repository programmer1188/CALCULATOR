function add_number() {

    var first_number = parseInt(document.getElementById("O1").value);
    var second_number = parseInt(document.getElementById("O2").value);
    var result = first_number + second_number;

    document.getElementById("Result").value = result;
}