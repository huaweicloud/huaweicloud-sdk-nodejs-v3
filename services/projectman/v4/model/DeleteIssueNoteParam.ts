

export class DeleteIssueNoteParam {
    public id?: number;
    public projectId?: string;
    public type?: string;
    public constructor(id?: number, projectId?: string) { 
        this['id'] = id;
        this['projectId'] = projectId;
    }
    public withId(id: number): DeleteIssueNoteParam {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): DeleteIssueNoteParam {
        this['projectId'] = projectId;
        return this;
    }
    public withType(type: string): DeleteIssueNoteParam {
        this['type'] = type;
        return this;
    }
}