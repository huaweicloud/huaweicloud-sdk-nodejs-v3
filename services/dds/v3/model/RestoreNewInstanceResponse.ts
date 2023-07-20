import { BackupStrategy } from './BackupStrategy';
import { ChargeInfoResult } from './ChargeInfoResult';
import { Datastore } from './Datastore';
import { RestoreNewInstanceConfigurationsOption } from './RestoreNewInstanceConfigurationsOption';
import { RestoreNewInstanceFlavorOption } from './RestoreNewInstanceFlavorOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreNewInstanceResponse extends SdkResponse {
    public id?: string;
    public datastore?: Datastore;
    public name?: string;
    public created?: string;
    public status?: string;
    public region?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'disk_encryption_id'?: string;
    public mode?: string;
    public configurations?: Array<RestoreNewInstanceConfigurationsOption>;
    public flavor?: Array<RestoreNewInstanceFlavorOption>;
    private 'backup_strategy'?: BackupStrategy;
    private 'enterprise_project_id'?: string;
    private 'ssl_option'?: string;
    private 'dss_pool_id'?: string;
    private 'job_id'?: string;
    private 'order_id'?: string;
    private 'charge_info'?: ChargeInfoResult;
    public constructor() { 
        super();
    }
    public withId(id: string): RestoreNewInstanceResponse {
        this['id'] = id;
        return this;
    }
    public withDatastore(datastore: Datastore): RestoreNewInstanceResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withName(name: string): RestoreNewInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withCreated(created: string): RestoreNewInstanceResponse {
        this['created'] = created;
        return this;
    }
    public withStatus(status: string): RestoreNewInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): RestoreNewInstanceResponse {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): RestoreNewInstanceResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): RestoreNewInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): RestoreNewInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): RestoreNewInstanceResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withDiskEncryptionId(diskEncryptionId: string): RestoreNewInstanceResponse {
        this['disk_encryption_id'] = diskEncryptionId;
        return this;
    }
    public set diskEncryptionId(diskEncryptionId: string  | undefined) {
        this['disk_encryption_id'] = diskEncryptionId;
    }
    public get diskEncryptionId(): string | undefined {
        return this['disk_encryption_id'];
    }
    public withMode(mode: string): RestoreNewInstanceResponse {
        this['mode'] = mode;
        return this;
    }
    public withConfigurations(configurations: Array<RestoreNewInstanceConfigurationsOption>): RestoreNewInstanceResponse {
        this['configurations'] = configurations;
        return this;
    }
    public withFlavor(flavor: Array<RestoreNewInstanceFlavorOption>): RestoreNewInstanceResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withBackupStrategy(backupStrategy: BackupStrategy): RestoreNewInstanceResponse {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: BackupStrategy  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): BackupStrategy | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RestoreNewInstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSslOption(sslOption: string): RestoreNewInstanceResponse {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: string  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): string | undefined {
        return this['ssl_option'];
    }
    public withDssPoolId(dssPoolId: string): RestoreNewInstanceResponse {
        this['dss_pool_id'] = dssPoolId;
        return this;
    }
    public set dssPoolId(dssPoolId: string  | undefined) {
        this['dss_pool_id'] = dssPoolId;
    }
    public get dssPoolId(): string | undefined {
        return this['dss_pool_id'];
    }
    public withJobId(jobId: string): RestoreNewInstanceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOrderId(orderId: string): RestoreNewInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withChargeInfo(chargeInfo: ChargeInfoResult): RestoreNewInstanceResponse {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfoResult  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfoResult | undefined {
        return this['charge_info'];
    }
}