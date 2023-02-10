(() => {
  // the principle of single liability does NOT apply
  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

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
