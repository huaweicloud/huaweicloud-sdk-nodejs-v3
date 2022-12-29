

export class EipResource {
    public id?: string;
    private 'public_ip'?: string | undefined;
    public status?: EipResourceStatusEnum;
    private 'public_ipv6'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'device_id'?: string | undefined;
    private 'device_name'?: string | undefined;
    private 'device_owner'?: string | undefined;
    private 'associate_instance_type'?: string | undefined;
    private 'fw_instance_name'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    private 'fw_enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): EipResource {
        this['id'] = id;
        return this;
    }
    public withPublicIp(publicIp: string): EipResource {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp() {
        return this['public_ip'];
    }
    public withStatus(status: EipResourceStatusEnum): EipResource {
        this['status'] = status;
        return this;
    }
    public withPublicIpv6(publicIpv6: string): EipResource {
        this['public_ipv6'] = publicIpv6;
        return this;
    }
    public set publicIpv6(publicIpv6: string | undefined) {
        this['public_ipv6'] = publicIpv6;
    }
    public get publicIpv6() {
        return this['public_ipv6'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): EipResource {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withDeviceId(deviceId: string): EipResource {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withDeviceName(deviceName: string): EipResource {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName() {
        return this['device_name'];
    }
    public withDeviceOwner(deviceOwner: string): EipResource {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner() {
        return this['device_owner'];
    }
    public withAssociateInstanceType(associateInstanceType: string): EipResource {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: string | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType() {
        return this['associate_instance_type'];
    }
    public withFwInstanceName(fwInstanceName: string): EipResource {
        this['fw_instance_name'] = fwInstanceName;
        return this;
    }
    public set fwInstanceName(fwInstanceName: string | undefined) {
        this['fw_instance_name'] = fwInstanceName;
    }
    public get fwInstanceName() {
        return this['fw_instance_name'];
    }
    public withFwInstanceId(fwInstanceId: string): EipResource {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
    public withFwEnterpriseProjectId(fwEnterpriseProjectId: string): EipResource {
        this['fw_enterprise_project_id'] = fwEnterpriseProjectId;
        return this;
    }
    public set fwEnterpriseProjectId(fwEnterpriseProjectId: string | undefined) {
        this['fw_enterprise_project_id'] = fwEnterpriseProjectId;
    }
    public get fwEnterpriseProjectId() {
        return this['fw_enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EipResourceStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
