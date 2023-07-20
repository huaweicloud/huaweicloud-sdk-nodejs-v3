import { BackupStrategyResult } from './BackupStrategyResult';
import { ChargeInfoResult } from './ChargeInfoResult';
import { CreateInstanceFlavorResult } from './CreateInstanceFlavorResult';
import { DatastoreResult } from './DatastoreResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceResponse extends SdkResponse {
    public id?: string;
    public datastore?: DatastoreResult;
    public name?: string;
    public created?: string;
    public status?: string;
    public region?: string;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    public mode?: string;
    public flavor?: Array<CreateInstanceFlavorResult>;
    private 'backup_strategy'?: BackupStrategyResult;
    private 'enterprise_project_id'?: string;
    private 'dedicated_resource_id'?: string;
    private 'ssl_option'?: string;
    private 'job_id'?: string;
    private 'order_id'?: string;
    private 'charge_info'?: ChargeInfoResult;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateInstanceResponse {
        this['id'] = id;
        return this;
    }
    public withDatastore(datastore: DatastoreResult): CreateInstanceResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withName(name: string): CreateInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withCreated(created: string): CreateInstanceResponse {
        this['created'] = created;
        return this;
    }
    public withStatus(status: string): CreateInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): CreateInstanceResponse {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateInstanceResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): CreateInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withMode(mode: string): CreateInstanceResponse {
        this['mode'] = mode;
        return this;
    }
    public withFlavor(flavor: Array<CreateInstanceFlavorResult>): CreateInstanceResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withBackupStrategy(backupStrategy: BackupStrategyResult): CreateInstanceResponse {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: BackupStrategyResult  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): BackupStrategyResult | undefined {
        return this['backup_strategy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDedicatedResourceId(dedicatedResourceId: string): CreateInstanceResponse {
        this['dedicated_resource_id'] = dedicatedResourceId;
        return this;
    }
    public set dedicatedResourceId(dedicatedResourceId: string  | undefined) {
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public get dedicatedResourceId(): string | undefined {
        return this['dedicated_resource_id'];
    }
    public withSslOption(sslOption: string): CreateInstanceResponse {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: string  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): string | undefined {
        return this['ssl_option'];
    }
    public withJobId(jobId: string): CreateInstanceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOrderId(orderId: string): CreateInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withChargeInfo(chargeInfo: ChargeInfoResult): CreateInstanceResponse {
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