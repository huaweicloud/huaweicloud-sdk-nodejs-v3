import { CreateSharedConnectionRequestBody } from './CreateSharedConnectionRequestBody';


export class CreateSharedConnectionRequest {
    public body?: CreateSharedConnectionRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSharedConnectionRequestBody): CreateSharedConnectionRequest {
        this['body'] = body;
        return this;
    }
}