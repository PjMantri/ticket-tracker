

export class User {
  name: string;
  email: string;
  type: string;

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.email = obj && obj.email || null;
    this.type = obj && obj.type || null;
  }
}
