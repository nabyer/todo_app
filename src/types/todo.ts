export class ToDo {
    id: number;
    toDo: string;
    deadLine: Date;
    assignee: string;
    owner: string;
    status: "not started" | "in progress" | "ready for review" | "in review" | "done";

    constructor(id: number, toDo: string, deadLine: Date, assignee: string, owner: string, status: "not started" | "in progress" | "ready for review" | "in review" | "done") { 
        this.id = id
        this.toDo = toDo
        this.deadLine = deadLine
        this.assignee = assignee
        this.owner = owner
        this.status = status
    }
}