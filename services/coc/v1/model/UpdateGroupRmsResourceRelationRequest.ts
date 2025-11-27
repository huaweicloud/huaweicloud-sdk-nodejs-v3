import { GroupRmsResourceRelationUpdateRequest } from './GroupRmsResourceRelationUpdateRequest';


export class UpdateGroupRmsResourceRelationRequest {
    public body?: GroupRmsResourceRelationUpdateRequest;
    public constructor() { 
    }
    public withBody(body: GroupRmsResourceRelationUpdateRequest): UpdateGroupRmsResourceRelationRequest {
        this['body'] = body;
        return this;
    }
}