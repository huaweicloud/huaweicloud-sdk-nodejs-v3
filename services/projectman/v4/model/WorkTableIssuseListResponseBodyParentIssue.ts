

export class WorkTableIssuseListResponseBodyParentIssue {
    public id?: number;
    public subject?: string;
    public constructor() { 
    }
    public withId(id: number): WorkTableIssuseListResponseBodyParentIssue {
        this['id'] = id;
        return this;
    }
    public withSubject(subject: string): WorkTableIssuseListResponseBodyParentIssue {
        this['subject'] = subject;
        return this;
    }
}