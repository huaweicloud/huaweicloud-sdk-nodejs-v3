import { NotebookUpdateRequest } from './NotebookUpdateRequest';


export class UpdateNotebookRequest {
    public id?: string;
    public body?: NotebookUpdateRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateNotebookRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: NotebookUpdateRequest): UpdateNotebookRequest {
        this['body'] = body;
        return this;
    }
}