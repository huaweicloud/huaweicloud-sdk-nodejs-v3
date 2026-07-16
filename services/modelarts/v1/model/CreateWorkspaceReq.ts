import { CreateWorkspaceReqGrants } from './CreateWorkspaceReqGrants';


export class CreateWorkspaceReq {
    public grants?: Array<CreateWorkspaceReqGrants>;
    private 'auth_type'?: CreateWorkspaceReqAuthTypeEnum | string;
    private 'enterprise_project_id'?: string;
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withGrants(grants: Array<CreateWorkspaceReqGrants>): CreateWorkspaceReq {
        this['grants'] = grants;
        return this;
    }
    public withAuthType(authType: CreateWorkspaceReqAuthTypeEnum | string): CreateWorkspaceReq {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: CreateWorkspaceReqAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): CreateWorkspaceReqAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateWorkspaceReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): CreateWorkspaceReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateWorkspaceReq {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateWorkspaceReqAuthTypeEnum {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
    INTERNAL = 'INTERNAL'
}
