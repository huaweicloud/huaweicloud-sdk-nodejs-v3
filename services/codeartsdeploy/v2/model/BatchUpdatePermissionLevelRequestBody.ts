

export class BatchUpdatePermissionLevelRequestBody {
    private 'project_id'?: string;
    private 'permission_level'?: BatchUpdatePermissionLevelRequestBodyPermissionLevelEnum | string;
    private 'application_ids'?: Array<string>;
    public constructor(projectId?: string, permissionLevel?: string, applicationIds?: Array<string>) { 
        this['project_id'] = projectId;
        this['permission_level'] = permissionLevel;
        this['application_ids'] = applicationIds;
    }
    public withProjectId(projectId: string): BatchUpdatePermissionLevelRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPermissionLevel(permissionLevel: BatchUpdatePermissionLevelRequestBodyPermissionLevelEnum | string): BatchUpdatePermissionLevelRequestBody {
        this['permission_level'] = permissionLevel;
        return this;
    }
    public set permissionLevel(permissionLevel: BatchUpdatePermissionLevelRequestBodyPermissionLevelEnum | string  | undefined) {
        this['permission_level'] = permissionLevel;
    }
    public get permissionLevel(): BatchUpdatePermissionLevelRequestBodyPermissionLevelEnum | string | undefined {
        return this['permission_level'];
    }
    public withApplicationIds(applicationIds: Array<string>): BatchUpdatePermissionLevelRequestBody {
        this['application_ids'] = applicationIds;
        return this;
    }
    public set applicationIds(applicationIds: Array<string>  | undefined) {
        this['application_ids'] = applicationIds;
    }
    public get applicationIds(): Array<string> | undefined {
        return this['application_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdatePermissionLevelRequestBodyPermissionLevelEnum {
    PROJECT = 'project',
    INSTANCE = 'instance'
}
