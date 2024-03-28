import { UpdateJobResourceOwnerRequestBody } from './UpdateJobResourceOwnerRequestBody';


export class UpdateJobResourceOwnerRequest {
    public body?: UpdateJobResourceOwnerRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateJobResourceOwnerRequestBody): UpdateJobResourceOwnerRequest {
        this['body'] = body;
        return this;
    }
}