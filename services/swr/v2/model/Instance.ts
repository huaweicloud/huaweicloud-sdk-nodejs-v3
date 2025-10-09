

export class Instance {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public spec?: string;
    public version?: string;
    private 'charge_mode'?: InstanceChargeModeEnum | string;
    private 'access_address'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'expires_at'?: string;
    public status?: InstanceStatusEnum | string;
    private 'obs_bucket_name'?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'user_def_obs'?: boolean;
    private 'product_id'?: string;
    private 'order_id'?: string;
    private 'vpc_name'?: string;
    private 'vpc_cidr'?: string;
    private 'subnet_name'?: string;
    private 'subnet_cidr'?: string;
    private 'vpcep_service_id'?: string;
    public constructor() { 
    }
    public withId(id: string): Instance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Instance {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Instance {
        this['description'] = description;
        return this;
    }
    public withVpcId(vpcId: string): Instance {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): Instance {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSpec(spec: string): Instance {
        this['spec'] = spec;
        return this;
    }
    public withVersion(version: string): Instance {
        this['version'] = version;
        return this;
    }
    public withChargeMode(chargeMode: InstanceChargeModeEnum | string): Instance {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: InstanceChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): InstanceChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withAccessAddress(accessAddress: string): Instance {
        this['access_address'] = accessAddress;
        return this;
    }
    public set accessAddress(accessAddress: string  | undefined) {
        this['access_address'] = accessAddress;
    }
    public get accessAddress(): string | undefined {
        return this['access_address'];
    }
    public withCreatedAt(createdAt: string): Instance {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): Instance {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withExpiresAt(expiresAt: string): Instance {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withStatus(status: InstanceStatusEnum | string): Instance {
        this['status'] = status;
        return this;
    }
    public withObsBucketName(obsBucketName: string): Instance {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withProjectId(projectId: string): Instance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Instance {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withUserDefObs(userDefObs: boolean): Instance {
        this['user_def_obs'] = userDefObs;
        return this;
    }
    public set userDefObs(userDefObs: boolean  | undefined) {
        this['user_def_obs'] = userDefObs;
    }
    public get userDefObs(): boolean | undefined {
        return this['user_def_obs'];
    }
    public withProductId(productId: string): Instance {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withOrderId(orderId: string): Instance {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withVpcName(vpcName: string): Instance {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withVpcCidr(vpcCidr: string): Instance {
        this['vpc_cidr'] = vpcCidr;
        return this;
    }
    public set vpcCidr(vpcCidr: string  | undefined) {
        this['vpc_cidr'] = vpcCidr;
    }
    public get vpcCidr(): string | undefined {
        return this['vpc_cidr'];
    }
    public withSubnetName(subnetName: string): Instance {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withSubnetCidr(subnetCidr: string): Instance {
        this['subnet_cidr'] = subnetCidr;
        return this;
    }
    public set subnetCidr(subnetCidr: string  | undefined) {
        this['subnet_cidr'] = subnetCidr;
    }
    public get subnetCidr(): string | undefined {
        return this['subnet_cidr'];
    }
    public withVpcepServiceId(vpcepServiceId: string): Instance {
        this['vpcep_service_id'] = vpcepServiceId;
        return this;
    }
    public set vpcepServiceId(vpcepServiceId: string  | undefined) {
        this['vpcep_service_id'] = vpcepServiceId;
    }
    public get vpcepServiceId(): string | undefined {
        return this['vpcep_service_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceChargeModeEnum {
    POSTPAID = 'postPaid'
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceStatusEnum {
    INITIAL = 'Initial',
    CREATING = 'Creating',
    RUNNING = 'Running',
    UNAVAILABLE = 'Unavailable'
}
