export default function PersonList({ people = [] }) {
  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>{person.firstName}</li>
      ))}
    </ul>
  );
}
