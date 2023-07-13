

export class SourceServerByTask {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): SourceServerByTask {
        this['id'] = id;
        return this;
    }
}