import { InstanceIpInfo } from './InstanceIpInfo';


export class InstanceInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public ips?: Array<InstanceIpInfo>;
    private 'expire_time'?: number;
    private 'service_bandwidth'?: number;
    private 'instance_status'?: number;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): InstanceInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withIps(ips: Array<InstanceIpInfo>): InstanceInfo {
        this['ips'] = ips;
        return this;
    }
    public withExpireTime(expireTime: number): InstanceInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withServiceBandwidth(serviceBandwidth: number): InstanceInfo {
        this['service_bandwidth'] = serviceBandwidth;
        return this;
    }
    public set serviceBandwidth(serviceBandwidth: number  | undefined) {
        this['service_bandwidth'] = serviceBandwidth;
    }
    public get serviceBandwidth(): number | undefined {
        return this['service_bandwidth'];
    }
    public withInstanceStatus(instanceStatus: number): InstanceInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: number  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): number | undefined {
        return this['instance_status'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}