import { DeleteInstanceGroupRequestBody } from './DeleteInstanceGroupRequestBody';


export class DeleteInstanceGroupRequest {
    public body?: DeleteInstanceGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteInstanceGroupRequestBody): DeleteInstanceGroupRequest {
        this['body'] = body;
        return this;
    }
}