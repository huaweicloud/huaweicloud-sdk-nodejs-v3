import { CreateClouddcnSubnetRequestBody } from './CreateClouddcnSubnetRequestBody';


export class CreateClouddcnSubnetRequest {
    public body?: CreateClouddcnSubnetRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateClouddcnSubnetRequestBody): CreateClouddcnSubnetRequest {
        this['body'] = body;
        return this;
    }
}