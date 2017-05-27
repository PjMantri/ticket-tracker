

import { User } from "app/user/user.module";

export class Ticket {
    status: string;
    area: string;
    description: string;
    customer: User;
    createdBy: User;
    assignedTo: User;

    constructor(obj?: any) {
        this.status = obj && obj.status || null;
        this.area = obj && obj.area || null;
        this.description = obj && obj.description || null;
        this.customer = obj && obj.customer || null;
        this.createdBy = obj && obj.createdBy || null;
        this.assignedTo = obj && obj.assignedTo || null;
    }
}
