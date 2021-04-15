import { DeleteServersRequestBody } from './DeleteServersRequestBody';


export class DeleteServersRequest {
    public body?: DeleteServersRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteServersRequestBody): DeleteServersRequest {
        this['body'] = body;
        return this;
    }
}