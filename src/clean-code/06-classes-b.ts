(() => {
  // the principle of single liability does NOT apply
  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ birthdate, gender, name }: PersonProps) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }

  class User extends Person {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ birthdate, email, gender, name, role }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredential() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;
    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }
  const userSettingsRaw: UserSettingsProps = {
    birthdate: new Date("01/01/1990"),
    email: "email@domain.com",
    gender: "M",
    lastOpenFolder: "/B",
    name: "Lola",
    role: "ABC",
    workingDirectory: "/A",
  };

  const userSettings = new UserSettings(userSettingsRaw);
  console.log("peron", userSettings);
})();
