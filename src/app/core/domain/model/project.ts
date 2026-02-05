import { Campus } from './campus';
import { Student } from './student';
import { Technology } from './technology';

//TODO: add team object to this structure in the next refactor
export class Project {
  public Team: string = '';
  public Name: string = '';
  public Description: string = '';
  public Campus: Campus | null = null;
  public Likes: number = 0;
  private _technologies: Set<Technology> = new Set();
  private _members: Set<Student> = new Set();

  public get Technologies() {
    return Object.seal(this._technologies);
  }

  public get Members() {
    return Object.seal(this._members);
  }

  public get SemesterRange() {
    const members = Array.from(this._members.values());
    if (members.length == 0) return { lowest: 1, highest: 1 };
    let lowest = members[0].Semester;
    let highest = members[0].Semester;
    this._members.forEach(({ Semester }) => {
      lowest = Semester < lowest ? Semester : lowest;
      highest = Semester > highest ? Semester : highest;
    });
    return { lowest, highest };
  }

  public AddMember(member: Student) {
    this._members.add(member);
  }

  public AddTechnology(technology: Technology) {
    this._technologies.add(technology);
  }

  public RemoveTechonogly(technology: Technology) {
    this._technologies.delete(technology);
  }

  public RemoveMember(member: Student) {
    this._members.delete(member);
  }
}
