import { RolePermissionsRequestBody } from './RolePermissionsRequestBody';


export class BatchUpdateJobRolePermissionRequest {
    public body?: RolePermissionsRequestBody;
    public constructor() { 
    }
    public withBody(body: RolePermissionsRequestBody): BatchUpdateJobRolePermissionRequest {
        this['body'] = body;
        return this;
    }
}