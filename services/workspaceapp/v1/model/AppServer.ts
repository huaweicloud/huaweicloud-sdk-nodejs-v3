import { AppServerStatus } from './AppServerStatus';
import { AppServerTaskStatus } from './AppServerTaskStatus';
import { BaseServer } from './BaseServer';
import { CbcFreezeInfo } from './CbcFreezeInfo';
import { EcsNetWork } from './EcsNetWork';
import { Flavor } from './Flavor';
import { JobStatus } from './JobStatus';
import { JobType } from './JobType';
import { ProductInfo } from './ProductInfo';
import { ServerStatus } from './ServerStatus';
import { TmsTag } from './TmsTag';


export class AppServer {
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
    public constructor() { 
    }
    public withId(id: string): AppServer {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppServer {
        this['name'] = name;
        return this;
    }
    public withMachineName(machineName: string): AppServer {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withDescription(description: string): AppServer {
        this['description'] = description;
        return this;
    }
    public withServerGroupId(serverGroupId: string): AppServer {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withFlavor(flavor: Flavor): AppServer {
        this['flavor'] = flavor;
        return this;
    }
    public withStatus(status: ServerStatus): AppServer {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): AppServer {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): AppServer {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withImageId(imageId: string): AppServer {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withAvailabilityZone(availabilityZone: string): AppServer {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withDomain(domain: string): AppServer {
        this['domain'] = domain;
        return this;
    }
    public withOuName(ouName: string): AppServer {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withSid(sid: string): AppServer {
        this['sid'] = sid;
        return this;
    }
    public withInstanceId(instanceId: string): AppServer {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOsVersion(osVersion: string): AppServer {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withOsType(osType: string): AppServer {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOrderId(orderId: string): AppServer {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withMaintainStatus(maintainStatus: boolean): AppServer {
        this['maintain_status'] = maintainStatus;
        return this;
    }
    public set maintainStatus(maintainStatus: boolean  | undefined) {
        this['maintain_status'] = maintainStatus;
    }
    public get maintainStatus(): boolean | undefined {
        return this['maintain_status'];
    }
    public withScalingAutoCreate(scalingAutoCreate: boolean): AppServer {
        this['scaling_auto_create'] = scalingAutoCreate;
        return this;
    }
    public set scalingAutoCreate(scalingAutoCreate: boolean  | undefined) {
        this['scaling_auto_create'] = scalingAutoCreate;
    }
    public get scalingAutoCreate(): boolean | undefined {
        return this['scaling_auto_create'];
    }
    public withJobId(jobId: string): AppServer {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: JobType): AppServer {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobType | undefined {
        return this['job_type'];
    }
    public withJobStatus(jobStatus: JobStatus): AppServer {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: JobStatus  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): JobStatus | undefined {
        return this['job_status'];
    }
    public withJobTime(jobTime: Date): AppServer {
        this['job_time'] = jobTime;
        return this;
    }
    public set jobTime(jobTime: Date  | undefined) {
        this['job_time'] = jobTime;
    }
    public get jobTime(): Date | undefined {
        return this['job_time'];
    }
    public withResourcePoolId(resourcePoolId: string): AppServer {
        this['resource_pool_id'] = resourcePoolId;
        return this;
    }
    public set resourcePoolId(resourcePoolId: string  | undefined) {
        this['resource_pool_id'] = resourcePoolId;
    }
    public get resourcePoolId(): string | undefined {
        return this['resource_pool_id'];
    }
    public withResourcePoolType(resourcePoolType: string): AppServer {
        this['resource_pool_type'] = resourcePoolType;
        return this;
    }
    public set resourcePoolType(resourcePoolType: string  | undefined) {
        this['resource_pool_type'] = resourcePoolType;
    }
    public get resourcePoolType(): string | undefined {
        return this['resource_pool_type'];
    }
    public withHostId(hostId: string): AppServer {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withServerGroupName(serverGroupName: string): AppServer {
        this['server_group_name'] = serverGroupName;
        return this;
    }
    public set serverGroupName(serverGroupName: string  | undefined) {
        this['server_group_name'] = serverGroupName;
    }
    public get serverGroupName(): string | undefined {
        return this['server_group_name'];
    }
    public withProductInfo(productInfo: ProductInfo): AppServer {
        this['product_info'] = productInfo;
        return this;
    }
    public set productInfo(productInfo: ProductInfo  | undefined) {
        this['product_info'] = productInfo;
    }
    public get productInfo(): ProductInfo | undefined {
        return this['product_info'];
    }
    public withMetadata(metadata: { [key: string]: string; }): AppServer {
        this['metadata'] = metadata;
        return this;
    }
    public withSessionCount(sessionCount: number): AppServer {
        this['session_count'] = sessionCount;
        return this;
    }
    public set sessionCount(sessionCount: number  | undefined) {
        this['session_count'] = sessionCount;
    }
    public get sessionCount(): number | undefined {
        return this['session_count'];
    }
    public withVmStatus(vmStatus: AppServerStatus): AppServer {
        this['vm_status'] = vmStatus;
        return this;
    }
    public set vmStatus(vmStatus: AppServerStatus  | undefined) {
        this['vm_status'] = vmStatus;
    }
    public get vmStatus(): AppServerStatus | undefined {
        return this['vm_status'];
    }
    public withTaskStatus(taskStatus: AppServerTaskStatus): AppServer {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: AppServerTaskStatus  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): AppServerTaskStatus | undefined {
        return this['task_status'];
    }
    public withFreeze(freeze: Array<CbcFreezeInfo>): AppServer {
        this['freeze'] = freeze;
        return this;
    }
    public withHostAddress(hostAddress: Array<EcsNetWork>): AppServer {
        this['host_address'] = hostAddress;
        return this;
    }
    public set hostAddress(hostAddress: Array<EcsNetWork>  | undefined) {
        this['host_address'] = hostAddress;
    }
    public get hostAddress(): Array<EcsNetWork> | undefined {
        return this['host_address'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AppServer {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<TmsTag>): AppServer {
        this['tags'] = tags;
        return this;
    }
}