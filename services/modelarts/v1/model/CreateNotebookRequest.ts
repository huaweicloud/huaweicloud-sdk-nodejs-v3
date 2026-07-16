import { NotebookCreateRequest } from './NotebookCreateRequest';


export class CreateNotebookRequest {
    public body?: NotebookCreateRequest;
    public constructor() { 
    }
    public withBody(body: NotebookCreateRequest): CreateNotebookRequest {
        this['body'] = body;
        return this;
    }
}