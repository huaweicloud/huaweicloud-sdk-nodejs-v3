import { IntegerRange } from './IntegerRange';
import { ScheduledPolicy } from './ScheduledPolicy';


export class ScheduledTaskDetail {
    private 'task_id'?: string;
    private 'scaling_group_id'?: string;
    public name?: string;
    private 'scheduled_policy'?: ScheduledPolicy;
    private 'instance_number'?: IntegerRange;
    private 'create_time'?: string;
    private 'tenant_id'?: string;
    private 'domain_id'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): ScheduledTaskDetail {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withScalingGroupId(scalingGroupId: string): ScheduledTaskDetail {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withName(name: string): ScheduledTaskDetail {
        this['name'] = name;
        return this;
    }
    public withScheduledPolicy(scheduledPolicy: ScheduledPolicy): ScheduledTaskDetail {
        this['scheduled_policy'] = scheduledPolicy;
        return this;
    }
    public set scheduledPolicy(scheduledPolicy: ScheduledPolicy  | undefined) {
        this['scheduled_policy'] = scheduledPolicy;
    }
    public get scheduledPolicy(): ScheduledPolicy | undefined {
        return this['scheduled_policy'];
    }
    public withInstanceNumber(instanceNumber: IntegerRange): ScheduledTaskDetail {
        this['instance_number'] = instanceNumber;
        return this;
    }
    public set instanceNumber(instanceNumber: IntegerRange  | undefined) {
        this['instance_number'] = instanceNumber;
    }
    public get instanceNumber(): IntegerRange | undefined {
        return this['instance_number'];
    }
    public withCreateTime(createTime: string): ScheduledTaskDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withTenantId(tenantId: string): ScheduledTaskDetail {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withDomainId(domainId: string): ScheduledTaskDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withUpdateTime(updateTime: string): ScheduledTaskDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}