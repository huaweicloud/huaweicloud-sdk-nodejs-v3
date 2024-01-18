import { PromInstanceRequestModel } from './PromInstanceRequestModel';


export class CreatePromInstanceRequest {
    public body?: PromInstanceRequestModel;
    public constructor() { 
    }
    public withBody(body: PromInstanceRequestModel): CreatePromInstanceRequest {
        this['body'] = body;
        return this;
    }
}