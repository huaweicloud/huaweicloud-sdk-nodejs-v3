
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLogGroupResponse extends SdkResponse {
    private 'creation_time'?: number | undefined;
    private 'log_group_name'?: string | undefined;
    private 'log_group_id'?: string | undefined;
    private 'ttl_in_days'?: number | undefined;
    public constructor() { 
        super();
    }
    public withCreationTime(creationTime: number): UpdateLogGroupResponse {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime() {
        return this['creation_time'];
    }
    public withLogGroupName(logGroupName: string): UpdateLogGroupResponse {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withLogGroupId(logGroupId: string): UpdateLogGroupResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withTtlInDays(ttlInDays: number): UpdateLogGroupResponse {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays() {
        return this['ttl_in_days'];
    }
}