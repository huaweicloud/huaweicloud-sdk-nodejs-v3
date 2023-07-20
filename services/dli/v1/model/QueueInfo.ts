import { QueueScalingPoliciesResponse } from './QueueScalingPoliciesResponse';


export class QueueInfo {
    private 'queue_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'queue_type'?: string;
    private 'queue_scaling_policies'?: Array<QueueScalingPoliciesResponse>;
    public owner?: string;
    private 'create_time'?: number;
    public engine?: string;
    public constructor() { 
    }
    public withQueueName(queueName: string): QueueInfo {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QueueInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withQueueType(queueType: string): QueueInfo {
        this['queue_type'] = queueType;
        return this;
    }
    public set queueType(queueType: string  | undefined) {
        this['queue_type'] = queueType;
    }
    public get queueType(): string | undefined {
        return this['queue_type'];
    }
    public withQueueScalingPolicies(queueScalingPolicies: Array<QueueScalingPoliciesResponse>): QueueInfo {
        this['queue_scaling_policies'] = queueScalingPolicies;
        return this;
    }
    public set queueScalingPolicies(queueScalingPolicies: Array<QueueScalingPoliciesResponse>  | undefined) {
        this['queue_scaling_policies'] = queueScalingPolicies;
    }
    public get queueScalingPolicies(): Array<QueueScalingPoliciesResponse> | undefined {
        return this['queue_scaling_policies'];
    }
    public withOwner(owner: string): QueueInfo {
        this['owner'] = owner;
        return this;
    }
    public withCreateTime(createTime: number): QueueInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withEngine(engine: string): QueueInfo {
        this['engine'] = engine;
        return this;
    }
}