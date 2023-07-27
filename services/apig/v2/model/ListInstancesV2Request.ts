

export class ListInstancesV2Request {
    public offset?: number;
    public limit?: number;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public status?: ListInstancesV2RequestStatusEnum | string;
    public constructor() { 
    }
    public withOffset(offset: number): ListInstancesV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstancesV2Request {
        this['limit'] = limit;
        return this;
    }
    public withInstanceId(instanceId: string): ListInstancesV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListInstancesV2Request {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withStatus(status: ListInstancesV2RequestStatusEnum | string): ListInstancesV2Request {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesV2RequestStatusEnum {
    CREATING = 'Creating',
    CREATESUCCESS = 'CreateSuccess',
    CREATEFAIL = 'CreateFail',
    INITING = 'Initing',
    REGISTERING = 'Registering',
    RUNNING = 'Running',
    INITINGFAILED = 'InitingFailed',
    REGISTERFAILED = 'RegisterFailed',
    INSTALLING = 'Installing',
    INSTALLFAILED = 'InstallFailed',
    UPDATING = 'Updating',
    UPDATEFAILED = 'UpdateFailed',
    ROLLBACKING = 'Rollbacking',
    ROLLBACKSUCCESS = 'RollbackSuccess',
    ROLLBACKFAILED = 'RollbackFailed',
    DELETING = 'Deleting',
    DELETEFAILED = 'DeleteFailed',
    UNREGISTERING = 'Unregistering',
    UNREGISTERFAILED = 'UnRegisterFailed',
    CREATETIMEOUT = 'CreateTimeout',
    INITTIMEOUT = 'InitTimeout',
    REGISTERTIMEOUT = 'RegisterTimeout',
    INSTALLTIMEOUT = 'InstallTimeout',
    UPDATETIMEOUT = 'UpdateTimeout',
    ROLLBACKTIMEOUT = 'RollbackTimeout',
    DELETETIMEOUT = 'DeleteTimeout',
    UNREGISTERTIMEOUT = 'UnregisterTimeout',
    STARTING = 'Starting',
    FREEZING = 'Freezing',
    FROZEN = 'Frozen',
    RESTARTING = 'Restarting',
    RESTARTFAIL = 'RestartFail',
    UNHEALTHY = 'Unhealthy',
    RESTARTTIMEOUT = 'RestartTimeout'
}
