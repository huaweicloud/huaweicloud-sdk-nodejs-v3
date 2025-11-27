import { UpdateInstanceGroupRequestBody } from './UpdateInstanceGroupRequestBody';


export class UpdateInstanceGroupRequest {
    public body?: UpdateInstanceGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateInstanceGroupRequestBody): UpdateInstanceGroupRequest {
        this['body'] = body;
        return this;
    }
}