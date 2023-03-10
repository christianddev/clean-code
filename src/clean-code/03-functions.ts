(() => {
  // función para obtener información de una película por Id
  function getAllMovies(movieId: string) {
    console.log({ movieId });
  }

  function getMovieById(id: string) {
    console.log({ movieId: id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getAllMovieActors(id: string) {
    console.log({ id });
  }

  function getAllMovieActorsByMovieId(movieId: string) {
    console.log({ id: movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getUsuario(ActorId: string) {
    console.log({ ActorId });
  }

  function getActorById(id: string) {
    console.log({ actorId: id });
  }

  // Crear una película
  function movie(
    title: string,
    description: string,
    rating: number,
    cast: string[]
  ) {
    console.log({ title, description, rating, cast });
  }

  interface createMovieProps {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ cast, description, rating, title }: createMovieProps) {
    console.log({ cast, description, rating, title });
  }

  // Crea un nuevo actor
  function createActorIfActorNotExists(
    fullName: string,
    birthdate: Date
  ): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  function checkIfActorExists(fullName: string): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    return fullName === "fernando";
  }

  function createActor(fullName: string, birthDate: Date): boolean {
    // tarea asincrona para crear el actor
    // ..
    // ..

    console.log("Crear actor", fullName, birthDate);
    return true;
  }

  interface createUserRequestProps {
    birthDate: Date;
    fullName: string;
  }

  function processCreateUserRequest({
    fullName,
    birthDate,
  }: createUserRequestProps) {
    if (checkIfActorExists(fullName)) {
      return false;
    }
    return createActor(fullName, birthDate);
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    let result;
    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }
    return result;
  };

  interface getPayAmountV2Props {
    isDead: boolean;
    isSeparated: boolean;
    isRetired: boolean;
  }

  const getPayAmountV2 = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }: getPayAmountV2Props): number => {
    if (isDead) {
      return 1500;
    }

    if (isSeparated) {
      return 2500;
    }

    return isRetired ? 3000 : 4000;
  };
})();
