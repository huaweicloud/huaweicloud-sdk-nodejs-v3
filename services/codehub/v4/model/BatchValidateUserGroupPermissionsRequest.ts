import { GroupPermissionsDto } from './GroupPermissionsDto';


export class BatchValidateUserGroupPermissionsRequest {
    public body?: Array<GroupPermissionsDto>;
    public constructor() { 
    }
    public withBody(body: Array<GroupPermissionsDto>): BatchValidateUserGroupPermissionsRequest {
        this['body'] = body;
        return this;
    }
}