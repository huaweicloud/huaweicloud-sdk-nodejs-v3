import { JobRolePermission } from './JobRolePermission';


export class RolePermissionsRequestBody {
    private 'project_id'?: string;
    private 'job_ids'?: Array<string>;
    private 'project_switch'?: boolean;
    public permissions?: Array<JobRolePermission>;
    public constructor() { 
    }
    public withProjectId(projectId: string): RolePermissionsRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withJobIds(jobIds: Array<string>): RolePermissionsRequestBody {
        this['job_ids'] = jobIds;
        return this;
    }
    public set jobIds(jobIds: Array<string>  | undefined) {
        this['job_ids'] = jobIds;
    }
    public get jobIds(): Array<string> | undefined {
        return this['job_ids'];
    }
    public withProjectSwitch(projectSwitch: boolean): RolePermissionsRequestBody {
        this['project_switch'] = projectSwitch;
        return this;
    }
    public set projectSwitch(projectSwitch: boolean  | undefined) {
        this['project_switch'] = projectSwitch;
    }
    public get projectSwitch(): boolean | undefined {
        return this['project_switch'];
    }
    public withPermissions(permissions: Array<JobRolePermission>): RolePermissionsRequestBody {
        this['permissions'] = permissions;
        return this;
    }
}