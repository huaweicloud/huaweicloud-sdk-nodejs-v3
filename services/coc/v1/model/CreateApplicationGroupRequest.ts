import { GroupCreateRequest } from './GroupCreateRequest';


export class CreateApplicationGroupRequest {
    public body?: GroupCreateRequest;
    public constructor() { 
    }
    public withBody(body: GroupCreateRequest): CreateApplicationGroupRequest {
        this['body'] = body;
        return this;
    }
}