import { AddInstanceGroupRequestBody } from './AddInstanceGroupRequestBody';


export class AddInstanceGroupRequest {
    public body?: AddInstanceGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: AddInstanceGroupRequestBody): AddInstanceGroupRequest {
        this['body'] = body;
        return this;
    }
}