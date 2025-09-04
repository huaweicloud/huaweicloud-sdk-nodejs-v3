import { ProjectPermissionRequestBody } from './ProjectPermissionRequestBody';


export class ApplyProjectPermissionRequest {
    public body?: ProjectPermissionRequestBody;
    public constructor() { 
    }
    public withBody(body: ProjectPermissionRequestBody): ApplyProjectPermissionRequest {
        this['body'] = body;
        return this;
    }
}