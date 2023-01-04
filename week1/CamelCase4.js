function processData(input) {

  let output = [];

  input = input.split("\n").filter((s) => s);

  input.forEach((inp) => {

    // Actual Code................................................................

    let ops = inp.split(";");
    let [operation, type, string] = ops;
    let final = "";
    switch (operation) {
      case "S":
        final = string
          .replace(/[^a-zA-Z ]/g, "")
          .split(/(?=[A-Z])/)
          .map((s) => s.toLowerCase())
          .join(" ");

        break;
      case "C":
        {
          let words = string.split(" ");
          for (let i = 0; i < words.length; i++) {
            if (type === "C" || (i !== 0 && (type === "V" || type === "M"))) {
              words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
          }
          final = words.join("").trim();
          if (type === "M") {
            final = `${final}()`;
          }
        }
        break;
      default: {
      }
    }
    output.push(final);
  });

  //// End of Logic

  console.log(output.join("\n"));
}
