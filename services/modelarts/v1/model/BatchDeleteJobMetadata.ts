

export class BatchDeleteJobMetadata {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): BatchDeleteJobMetadata {
        this['id'] = id;
        return this;
    }
}