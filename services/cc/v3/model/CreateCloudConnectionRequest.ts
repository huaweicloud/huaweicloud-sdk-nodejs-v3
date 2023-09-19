import { CreateCloudConnectionRequestBody } from './CreateCloudConnectionRequestBody';


export class CreateCloudConnectionRequest {
    public body?: CreateCloudConnectionRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCloudConnectionRequestBody): CreateCloudConnectionRequest {
        this['body'] = body;
        return this;
    }
}