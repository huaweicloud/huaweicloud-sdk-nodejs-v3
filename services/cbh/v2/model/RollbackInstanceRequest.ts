import { RollbackInstanceRequestBody } from './RollbackInstanceRequestBody';


export class RollbackInstanceRequest {
    public body?: RollbackInstanceRequestBody;
    public constructor() { 
    }
    public withBody(body: RollbackInstanceRequestBody): RollbackInstanceRequest {
        this['body'] = body;
        return this;
    }
}