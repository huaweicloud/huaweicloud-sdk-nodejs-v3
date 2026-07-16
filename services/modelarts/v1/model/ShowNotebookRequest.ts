

export class ShowNotebookRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowNotebookRequest {
        this['id'] = id;
        return this;
    }
}