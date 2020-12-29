function subwalamit(e) {
  e.preventDefault();
  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: "toast-top-full-width",
    preventDuplicates: false,
    showDuration: "90000",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  console.log("yeah called");
  console.log(e.target.email);

  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
  };

  axios
    .post("http://toxicmodelmgmt.com:5002/mentoriademodelos", data)
    .then((result) => {
      console.log("data has been submitted succesfully", result);
      document.getElementById("myModal").style.background = "transparent";
      toastr["info"]("Você foi inscrito com sucesso");
    })
    .catch((err) => console.log(err));
}

async function emailFetcher() {
  let pass = window.prompt("Enter the secret key");
  if (pass !== "bruno2020") {
    return location.reload();
  }

  const result = await axios.get(
    "https://strapi.toxicmodelmgmt.com/mentoriademodelos"
  );
  console.log(result);
  const target = document.getElementById("result");

  const dataToPush = result.data.map((item) => {
    return `<br>${item.email}`;
  });
  target.innerHTML = dataToPush;
}
