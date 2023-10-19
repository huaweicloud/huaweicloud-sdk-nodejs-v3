

export class InstanceDetail {
    public publicip?: string;
    public expTime?: string;
    public startTime?: string;
    public endTime?: string;
    public releaseTime?: string;
    public name?: string;
    public instanceId?: string;
    public privateIp?: string;
    public taskStatus?: string;
    public status?: string;
    public created?: string;
    public region?: string;
    public zone?: string;
    private 'availability_zone_display'?: string;
    public vpcId?: string;
    public subnetId?: string;
    public securityGroupId?: string;
    public specification?: string;
    public update?: string;
    public createinstanceStatus?: string;
    public failReason?: string;
    public instanceKey?: string;
    public orderId?: string;
    public periodNum?: string;
    public resourceId?: string;
    private 'bastion_type'?: string;
    public alterPermit?: string;
    public publicId?: string;
    public bastionVersion?: string;
    public newBastionVersion?: string;
    public instanceStatus?: string;
    public instanceDescription?: string;
    public slaveZone?: string;
    public enterpriseProjectId?: string;
    public instanceType?: string;
    public haId?: string;
    public slaveZoneDisplay?: string;
    public webPort?: string;
    public vip?: string;
    public constructor(publicip?: string, expTime?: string, startTime?: string, endTime?: string, releaseTime?: string, name?: string, instanceId?: string, privateIp?: string, taskStatus?: string, status?: string, created?: string, region?: string, zone?: string, availabilityZoneDisplay?: string, vpcId?: string, subnetId?: string, securityGroupId?: string, specification?: string, update?: string, createinstanceStatus?: string, failReason?: string, instanceKey?: string, orderId?: string, periodNum?: string, resourceId?: string, bastionType?: string, alterPermit?: string, publicId?: string, bastionVersion?: string, newBastionVersion?: string, instanceStatus?: string, instanceDescription?: string) { 
        this['publicip'] = publicip;
        this['expTime'] = expTime;
        this['startTime'] = startTime;
        this['endTime'] = endTime;
        this['releaseTime'] = releaseTime;
        this['name'] = name;
        this['instanceId'] = instanceId;
        this['privateIp'] = privateIp;
        this['taskStatus'] = taskStatus;
        this['status'] = status;
        this['created'] = created;
        this['region'] = region;
        this['zone'] = zone;
        this['availability_zone_display'] = availabilityZoneDisplay;
        this['vpcId'] = vpcId;
        this['subnetId'] = subnetId;
        this['securityGroupId'] = securityGroupId;
        this['specification'] = specification;
        this['update'] = update;
        this['createinstanceStatus'] = createinstanceStatus;
        this['failReason'] = failReason;
        this['instanceKey'] = instanceKey;
        this['orderId'] = orderId;
        this['periodNum'] = periodNum;
        this['resourceId'] = resourceId;
        this['bastion_type'] = bastionType;
        this['alterPermit'] = alterPermit;
        this['publicId'] = publicId;
        this['bastionVersion'] = bastionVersion;
        this['newBastionVersion'] = newBastionVersion;
        this['instanceStatus'] = instanceStatus;
        this['instanceDescription'] = instanceDescription;
    }
    public withPublicip(publicip: string): InstanceDetail {
        this['publicip'] = publicip;
        return this;
    }
    public withExpTime(expTime: string): InstanceDetail {
        this['expTime'] = expTime;
        return this;
    }
    public withStartTime(startTime: string): InstanceDetail {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): InstanceDetail {
        this['endTime'] = endTime;
        return this;
    }
    public withReleaseTime(releaseTime: string): InstanceDetail {
        this['releaseTime'] = releaseTime;
        return this;
    }
    public withName(name: string): InstanceDetail {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): InstanceDetail {
        this['instanceId'] = instanceId;
        return this;
    }
    public withPrivateIp(privateIp: string): InstanceDetail {
        this['privateIp'] = privateIp;
        return this;
    }
    public withTaskStatus(taskStatus: string): InstanceDetail {
        this['taskStatus'] = taskStatus;
        return this;
    }
    public withStatus(status: string): InstanceDetail {
        this['status'] = status;
        return this;
    }
    public withCreated(created: string): InstanceDetail {
        this['created'] = created;
        return this;
    }
    public withRegion(region: string): InstanceDetail {
        this['region'] = region;
        return this;
    }
    public withZone(zone: string): InstanceDetail {
        this['zone'] = zone;
        return this;
    }
    public withAvailabilityZoneDisplay(availabilityZoneDisplay: string): InstanceDetail {
        this['availability_zone_display'] = availabilityZoneDisplay;
        return this;
    }
    public set availabilityZoneDisplay(availabilityZoneDisplay: string  | undefined) {
        this['availability_zone_display'] = availabilityZoneDisplay;
    }
    public get availabilityZoneDisplay(): string | undefined {
        return this['availability_zone_display'];
    }
    public withVpcId(vpcId: string): InstanceDetail {
        this['vpcId'] = vpcId;
        return this;
    }
    public withSubnetId(subnetId: string): InstanceDetail {
        this['subnetId'] = subnetId;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): InstanceDetail {
        this['securityGroupId'] = securityGroupId;
        return this;
    }
    public withSpecification(specification: string): InstanceDetail {
        this['specification'] = specification;
        return this;
    }
    public withUpdate(update: string): InstanceDetail {
        this['update'] = update;
        return this;
    }
    public withCreateinstanceStatus(createinstanceStatus: string): InstanceDetail {
        this['createinstanceStatus'] = createinstanceStatus;
        return this;
    }
    public withFailReason(failReason: string): InstanceDetail {
        this['failReason'] = failReason;
        return this;
    }
    public withInstanceKey(instanceKey: string): InstanceDetail {
        this['instanceKey'] = instanceKey;
        return this;
    }
    public withOrderId(orderId: string): InstanceDetail {
        this['orderId'] = orderId;
        return this;
    }
    public withPeriodNum(periodNum: string): InstanceDetail {
        this['periodNum'] = periodNum;
        return this;
    }
    public withResourceId(resourceId: string): InstanceDetail {
        this['resourceId'] = resourceId;
        return this;
    }
    public withBastionType(bastionType: string): InstanceDetail {
        this['bastion_type'] = bastionType;
        return this;
    }
    public set bastionType(bastionType: string  | undefined) {
        this['bastion_type'] = bastionType;
    }
    public get bastionType(): string | undefined {
        return this['bastion_type'];
    }
    public withAlterPermit(alterPermit: string): InstanceDetail {
        this['alterPermit'] = alterPermit;
        return this;
    }
    public withPublicId(publicId: string): InstanceDetail {
        this['publicId'] = publicId;
        return this;
    }
    public withBastionVersion(bastionVersion: string): InstanceDetail {
        this['bastionVersion'] = bastionVersion;
        return this;
    }
    public withNewBastionVersion(newBastionVersion: string): InstanceDetail {
        this['newBastionVersion'] = newBastionVersion;
        return this;
    }
    public withInstanceStatus(instanceStatus: string): InstanceDetail {
        this['instanceStatus'] = instanceStatus;
        return this;
    }
    public withInstanceDescription(instanceDescription: string): InstanceDetail {
        this['instanceDescription'] = instanceDescription;
        return this;
    }
    public withSlaveZone(slaveZone: string): InstanceDetail {
        this['slaveZone'] = slaveZone;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceDetail {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withInstanceType(instanceType: string): InstanceDetail {
        this['instanceType'] = instanceType;
        return this;
    }
    public withHaId(haId: string): InstanceDetail {
        this['haId'] = haId;
        return this;
    }
    public withSlaveZoneDisplay(slaveZoneDisplay: string): InstanceDetail {
        this['slaveZoneDisplay'] = slaveZoneDisplay;
        return this;
    }
    public withWebPort(webPort: string): InstanceDetail {
        this['webPort'] = webPort;
        return this;
    }
    public withVip(vip: string): InstanceDetail {
        this['vip'] = vip;
        return this;
    }
}