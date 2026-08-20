

export class BatchCreateSnapshotRequestIssues {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): BatchCreateSnapshotRequestIssues {
        this['id'] = id;
        return this;
    }
}