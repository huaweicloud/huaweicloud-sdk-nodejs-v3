import { PromInstanceEpsModel } from './PromInstanceEpsModel';


export class CreatePromInstanceRequest {
    public body?: PromInstanceEpsModel;
    public constructor() { 
    }
    public withBody(body: PromInstanceEpsModel): CreatePromInstanceRequest {
        this['body'] = body;
        return this;
    }
}