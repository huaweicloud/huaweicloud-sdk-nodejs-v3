import { DeleteIds } from './DeleteIds';


export class DeleteServersRequest {
    public body?: DeleteIds;
    public constructor() { 
    }
    public withBody(body: DeleteIds): DeleteServersRequest {
        this['body'] = body;
        return this;
    }
}