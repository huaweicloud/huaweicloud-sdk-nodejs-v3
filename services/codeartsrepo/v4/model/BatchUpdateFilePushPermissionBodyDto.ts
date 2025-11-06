import { FilePushPermissionUpdateDto } from './FilePushPermissionUpdateDto';


export class BatchUpdateFilePushPermissionBodyDto {
    public permissions?: Array<FilePushPermissionUpdateDto>;
    public constructor() { 
    }
    public withPermissions(permissions: Array<FilePushPermissionUpdateDto>): BatchUpdateFilePushPermissionBodyDto {
        this['permissions'] = permissions;
        return this;
    }
}