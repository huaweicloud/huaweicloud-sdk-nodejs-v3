import { CreateWorkloadAccessTokenForJwtRequestBody } from './CreateWorkloadAccessTokenForJwtRequestBody';


export class CreateWorkloadAccessTokenForJwtRequest {
    public body?: CreateWorkloadAccessTokenForJwtRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateWorkloadAccessTokenForJwtRequestBody): CreateWorkloadAccessTokenForJwtRequest {
        this['body'] = body;
        return this;
    }
}