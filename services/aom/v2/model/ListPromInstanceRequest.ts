

export class ListPromInstanceRequest {
    private 'prom_id'?: string;
    private 'prom_type'?: ListPromInstanceRequestPromTypeEnum | string;
    private 'cce_cluster_enable'?: ListPromInstanceRequestCceClusterEnableEnum | string;
    private 'prom_status'?: ListPromInstanceRequestPromStatusEnum | string;
    private 'Enterprise-Project-Id'?: string;
    public constructor(enterpriseProjectId?: string) { 
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public withPromId(promId: string): ListPromInstanceRequest {
        this['prom_id'] = promId;
        return this;
    }
    public set promId(promId: string  | undefined) {
        this['prom_id'] = promId;
    }
    public get promId(): string | undefined {
        return this['prom_id'];
    }
    public withPromType(promType: ListPromInstanceRequestPromTypeEnum | string): ListPromInstanceRequest {
        this['prom_type'] = promType;
        return this;
    }
    public set promType(promType: ListPromInstanceRequestPromTypeEnum | string  | undefined) {
        this['prom_type'] = promType;
    }
    public get promType(): ListPromInstanceRequestPromTypeEnum | string | undefined {
        return this['prom_type'];
    }
    public withCceClusterEnable(cceClusterEnable: ListPromInstanceRequestCceClusterEnableEnum | string): ListPromInstanceRequest {
        this['cce_cluster_enable'] = cceClusterEnable;
        return this;
    }
    public set cceClusterEnable(cceClusterEnable: ListPromInstanceRequestCceClusterEnableEnum | string  | undefined) {
        this['cce_cluster_enable'] = cceClusterEnable;
    }
    public get cceClusterEnable(): ListPromInstanceRequestCceClusterEnableEnum | string | undefined {
        return this['cce_cluster_enable'];
    }
    public withPromStatus(promStatus: ListPromInstanceRequestPromStatusEnum | string): ListPromInstanceRequest {
        this['prom_status'] = promStatus;
        return this;
    }
    public set promStatus(promStatus: ListPromInstanceRequestPromStatusEnum | string  | undefined) {
        this['prom_status'] = promStatus;
    }
    public get promStatus(): ListPromInstanceRequestPromStatusEnum | string | undefined {
        return this['prom_status'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPromInstanceRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPromInstanceRequestPromTypeEnum {
    DEFAULT = 'default',
    ECS = 'ECS',
    VPC = 'VPC',
    CCE = 'CCE',
    REMOTE_WRITE = 'REMOTE_WRITE',
    KUBERNETES = 'KUBERNETES',
    CLOUD_SERVICE = 'CLOUD_SERVICE',
    ACROSS_ACCOUNT = 'ACROSS_ACCOUNT'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPromInstanceRequestCceClusterEnableEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPromInstanceRequestPromStatusEnum {
    DELETED = 'DELETED',
    NORMAL = 'NORMAL',
    ALL = 'ALL'
}
