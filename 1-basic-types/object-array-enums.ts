enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  job: [number, string];
  role: Role;
} = {
  name: "adrisa",
  age: 30,
  hobbies: ["Code"],
  job: [2, "Admin"],
  role: Role.ADMIN,
};

console.log(person.name);
