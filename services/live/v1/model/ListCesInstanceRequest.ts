import { ListCesInstanceRequestBody } from './ListCesInstanceRequestBody';


export class ListCesInstanceRequest {
    public body?: ListCesInstanceRequestBody;
    public constructor() { 
    }
    public withBody(body: ListCesInstanceRequestBody): ListCesInstanceRequest {
        this['body'] = body;
        return this;
    }
}