document
  .getElementById("validationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const password = document.getElementById("psw").value;
    const dob = document.getElementById("dob").value;
    const passwordError = document.getElementById("passwordError");
    const dobError = document.getElementById("dobError");
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous error messages
    passwordError.textContent = "";
    dobError.textContent = "";

    // Password validation
    const passwordRegex =
      /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=])(?=.*[A-Z])(?=.*\d).+$/;
    const isPasswordValid = passwordRegex.test(password);
    // Date of Birth validation
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const ageDiff = currentDate.getFullYear() - dobDate.getFullYear();

    // Clear previous error messages and styles
    document.getElementById("passwordError").textContent = "";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("dobError").textContent = "";
    document.getElementById("dobError").style.display = "none";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("confirmPasswordError").style.display = "none";
    const isPasswordMatch = password === confirmPassword;

    // Display validation results as error messages with styles
    if (!isPasswordValid) {
      const passwordErrorSpan = document.getElementById("passwordError");
      passwordErrorSpan.textContent = "Password does not meet the criteria.";
      passwordErrorSpan.style.display = "block";
    }

    if (
      !(
        ageDiff > 18 ||
        (ageDiff === 18 &&
          currentDate.getMonth() >= dobDate.getMonth() &&
          currentDate.getDate() >= dobDate.getDate())
      )
    ) {
      const dobErrorSpan = document.getElementById("dobError");
      dobErrorSpan.textContent = "You are  not over 18.Only over 18 allowed";
      dobErrorSpan.style.display = "block";
    }

    if (!isPasswordMatch) {
      const confirmPasswordErrorSpan = document.getElementById(
        "confirmPasswordError"
      );
      confirmPasswordErrorSpan.textContent = "Passwords do not match.";
      confirmPasswordErrorSpan.style.display = "block";
    }

    if (
      isPasswordValid &&
      isPasswordMatch &&
      (ageDiff > 18 ||
        (ageDiff === 18 &&
          currentDate.getMonth() >= dobDate.getMonth() &&
          currentDate.getDate() >= dobDate.getDate()))
    ) {
      alert("Your account has been created Succesfully!.");
    }
  });
