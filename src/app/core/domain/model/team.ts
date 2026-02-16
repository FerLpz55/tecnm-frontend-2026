import { Campus } from './campus';
import { Student } from './student';

export class Team {
  Name: string | null = null;
  Campus: Campus | null = null;
  Extension: string | null = null;


  private readonly _members = new Set<Student>();
  public get Members() {
    return Object.seal(this._members);
  }

  AddMember(member: Student) {
    this._members.add(member);
  }

  RemoveMember(member: Student) {
    this._members.delete(member);
  }
}
