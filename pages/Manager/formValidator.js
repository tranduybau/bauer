const formValidator = {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        passwordType: 'password',
      },
      loginRules: {
        username: [
          {
            required: true,
            message: "Uername can't be empty",
            trigger: 'change',
          },
          {
            min: 6,
            message:
              'Your username must be at least 6 characters long. Please try another.',
            trigger: 'change',
          },
        ],
        password: [
          {
            required: true,
            message: "Password can't be empty",
            trigger: 'change',
          },
          {
            min: 6,
            message:
              'Your username must be at least 6 characters long. Please try another.',
            trigger: 'change',
          },
        ],
      },
    }
  },
}

export default formValidator
