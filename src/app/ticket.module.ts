

import { User } from "./user.module";

export class Ticket {
    status: string;
    area: string;
    description: string;
    customer: User;
    createdBy: User;
    assignedTo: User;

    constructor(status: string, area: string, description: string,
        customer: User, createdBy: User, assignedTo: User) {
        this.status = status;
        this.area = area;
        this.description = description;
        this.customer = customer;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
    }
}
