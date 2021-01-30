import { UpdateProjectStatusRequestBody } from './UpdateProjectStatusRequestBody';


export class UpdateProjectStatusRequest {
    public body?: UpdateProjectStatusRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateProjectStatusRequestBody): UpdateProjectStatusRequest {
        this['body'] = body;
        return this;
    }
}