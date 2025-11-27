import { GroupRmsResourceRelationCreateRequest } from './GroupRmsResourceRelationCreateRequest';


export class CreateGroupRmsResourceRelationRequest {
    public body?: GroupRmsResourceRelationCreateRequest;
    public constructor() { 
    }
    public withBody(body: GroupRmsResourceRelationCreateRequest): CreateGroupRmsResourceRelationRequest {
        this['body'] = body;
        return this;
    }
}