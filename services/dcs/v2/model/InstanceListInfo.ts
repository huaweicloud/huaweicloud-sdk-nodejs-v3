import { Features } from './Features';
import { ResourceTag } from './ResourceTag';


export class InstanceListInfo {
    private 'publicip_id'?: string | undefined;
    private 'vpc_name'?: string | undefined;
    private 'charging_mode'?: number | undefined;
    private 'vpc_id'?: string | undefined;
    private 'subnet_id'?: string | undefined;
    private 'security_group_id'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'enable_ssl'?: boolean | undefined;
    private 'max_memory'?: number | undefined;
    private 'used_memory'?: number | undefined;
    private 'publicip_address'?: string | undefined;
    public capacity?: number;
    private 'capacity_minor'?: string | undefined;
    private 'order_id'?: string | undefined;
    private 'maintain_begin'?: string | undefined;
    private 'maintain_end'?: string | undefined;
    public engine?: string;
    private 'engine_version'?: string | undefined;
    private 'service_upgrade'?: boolean | undefined;
    private 'no_password_access'?: string | undefined;
    private 'service_task_id'?: string | undefined;
    public ip?: string;
    private 'access_user'?: string | undefined;
    private 'instance_id'?: string | undefined;
    private 'enable_publicip'?: boolean | undefined;
    public port?: number;
    private 'user_id'?: string | undefined;
    private 'user_name'?: string | undefined;
    private 'domain_name'?: string | undefined;
    private 'readonly_domain_name'?: string | undefined;
    public name?: string;
    private 'spec_code'?: string | undefined;
    public status?: string;
    public tags?: Array<ResourceTag>;
    private 'enterprise_project_id'?: string | undefined;
    public description?: string;
    private 'cpu_type'?: string | undefined;
    private 'az_codes'?: Array<string> | undefined;
    public features?: Features;
    private 'sub_status'?: string | undefined;
    public constructor() { 
    }
    public withPublicipId(publicipId: string): InstanceListInfo {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withVpcName(vpcName: string): InstanceListInfo {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName() {
        return this['vpc_name'];
    }
    public withChargingMode(chargingMode: number): InstanceListInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withVpcId(vpcId: string): InstanceListInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): InstanceListInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): InstanceListInfo {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withCreatedAt(createdAt: string): InstanceListInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): InstanceListInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withEnableSsl(enableSsl: boolean): InstanceListInfo {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl() {
        return this['enable_ssl'];
    }
    public withMaxMemory(maxMemory: number): InstanceListInfo {
        this['max_memory'] = maxMemory;
        return this;
    }
    public set maxMemory(maxMemory: number | undefined) {
        this['max_memory'] = maxMemory;
    }
    public get maxMemory() {
        return this['max_memory'];
    }
    public withUsedMemory(usedMemory: number): InstanceListInfo {
        this['used_memory'] = usedMemory;
        return this;
    }
    public set usedMemory(usedMemory: number | undefined) {
        this['used_memory'] = usedMemory;
    }
    public get usedMemory() {
        return this['used_memory'];
    }
    public withPublicipAddress(publicipAddress: string): InstanceListInfo {
        this['publicip_address'] = publicipAddress;
        return this;
    }
    public set publicipAddress(publicipAddress: string | undefined) {
        this['publicip_address'] = publicipAddress;
    }
    public get publicipAddress() {
        return this['publicip_address'];
    }
    public withCapacity(capacity: number): InstanceListInfo {
        this['capacity'] = capacity;
        return this;
    }
    public withCapacityMinor(capacityMinor: string): InstanceListInfo {
        this['capacity_minor'] = capacityMinor;
        return this;
    }
    public set capacityMinor(capacityMinor: string | undefined) {
        this['capacity_minor'] = capacityMinor;
    }
    public get capacityMinor() {
        return this['capacity_minor'];
    }
    public withOrderId(orderId: string): InstanceListInfo {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withMaintainBegin(maintainBegin: string): InstanceListInfo {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin() {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): InstanceListInfo {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd() {
        return this['maintain_end'];
    }
    public withEngine(engine: string): InstanceListInfo {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): InstanceListInfo {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withServiceUpgrade(serviceUpgrade: boolean): InstanceListInfo {
        this['service_upgrade'] = serviceUpgrade;
        return this;
    }
    public set serviceUpgrade(serviceUpgrade: boolean | undefined) {
        this['service_upgrade'] = serviceUpgrade;
    }
    public get serviceUpgrade() {
        return this['service_upgrade'];
    }
    public withNoPasswordAccess(noPasswordAccess: string): InstanceListInfo {
        this['no_password_access'] = noPasswordAccess;
        return this;
    }
    public set noPasswordAccess(noPasswordAccess: string | undefined) {
        this['no_password_access'] = noPasswordAccess;
    }
    public get noPasswordAccess() {
        return this['no_password_access'];
    }
    public withServiceTaskId(serviceTaskId: string): InstanceListInfo {
        this['service_task_id'] = serviceTaskId;
        return this;
    }
    public set serviceTaskId(serviceTaskId: string | undefined) {
        this['service_task_id'] = serviceTaskId;
    }
    public get serviceTaskId() {
        return this['service_task_id'];
    }
    public withIp(ip: string): InstanceListInfo {
        this['ip'] = ip;
        return this;
    }
    public withAccessUser(accessUser: string): InstanceListInfo {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser() {
        return this['access_user'];
    }
    public withInstanceId(instanceId: string): InstanceListInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withEnablePublicip(enablePublicip: boolean): InstanceListInfo {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip() {
        return this['enable_publicip'];
    }
    public withPort(port: number): InstanceListInfo {
        this['port'] = port;
        return this;
    }
    public withUserId(userId: string): InstanceListInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withUserName(userName: string): InstanceListInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withDomainName(domainName: string): InstanceListInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withReadonlyDomainName(readonlyDomainName: string): InstanceListInfo {
        this['readonly_domain_name'] = readonlyDomainName;
        return this;
    }
    public set readonlyDomainName(readonlyDomainName: string | undefined) {
        this['readonly_domain_name'] = readonlyDomainName;
    }
    public get readonlyDomainName() {
        return this['readonly_domain_name'];
    }
    public withName(name: string): InstanceListInfo {
        this['name'] = name;
        return this;
    }
    public withSpecCode(specCode: string): InstanceListInfo {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode() {
        return this['spec_code'];
    }
    public withStatus(status: string): InstanceListInfo {
        this['status'] = status;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): InstanceListInfo {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceListInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withDescription(description: string): InstanceListInfo {
        this['description'] = description;
        return this;
    }
    public withCpuType(cpuType: string): InstanceListInfo {
        this['cpu_type'] = cpuType;
        return this;
    }
    public set cpuType(cpuType: string | undefined) {
        this['cpu_type'] = cpuType;
    }
    public get cpuType() {
        return this['cpu_type'];
    }
    public withAzCodes(azCodes: Array<string>): InstanceListInfo {
        this['az_codes'] = azCodes;
        return this;
    }
    public set azCodes(azCodes: Array<string> | undefined) {
        this['az_codes'] = azCodes;
    }
    public get azCodes() {
        return this['az_codes'];
    }
    public withFeatures(features: Features): InstanceListInfo {
        this['features'] = features;
        return this;
    }
    public withSubStatus(subStatus: string): InstanceListInfo {
        this['sub_status'] = subStatus;
        return this;
    }
    public set subStatus(subStatus: string | undefined) {
        this['sub_status'] = subStatus;
    }
    public get subStatus() {
        return this['sub_status'];
    }
}