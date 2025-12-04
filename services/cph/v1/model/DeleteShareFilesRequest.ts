import { DeleteShareFilesRequestBody } from './DeleteShareFilesRequestBody';


export class DeleteShareFilesRequest {
    public body?: DeleteShareFilesRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteShareFilesRequestBody): DeleteShareFilesRequest {
        this['body'] = body;
        return this;
    }
}