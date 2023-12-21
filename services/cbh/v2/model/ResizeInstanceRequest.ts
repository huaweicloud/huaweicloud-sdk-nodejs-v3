import { ChangeInstanceRequestBody } from './ChangeInstanceRequestBody';


export class ResizeInstanceRequest {
    public body?: ChangeInstanceRequestBody;
    public constructor() { 
    }
    public withBody(body: ChangeInstanceRequestBody): ResizeInstanceRequest {
        this['body'] = body;
        return this;
    }
}