

export class CcspInstanceInfo {
    private 'instance_id'?: string;
    private 'resource_id'?: string;
    private 'instance_name'?: string;
    private 'service_type'?: string;
    private 'cluster_id'?: string;
    private 'is_normal'?: boolean;
    public status?: string;
    private 'image_name'?: string;
    public specification?: string;
    public az?: string;
    private 'expired_time'?: number;
    private 'create_time'?: number;
    public constructor(instanceId?: string, instanceName?: string, serviceType?: string, clusterId?: string, isNormal?: boolean, status?: string, imageName?: string, specification?: string, az?: string, createTime?: number) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['service_type'] = serviceType;
        this['cluster_id'] = clusterId;
        this['is_normal'] = isNormal;
        this['status'] = status;
        this['image_name'] = imageName;
        this['specification'] = specification;
        this['az'] = az;
        this['create_time'] = createTime;
    }
    public withInstanceId(instanceId: string): CcspInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withResourceId(resourceId: string): CcspInstanceInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withInstanceName(instanceName: string): CcspInstanceInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withServiceType(serviceType: string): CcspInstanceInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withClusterId(clusterId: string): CcspInstanceInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withIsNormal(isNormal: boolean): CcspInstanceInfo {
        this['is_normal'] = isNormal;
        return this;
    }
    public set isNormal(isNormal: boolean  | undefined) {
        this['is_normal'] = isNormal;
    }
    public get isNormal(): boolean | undefined {
        return this['is_normal'];
    }
    public withStatus(status: string): CcspInstanceInfo {
        this['status'] = status;
        return this;
    }
    public withImageName(imageName: string): CcspInstanceInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withSpecification(specification: string): CcspInstanceInfo {
        this['specification'] = specification;
        return this;
    }
    public withAz(az: string): CcspInstanceInfo {
        this['az'] = az;
        return this;
    }
    public withExpiredTime(expiredTime: number): CcspInstanceInfo {
        this['expired_time'] = expiredTime;
        return this;
    }
    public set expiredTime(expiredTime: number  | undefined) {
        this['expired_time'] = expiredTime;
    }
    public get expiredTime(): number | undefined {
        return this['expired_time'];
    }
    public withCreateTime(createTime: number): CcspInstanceInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}