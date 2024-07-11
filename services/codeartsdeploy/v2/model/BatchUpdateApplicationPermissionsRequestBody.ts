import { AppPermission } from './AppPermission';


export class BatchUpdateApplicationPermissionsRequestBody {
    private 'project_id'?: string;
    private 'application_ids'?: Array<string>;
    public roles?: Array<AppPermission>;
    public constructor(projectId?: string, applicationIds?: Array<string>, roles?: Array<AppPermission>) { 
        this['project_id'] = projectId;
        this['application_ids'] = applicationIds;
        this['roles'] = roles;
    }
    public withProjectId(projectId: string): BatchUpdateApplicationPermissionsRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withApplicationIds(applicationIds: Array<string>): BatchUpdateApplicationPermissionsRequestBody {
        this['application_ids'] = applicationIds;
        return this;
    }
    public set applicationIds(applicationIds: Array<string>  | undefined) {
        this['application_ids'] = applicationIds;
    }
    public get applicationIds(): Array<string> | undefined {
        return this['application_ids'];
    }
    public withRoles(roles: Array<AppPermission>): BatchUpdateApplicationPermissionsRequestBody {
        this['roles'] = roles;
        return this;
    }
}