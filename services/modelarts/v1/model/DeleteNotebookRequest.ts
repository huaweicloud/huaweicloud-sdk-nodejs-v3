

export class DeleteNotebookRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteNotebookRequest {
        this['id'] = id;
        return this;
    }
}