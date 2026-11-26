import { CreateWorkloadAccessTokenForUserIdRequestBody } from './CreateWorkloadAccessTokenForUserIdRequestBody';


export class CreateWorkloadAccessTokenForUserIdRequest {
    public body?: CreateWorkloadAccessTokenForUserIdRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateWorkloadAccessTokenForUserIdRequestBody): CreateWorkloadAccessTokenForUserIdRequest {
        this['body'] = body;
        return this;
    }
}