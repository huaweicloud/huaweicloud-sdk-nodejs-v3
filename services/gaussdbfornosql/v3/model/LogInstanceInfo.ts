import { InstancesDatastoreResult } from './InstancesDatastoreResult';


export class LogInstanceInfo {
    public id?: string;
    public name?: string;
    public status?: string;
    public mode?: string;
    public datastore?: InstancesDatastoreResult;
    public actions?: Array<string>;
    private 'enterprise_project_id'?: string;
    private 'supported_log_types'?: LogInstanceInfoSupportedLogTypesEnum | string;
    public constructor() { 
    }
    public withId(id: string): LogInstanceInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LogInstanceInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): LogInstanceInfo {
        this['status'] = status;
        return this;
    }
    public withMode(mode: string): LogInstanceInfo {
        this['mode'] = mode;
        return this;
    }
    public withDatastore(datastore: InstancesDatastoreResult): LogInstanceInfo {
        this['datastore'] = datastore;
        return this;
    }
    public withActions(actions: Array<string>): LogInstanceInfo {
        this['actions'] = actions;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): LogInstanceInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSupportedLogTypes(supportedLogTypes: LogInstanceInfoSupportedLogTypesEnum | string): LogInstanceInfo {
        this['supported_log_types'] = supportedLogTypes;
        return this;
    }
    public set supportedLogTypes(supportedLogTypes: LogInstanceInfoSupportedLogTypesEnum | string  | undefined) {
        this['supported_log_types'] = supportedLogTypes;
    }
    public get supportedLogTypes(): LogInstanceInfoSupportedLogTypesEnum | string | undefined {
        return this['supported_log_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LogInstanceInfoSupportedLogTypesEnum {
    SLOW_LOG = 'slow_log',
    AUDIT_LOG = 'audit_log'
}
