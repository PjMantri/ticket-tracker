

export class User {
  id: number;
  name: string;
  email: string;
  type: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.email = obj && obj.email || null;
    this.type = obj && obj.type || null;
  }
}
