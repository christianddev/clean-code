(() => {
  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }
  // const peron = new Person("Lola", "M", new Date("01/01/1990"));
  // console.log("peron", peron);

  class User extends Person {
    private lastAccess: Date;
    constructor(
      public emaiL: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredential() {
      return true;
    }
  }

  // const user = new User("email", "ABC", "Lola", "M", new Date("01/01/1990"));
  // console.log("peron", peron);

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      emaiL: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(emaiL, role, name, gender, birthdate);
    }
  }
  const userSettings = new UserSettings(
    "/A",
    "/B",
    "email",
    "ABC",
    "Lola",
    "M",
    new Date("01/01/1990")
  );
  console.log("peron", userSettings);
})();
