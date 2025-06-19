import { Privilege } from './Privilege';


export class RunAuthorizationActionRequestBody {
    private 'user_name'?: string;
    public projectId?: string;
    private 'grant_project_id'?: string;
    public action?: RunAuthorizationActionRequestBodyActionEnum | string;
    public privileges?: Array<Privilege>;
    public constructor(action?: string, privileges?: Array<Privilege>) { 
        this['action'] = action;
        this['privileges'] = privileges;
    }
    public withUserName(userName: string): RunAuthorizationActionRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withProjectId(projectId: string): RunAuthorizationActionRequestBody {
        this['projectId'] = projectId;
        return this;
    }
    public withGrantProjectId(grantProjectId: string): RunAuthorizationActionRequestBody {
        this['grant_project_id'] = grantProjectId;
        return this;
    }
    public set grantProjectId(grantProjectId: string  | undefined) {
        this['grant_project_id'] = grantProjectId;
    }
    public get grantProjectId(): string | undefined {
        return this['grant_project_id'];
    }
    public withAction(action: RunAuthorizationActionRequestBodyActionEnum | string): RunAuthorizationActionRequestBody {
        this['action'] = action;
        return this;
    }
    public withPrivileges(privileges: Array<Privilege>): RunAuthorizationActionRequestBody {
        this['privileges'] = privileges;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunAuthorizationActionRequestBodyActionEnum {
    GRANT = 'grant',
    REVOKE = 'revoke',
    UPDATE = 'update'
}
