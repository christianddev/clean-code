(() => {
  // Example
  // files to evaluate
  interface File {
    id: number;
    toDelete: boolean;
  }
  const filesEvaluated: File[] = [
    { id: 1, toDelete: false },
    { id: 2, toDelete: false },
    { id: 3, toDelete: true },
    { id: 4, toDelete: false },
    { id: 5, toDelete: false },
    { id: 7, toDelete: true },
  ];

  // Files to delete
  const files = filesEvaluated.map((file: File) => file.toDelete);

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Task

  // Today
  const currentDate = new Date();

  // Elapsed time in days
  const elapsedDays: number = 23;

  // Number of files in directory
  const numberOfFiles = 33;

  // First name
  const firstName = "Fernando";

  // Last name
  const lastName = "Herrera";

  // Days since modification
  const daysSinceModification = 12;

  // Max classes per student
  const maxClassesPerStudent = 6;
})();
