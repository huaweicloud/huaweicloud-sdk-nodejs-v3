import { AddInstanceToGroupRequestBody } from './AddInstanceToGroupRequestBody';


export class AddInstanceToGroupRequest {
    public body?: AddInstanceToGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: AddInstanceToGroupRequestBody): AddInstanceToGroupRequest {
        this['body'] = body;
        return this;
    }
}