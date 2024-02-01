import { PromInstanceRequestModel } from './PromInstanceRequestModel';


export class CreatePromInstanceRequest {
    public region?: string;
    public body?: PromInstanceRequestModel;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): CreatePromInstanceRequest {
        this['region'] = region;
        return this;
    }
    public withBody(body: PromInstanceRequestModel): CreatePromInstanceRequest {
        this['body'] = body;
        return this;
    }
}