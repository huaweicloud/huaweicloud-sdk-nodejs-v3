

export class StopNotebookRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): StopNotebookRequest {
        this['id'] = id;
        return this;
    }
}