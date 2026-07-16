

export class IntranetConnectionRequest {
    private 'service_id'?: string;
    public scene?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'pool_id'?: string;
    public type?: IntranetConnectionRequestTypeEnum | string;
    private 'dispatcher_group_id'?: string;
    private 'custom_urls'?: Array<string>;
    public constructor(scene?: string) { 
        this['scene'] = scene;
    }
    public withServiceId(serviceId: string): IntranetConnectionRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withScene(scene: string): IntranetConnectionRequest {
        this['scene'] = scene;
        return this;
    }
    public withVpcId(vpcId: string): IntranetConnectionRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): IntranetConnectionRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withPoolId(poolId: string): IntranetConnectionRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withType(type: IntranetConnectionRequestTypeEnum | string): IntranetConnectionRequest {
        this['type'] = type;
        return this;
    }
    public withDispatcherGroupId(dispatcherGroupId: string): IntranetConnectionRequest {
        this['dispatcher_group_id'] = dispatcherGroupId;
        return this;
    }
    public set dispatcherGroupId(dispatcherGroupId: string  | undefined) {
        this['dispatcher_group_id'] = dispatcherGroupId;
    }
    public get dispatcherGroupId(): string | undefined {
        return this['dispatcher_group_id'];
    }
    public withCustomUrls(customUrls: Array<string>): IntranetConnectionRequest {
        this['custom_urls'] = customUrls;
        return this;
    }
    public set customUrls(customUrls: Array<string>  | undefined) {
        this['custom_urls'] = customUrls;
    }
    public get customUrls(): Array<string> | undefined {
        return this['custom_urls'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IntranetConnectionRequestTypeEnum {
    SERVICE = 'SERVICE',
    GLOBAL = 'GLOBAL'
}
