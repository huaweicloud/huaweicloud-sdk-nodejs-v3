import { EipMetaData } from './EipMetaData';
import { JobRecords } from './JobRecords';


export class ScalingPolicyExecuteLogList {
    public status?: ScalingPolicyExecuteLogListStatusEnum | string;
    private 'failed_reason'?: string;
    private 'execute_type'?: ScalingPolicyExecuteLogListExecuteTypeEnum | string;
    private 'execute_time'?: string;
    public id?: string;
    private 'tenant_id'?: string;
    private 'scaling_policy_id'?: string;
    private 'scaling_resource_type'?: ScalingPolicyExecuteLogListScalingResourceTypeEnum | string;
    private 'scaling_resource_id'?: string;
    private 'old_value'?: string;
    private 'desire_value'?: string;
    private 'limit_value'?: string;
    public type?: ScalingPolicyExecuteLogListTypeEnum | string;
    private 'job_records'?: Array<JobRecords>;
    private 'meta_data'?: EipMetaData;
    public constructor() { 
    }
    public withStatus(status: ScalingPolicyExecuteLogListStatusEnum | string): ScalingPolicyExecuteLogList {
        this['status'] = status;
        return this;
    }
    public withFailedReason(failedReason: string): ScalingPolicyExecuteLogList {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withExecuteType(executeType: ScalingPolicyExecuteLogListExecuteTypeEnum | string): ScalingPolicyExecuteLogList {
        this['execute_type'] = executeType;
        return this;
    }
    public set executeType(executeType: ScalingPolicyExecuteLogListExecuteTypeEnum | string  | undefined) {
        this['execute_type'] = executeType;
    }
    public get executeType(): ScalingPolicyExecuteLogListExecuteTypeEnum | string | undefined {
        return this['execute_type'];
    }
    public withExecuteTime(executeTime: string): ScalingPolicyExecuteLogList {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: string  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): string | undefined {
        return this['execute_time'];
    }
    public withId(id: string): ScalingPolicyExecuteLogList {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ScalingPolicyExecuteLogList {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withScalingPolicyId(scalingPolicyId: string): ScalingPolicyExecuteLogList {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withScalingResourceType(scalingResourceType: ScalingPolicyExecuteLogListScalingResourceTypeEnum | string): ScalingPolicyExecuteLogList {
        this['scaling_resource_type'] = scalingResourceType;
        return this;
    }
    public set scalingResourceType(scalingResourceType: ScalingPolicyExecuteLogListScalingResourceTypeEnum | string  | undefined) {
        this['scaling_resource_type'] = scalingResourceType;
    }
    public get scalingResourceType(): ScalingPolicyExecuteLogListScalingResourceTypeEnum | string | undefined {
        return this['scaling_resource_type'];
    }
    public withScalingResourceId(scalingResourceId: string): ScalingPolicyExecuteLogList {
        this['scaling_resource_id'] = scalingResourceId;
        return this;
    }
    public set scalingResourceId(scalingResourceId: string  | undefined) {
        this['scaling_resource_id'] = scalingResourceId;
    }
    public get scalingResourceId(): string | undefined {
        return this['scaling_resource_id'];
    }
    public withOldValue(oldValue: string): ScalingPolicyExecuteLogList {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
    public withDesireValue(desireValue: string): ScalingPolicyExecuteLogList {
        this['desire_value'] = desireValue;
        return this;
    }
    public set desireValue(desireValue: string  | undefined) {
        this['desire_value'] = desireValue;
    }
    public get desireValue(): string | undefined {
        return this['desire_value'];
    }
    public withLimitValue(limitValue: string): ScalingPolicyExecuteLogList {
        this['limit_value'] = limitValue;
        return this;
    }
    public set limitValue(limitValue: string  | undefined) {
        this['limit_value'] = limitValue;
    }
    public get limitValue(): string | undefined {
        return this['limit_value'];
    }
    public withType(type: ScalingPolicyExecuteLogListTypeEnum | string): ScalingPolicyExecuteLogList {
        this['type'] = type;
        return this;
    }
    public withJobRecords(jobRecords: Array<JobRecords>): ScalingPolicyExecuteLogList {
        this['job_records'] = jobRecords;
        return this;
    }
    public set jobRecords(jobRecords: Array<JobRecords>  | undefined) {
        this['job_records'] = jobRecords;
    }
    public get jobRecords(): Array<JobRecords> | undefined {
        return this['job_records'];
    }
    public withMetaData(metaData: EipMetaData): ScalingPolicyExecuteLogList {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: EipMetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): EipMetaData | undefined {
        return this['meta_data'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScalingPolicyExecuteLogListStatusEnum {
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    EXECUTING = 'EXECUTING'
}
/**
    * @export
    * @enum {string}
    */
export enum ScalingPolicyExecuteLogListExecuteTypeEnum {
    SCHEDULE = 'SCHEDULE',
    RECURRENCE = 'RECURRENCE',
    ALARM = 'ALARM',
    MANUAL = 'MANUAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ScalingPolicyExecuteLogListScalingResourceTypeEnum {
    SCALING_GROUP = 'SCALING_GROUP',
    BANDWIDTH = 'BANDWIDTH'
}
/**
    * @export
    * @enum {string}
    */
export enum ScalingPolicyExecuteLogListTypeEnum {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    SET = 'SET'
}
