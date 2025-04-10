<template>
  Home view
<!--
  <form @submit.prevent="">
    <div class="container">
      <h1 class="RegisterPage">Register Page</h1>
      <div class="field name">
        <label for="name" class="lab labName">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          required
          class="inp inpName"
          autocomplete="name"
        />
      </div>
      <div class="field email">
        <label for="email" class="lab labEmail">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          required
          class="inp inpEmail"
          autocomplete="email"
        />
      </div>
      <div class="field password">
        <label for="password" class="lab labPassword">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Your Password"
          required
          class="inp inpPassword"
          autocomplete="newPassword"
        />
      </div>
      <div class="field confirmPassword">
        <label for="confirmPassword" class="lab labConfirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm Your Password"
          required
          class="inp inpConfirmPassword"
          autocomplete="newPassword"
        />
      </div>
      <div class="divider"></div>
      <div class="submit">
        <button type="submit">Register</button>
      </div>
    </div>
  </form> -->
</template>

<script></script>

<style scoped>
body {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
}
form .container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 384px;
  margin: 0 auto;
  background-color: #ccc;
  border-radius: 4px;
}

form .container .RegisterPage {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  font-family: cursive;
  margin: 0px;
  margin-top: 0.5rem;
}

form .container .field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}
form .container .field .lab {
  font-family: cursive;
}
form .container .field .inp {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  font-family: cursive;
}

form .container .submit {
  text-align: center;
}
form .container .submit button {
  padding: 0.75rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;
  font-family: cursive;
}

.divider {
  border-top: 1px solid #ccc;
  margin: 0.5rem 0;
}

.required::after {
  content: '*';
  color: red;
  margin-left: 4px;
}
</style>
