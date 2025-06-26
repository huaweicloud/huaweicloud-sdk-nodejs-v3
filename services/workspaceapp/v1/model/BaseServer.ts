import { Flavor } from './Flavor';
import { JobStatus } from './JobStatus';
import { JobType } from './JobType';
import { ServerStatus } from './ServerStatus';


export class BaseServer {
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
    public constructor() { 
    }
    public withId(id: string): BaseServer {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BaseServer {
        this['name'] = name;
        return this;
    }
    public withMachineName(machineName: string): BaseServer {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withDescription(description: string): BaseServer {
        this['description'] = description;
        return this;
    }
    public withServerGroupId(serverGroupId: string): BaseServer {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withFlavor(flavor: Flavor): BaseServer {
        this['flavor'] = flavor;
        return this;
    }
    public withStatus(status: ServerStatus): BaseServer {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): BaseServer {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): BaseServer {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withImageId(imageId: string): BaseServer {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withAvailabilityZone(availabilityZone: string): BaseServer {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withDomain(domain: string): BaseServer {
        this['domain'] = domain;
        return this;
    }
    public withOuName(ouName: string): BaseServer {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withSid(sid: string): BaseServer {
        this['sid'] = sid;
        return this;
    }
    public withInstanceId(instanceId: string): BaseServer {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOsVersion(osVersion: string): BaseServer {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withOsType(osType: string): BaseServer {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOrderId(orderId: string): BaseServer {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withMaintainStatus(maintainStatus: boolean): BaseServer {
        this['maintain_status'] = maintainStatus;
        return this;
    }
    public set maintainStatus(maintainStatus: boolean  | undefined) {
        this['maintain_status'] = maintainStatus;
    }
    public get maintainStatus(): boolean | undefined {
        return this['maintain_status'];
    }
    public withScalingAutoCreate(scalingAutoCreate: boolean): BaseServer {
        this['scaling_auto_create'] = scalingAutoCreate;
        return this;
    }
    public set scalingAutoCreate(scalingAutoCreate: boolean  | undefined) {
        this['scaling_auto_create'] = scalingAutoCreate;
    }
    public get scalingAutoCreate(): boolean | undefined {
        return this['scaling_auto_create'];
    }
    public withJobId(jobId: string): BaseServer {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: JobType): BaseServer {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobType | undefined {
        return this['job_type'];
    }
    public withJobStatus(jobStatus: JobStatus): BaseServer {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: JobStatus  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): JobStatus | undefined {
        return this['job_status'];
    }
    public withJobTime(jobTime: Date): BaseServer {
        this['job_time'] = jobTime;
        return this;
    }
    public set jobTime(jobTime: Date  | undefined) {
        this['job_time'] = jobTime;
    }
    public get jobTime(): Date | undefined {
        return this['job_time'];
    }
    public withResourcePoolId(resourcePoolId: string): BaseServer {
        this['resource_pool_id'] = resourcePoolId;
        return this;
    }
    public set resourcePoolId(resourcePoolId: string  | undefined) {
        this['resource_pool_id'] = resourcePoolId;
    }
    public get resourcePoolId(): string | undefined {
        return this['resource_pool_id'];
    }
    public withResourcePoolType(resourcePoolType: string): BaseServer {
        this['resource_pool_type'] = resourcePoolType;
        return this;
    }
    public set resourcePoolType(resourcePoolType: string  | undefined) {
        this['resource_pool_type'] = resourcePoolType;
    }
    public get resourcePoolType(): string | undefined {
        return this['resource_pool_type'];
    }
    public withHostId(hostId: string): BaseServer {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}