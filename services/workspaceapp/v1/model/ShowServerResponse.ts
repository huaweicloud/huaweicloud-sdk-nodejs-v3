import { AppServer } from './AppServer';
import { AppServerStatus } from './AppServerStatus';
import { AppServerTaskStatus } from './AppServerTaskStatus';
import { BaseServer } from './BaseServer';
import { CbcFreezeInfo } from './CbcFreezeInfo';
import { EcsNetWork } from './EcsNetWork';
import { Flavor } from './Flavor';
import { JobStatus } from './JobStatus';
import { JobType } from './JobType';
import { ProductInfo } from './ProductInfo';
import { ServerAddress } from './ServerAddress';
import { ServerSecurityGroup } from './ServerSecurityGroup';
import { ServerStatus } from './ServerStatus';
import { TmsTag } from './TmsTag';
import { VolumeDetail } from './VolumeDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'machine_name'?: string;
    public description?: string;
    private 'server_group_id'?: string;
    public flavor?: Flavor;
    public status?: ServerStatus;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'image_id'?: string;
    private 'availability_zone'?: string;
    public domain?: string;
    private 'ou_name'?: string;
    public sid?: string;
    private 'instance_id'?: string;
    private 'os_version'?: string;
    private 'os_type'?: string;
    private 'order_id'?: string;
    private 'maintain_status'?: boolean;
    private 'scaling_auto_create'?: boolean;
    private 'job_id'?: string;
    private 'job_type'?: JobType;
    private 'job_status'?: JobStatus;
    private 'job_time'?: Date;
    private 'resource_pool_id'?: string;
    private 'resource_pool_type'?: string;
    private 'host_id'?: string;
    private 'server_group_name'?: string;
    private 'product_info'?: ProductInfo;
    public metadata?: { [key: string]: string; };
    private 'session_count'?: number;
    private 'vm_status'?: AppServerStatus;
    private 'task_status'?: AppServerTaskStatus;
    public freeze?: Array<CbcFreezeInfo>;
    private 'host_address'?: Array<EcsNetWork>;
    private 'enterprise_project_id'?: string;
    public tags?: Array<TmsTag>;
    public addresses?: { [key: string]: Array<ServerAddress>; };
    private 'root_volume'?: VolumeDetail;
    private 'data_volumes'?: Array<VolumeDetail>;
    private 'security_groups'?: Array<ServerSecurityGroup>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowServerResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowServerResponse {
        this['name'] = name;
        return this;
    }
    public withMachineName(machineName: string): ShowServerResponse {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withDescription(description: string): ShowServerResponse {
        this['description'] = description;
        return this;
    }
    public withServerGroupId(serverGroupId: string): ShowServerResponse {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withFlavor(flavor: Flavor): ShowServerResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withStatus(status: ServerStatus): ShowServerResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): ShowServerResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ShowServerResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withImageId(imageId: string): ShowServerResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withAvailabilityZone(availabilityZone: string): ShowServerResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withDomain(domain: string): ShowServerResponse {
        this['domain'] = domain;
        return this;
    }
    public withOuName(ouName: string): ShowServerResponse {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withSid(sid: string): ShowServerResponse {
        this['sid'] = sid;
        return this;
    }
    public withInstanceId(instanceId: string): ShowServerResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOsVersion(osVersion: string): ShowServerResponse {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withOsType(osType: string): ShowServerResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOrderId(orderId: string): ShowServerResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withMaintainStatus(maintainStatus: boolean): ShowServerResponse {
        this['maintain_status'] = maintainStatus;
        return this;
    }
    public set maintainStatus(maintainStatus: boolean  | undefined) {
        this['maintain_status'] = maintainStatus;
    }
    public get maintainStatus(): boolean | undefined {
        return this['maintain_status'];
    }
    public withScalingAutoCreate(scalingAutoCreate: boolean): ShowServerResponse {
        this['scaling_auto_create'] = scalingAutoCreate;
        return this;
    }
    public set scalingAutoCreate(scalingAutoCreate: boolean  | undefined) {
        this['scaling_auto_create'] = scalingAutoCreate;
    }
    public get scalingAutoCreate(): boolean | undefined {
        return this['scaling_auto_create'];
    }
    public withJobId(jobId: string): ShowServerResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: JobType): ShowServerResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobType | undefined {
        return this['job_type'];
    }
    public withJobStatus(jobStatus: JobStatus): ShowServerResponse {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: JobStatus  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): JobStatus | undefined {
        return this['job_status'];
    }
    public withJobTime(jobTime: Date): ShowServerResponse {
        this['job_time'] = jobTime;
        return this;
    }
    public set jobTime(jobTime: Date  | undefined) {
        this['job_time'] = jobTime;
    }
    public get jobTime(): Date | undefined {
        return this['job_time'];
    }
    public withResourcePoolId(resourcePoolId: string): ShowServerResponse {
        this['resource_pool_id'] = resourcePoolId;
        return this;
    }
    public set resourcePoolId(resourcePoolId: string  | undefined) {
        this['resource_pool_id'] = resourcePoolId;
    }
    public get resourcePoolId(): string | undefined {
        return this['resource_pool_id'];
    }
    public withResourcePoolType(resourcePoolType: string): ShowServerResponse {
        this['resource_pool_type'] = resourcePoolType;
        return this;
    }
    public set resourcePoolType(resourcePoolType: string  | undefined) {
        this['resource_pool_type'] = resourcePoolType;
    }
    public get resourcePoolType(): string | undefined {
        return this['resource_pool_type'];
    }
    public withHostId(hostId: string): ShowServerResponse {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withServerGroupName(serverGroupName: string): ShowServerResponse {
        this['server_group_name'] = serverGroupName;
        return this;
    }
    public set serverGroupName(serverGroupName: string  | undefined) {
        this['server_group_name'] = serverGroupName;
    }
    public get serverGroupName(): string | undefined {
        return this['server_group_name'];
    }
    public withProductInfo(productInfo: ProductInfo): ShowServerResponse {
        this['product_info'] = productInfo;
        return this;
    }
    public set productInfo(productInfo: ProductInfo  | undefined) {
        this['product_info'] = productInfo;
    }
    public get productInfo(): ProductInfo | undefined {
        return this['product_info'];
    }
    public withMetadata(metadata: { [key: string]: string; }): ShowServerResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSessionCount(sessionCount: number): ShowServerResponse {
        this['session_count'] = sessionCount;
        return this;
    }
    public set sessionCount(sessionCount: number  | undefined) {
        this['session_count'] = sessionCount;
    }
    public get sessionCount(): number | undefined {
        return this['session_count'];
    }
    public withVmStatus(vmStatus: AppServerStatus): ShowServerResponse {
        this['vm_status'] = vmStatus;
        return this;
    }
    public set vmStatus(vmStatus: AppServerStatus  | undefined) {
        this['vm_status'] = vmStatus;
    }
    public get vmStatus(): AppServerStatus | undefined {
        return this['vm_status'];
    }
    public withTaskStatus(taskStatus: AppServerTaskStatus): ShowServerResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: AppServerTaskStatus  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): AppServerTaskStatus | undefined {
        return this['task_status'];
    }
    public withFreeze(freeze: Array<CbcFreezeInfo>): ShowServerResponse {
        this['freeze'] = freeze;
        return this;
    }
    public withHostAddress(hostAddress: Array<EcsNetWork>): ShowServerResponse {
        this['host_address'] = hostAddress;
        return this;
    }
    public set hostAddress(hostAddress: Array<EcsNetWork>  | undefined) {
        this['host_address'] = hostAddress;
    }
    public get hostAddress(): Array<EcsNetWork> | undefined {
        return this['host_address'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowServerResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<TmsTag>): ShowServerResponse {
        this['tags'] = tags;
        return this;
    }
    public withAddresses(addresses: { [key: string]: Array<ServerAddress>; }): ShowServerResponse {
        this['addresses'] = addresses;
        return this;
    }
    public withRootVolume(rootVolume: VolumeDetail): ShowServerResponse {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: VolumeDetail  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): VolumeDetail | undefined {
        return this['root_volume'];
    }
    public withDataVolumes(dataVolumes: Array<VolumeDetail>): ShowServerResponse {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<VolumeDetail>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<VolumeDetail> | undefined {
        return this['data_volumes'];
    }
    public withSecurityGroups(securityGroups: Array<ServerSecurityGroup>): ShowServerResponse {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<ServerSecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<ServerSecurityGroup> | undefined {
        return this['security_groups'];
    }
}