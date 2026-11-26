import { CreateWorkloadAccessTokenRequestBody } from './CreateWorkloadAccessTokenRequestBody';


export class CreateWorkloadAccessTokenRequest {
    public body?: CreateWorkloadAccessTokenRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateWorkloadAccessTokenRequestBody): CreateWorkloadAccessTokenRequest {
        this['body'] = body;
        return this;
    }
}