(() => {
  // Applying the principle of single responsibility
  // prioritising composition vs. inheritance
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

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredential() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;
    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  interface UserSettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
    email: string;
    role: string;
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class UserSettings {
    public person: Person;
    public settings: Settings;
    public user: User;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ birthdate, gender, name });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
      this.user = new User({ email, role });
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
