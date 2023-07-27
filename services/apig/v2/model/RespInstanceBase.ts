

export class RespInstanceBase {
    public id?: string;
    private 'project_id'?: string;
    private 'instance_name'?: string;
    public status?: RespInstanceBaseStatusEnum | string;
    private 'instance_status'?: RespInstanceBaseInstanceStatusEnum | number;
    public type?: string;
    public spec?: RespInstanceBaseSpecEnum | string;
    private 'create_time'?: number;
    private 'enterprise_project_id'?: string;
    private 'eip_address'?: string;
    private 'charging_mode'?: RespInstanceBaseChargingModeEnum | number;
    private 'cbc_metadata'?: string;
    private 'loadbalancer_provider'?: RespInstanceBaseLoadbalancerProviderEnum | string;
    public constructor() { 
    }
    public withId(id: string): RespInstanceBase {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): RespInstanceBase {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceName(instanceName: string): RespInstanceBase {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withStatus(status: RespInstanceBaseStatusEnum | string): RespInstanceBase {
        this['status'] = status;
        return this;
    }
    public withInstanceStatus(instanceStatus: RespInstanceBaseInstanceStatusEnum | number): RespInstanceBase {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: RespInstanceBaseInstanceStatusEnum | number  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): RespInstanceBaseInstanceStatusEnum | number | undefined {
        return this['instance_status'];
    }
    public withType(type: string): RespInstanceBase {
        this['type'] = type;
        return this;
    }
    public withSpec(spec: RespInstanceBaseSpecEnum | string): RespInstanceBase {
        this['spec'] = spec;
        return this;
    }
    public withCreateTime(createTime: number): RespInstanceBase {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RespInstanceBase {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEipAddress(eipAddress: string): RespInstanceBase {
        this['eip_address'] = eipAddress;
        return this;
    }
    public set eipAddress(eipAddress: string  | undefined) {
        this['eip_address'] = eipAddress;
    }
    public get eipAddress(): string | undefined {
        return this['eip_address'];
    }
    public withChargingMode(chargingMode: RespInstanceBaseChargingModeEnum | number): RespInstanceBase {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: RespInstanceBaseChargingModeEnum | number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): RespInstanceBaseChargingModeEnum | number | undefined {
        return this['charging_mode'];
    }
    public withCbcMetadata(cbcMetadata: string): RespInstanceBase {
        this['cbc_metadata'] = cbcMetadata;
        return this;
    }
    public set cbcMetadata(cbcMetadata: string  | undefined) {
        this['cbc_metadata'] = cbcMetadata;
    }
    public get cbcMetadata(): string | undefined {
        return this['cbc_metadata'];
    }
    public withLoadbalancerProvider(loadbalancerProvider: RespInstanceBaseLoadbalancerProviderEnum | string): RespInstanceBase {
        this['loadbalancer_provider'] = loadbalancerProvider;
        return this;
    }
    public set loadbalancerProvider(loadbalancerProvider: RespInstanceBaseLoadbalancerProviderEnum | string  | undefined) {
        this['loadbalancer_provider'] = loadbalancerProvider;
    }
    public get loadbalancerProvider(): RespInstanceBaseLoadbalancerProviderEnum | string | undefined {
        return this['loadbalancer_provider'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RespInstanceBaseStatusEnum {
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
/**
    * @export
    * @enum {string}
    */
export enum RespInstanceBaseInstanceStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_10 = 10,
    NUMBER_11 = 11,
    NUMBER_12 = 12,
    NUMBER_13 = 13,
    NUMBER_20 = 20,
    NUMBER_21 = 21,
    NUMBER_22 = 22,
    NUMBER_23 = 23,
    NUMBER_24 = 24,
    NUMBER_25 = 25,
    NUMBER_26 = 26,
    NUMBER_27 = 27,
    NUMBER_28 = 28,
    NUMBER_29 = 29,
    NUMBER_30 = 30,
    NUMBER_31 = 31,
    NUMBER_32 = 32,
    NUMBER_33 = 33,
    NUMBER_34 = 34,
    NUMBER_35 = 35,
    NUMBER_36 = 36,
    NUMBER_37 = 37,
    NUMBER_38 = 38,
    NUMBER_39 = 39,
    NUMBER_40 = 40,
    NUMBER_41 = 41
}
/**
    * @export
    * @enum {string}
    */
export enum RespInstanceBaseSpecEnum {
    BASIC = 'BASIC',
    PROFESSIONAL = 'PROFESSIONAL',
    ENTERPRISE = 'ENTERPRISE',
    PLATINUM = 'PLATINUM',
    BASIC_IPV6 = 'BASIC_IPV6',
    PROFESSIONAL_IPV6 = 'PROFESSIONAL_IPV6',
    ENTERPRISE_IPV6 = 'ENTERPRISE_IPV6',
    PLATINUM_IPV6 = 'PLATINUM_IPV6'
}
/**
    * @export
    * @enum {string}
    */
export enum RespInstanceBaseChargingModeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum RespInstanceBaseLoadbalancerProviderEnum {
    LVS = 'lvs',
    ELB = 'elb'
}
