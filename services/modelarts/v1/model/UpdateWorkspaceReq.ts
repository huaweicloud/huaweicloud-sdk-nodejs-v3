import { ViewWorkspaceResponseGrants } from './ViewWorkspaceResponseGrants';


export class UpdateWorkspaceReq {
    public grants?: Array<ViewWorkspaceResponseGrants>;
    private 'auth_type'?: UpdateWorkspaceReqAuthTypeEnum | string;
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withGrants(grants: Array<ViewWorkspaceResponseGrants>): UpdateWorkspaceReq {
        this['grants'] = grants;
        return this;
    }
    public withAuthType(authType: UpdateWorkspaceReqAuthTypeEnum | string): UpdateWorkspaceReq {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: UpdateWorkspaceReqAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): UpdateWorkspaceReqAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withName(name: string): UpdateWorkspaceReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateWorkspaceReq {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateWorkspaceReqAuthTypeEnum {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
    INTERNAL = 'INTERNAL'
}
