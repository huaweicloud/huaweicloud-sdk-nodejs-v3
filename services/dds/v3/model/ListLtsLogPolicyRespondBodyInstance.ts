import { ListLtsLogPolicyRespondBodyInstanceDatastore } from './ListLtsLogPolicyRespondBodyInstanceDatastore';


export class ListLtsLogPolicyRespondBodyInstance {
    public id?: string;
    public name?: string;
    public mode?: ListLtsLogPolicyRespondBodyInstanceModeEnum | string;
    public datastore?: ListLtsLogPolicyRespondBodyInstanceDatastore;
    public status?: string;
    private 'enterprise_project_id'?: string;
    public actions?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): ListLtsLogPolicyRespondBodyInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListLtsLogPolicyRespondBodyInstance {
        this['name'] = name;
        return this;
    }
    public withMode(mode: ListLtsLogPolicyRespondBodyInstanceModeEnum | string): ListLtsLogPolicyRespondBodyInstance {
        this['mode'] = mode;
        return this;
    }
    public withDatastore(datastore: ListLtsLogPolicyRespondBodyInstanceDatastore): ListLtsLogPolicyRespondBodyInstance {
        this['datastore'] = datastore;
        return this;
    }
    public withStatus(status: string): ListLtsLogPolicyRespondBodyInstance {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListLtsLogPolicyRespondBodyInstance {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withActions(actions: Array<string>): ListLtsLogPolicyRespondBodyInstance {
        this['actions'] = actions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLtsLogPolicyRespondBodyInstanceModeEnum {
    SINGLE = 'Single',
    REPLICA = 'Replica',
    SHARDING = 'Sharding'
}
