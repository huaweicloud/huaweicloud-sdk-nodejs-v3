import { UpdateResourceOwner } from './UpdateResourceOwner';


export class UpdateGroupOrResourceOwnerRequest {
    public body?: UpdateResourceOwner;
    public constructor() { 
    }
    public withBody(body: UpdateResourceOwner): UpdateGroupOrResourceOwnerRequest {
        this['body'] = body;
        return this;
    }
}