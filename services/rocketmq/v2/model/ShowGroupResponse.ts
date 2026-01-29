
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupResponse extends SdkResponse {
    public enabled?: boolean;
    public broadcast?: boolean;
    public brokers?: Array<string>;
    public name?: string;
    private 'group_desc'?: string;
    private 'created_at'?: number;
    private 'retry_max_time'?: number;
    public permissions?: Array<string>;
    private 'consume_orderly'?: boolean;
    private 'group_online'?: boolean;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowGroupResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withBroadcast(broadcast: boolean): ShowGroupResponse {
        this['broadcast'] = broadcast;
        return this;
    }
    public withBrokers(brokers: Array<string>): ShowGroupResponse {
        this['brokers'] = brokers;
        return this;
    }
    public withName(name: string): ShowGroupResponse {
        this['name'] = name;
        return this;
    }
    public withGroupDesc(groupDesc: string): ShowGroupResponse {
        this['group_desc'] = groupDesc;
        return this;
    }
    public set groupDesc(groupDesc: string  | undefined) {
        this['group_desc'] = groupDesc;
    }
    public get groupDesc(): string | undefined {
        return this['group_desc'];
    }
    public withCreatedAt(createdAt: number): ShowGroupResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withRetryMaxTime(retryMaxTime: number): ShowGroupResponse {
        this['retry_max_time'] = retryMaxTime;
        return this;
    }
    public set retryMaxTime(retryMaxTime: number  | undefined) {
        this['retry_max_time'] = retryMaxTime;
    }
    public get retryMaxTime(): number | undefined {
        return this['retry_max_time'];
    }
    public withPermissions(permissions: Array<string>): ShowGroupResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withConsumeOrderly(consumeOrderly: boolean): ShowGroupResponse {
        this['consume_orderly'] = consumeOrderly;
        return this;
    }
    public set consumeOrderly(consumeOrderly: boolean  | undefined) {
        this['consume_orderly'] = consumeOrderly;
    }
    public get consumeOrderly(): boolean | undefined {
        return this['consume_orderly'];
    }
    public withGroupOnline(groupOnline: boolean): ShowGroupResponse {
        this['group_online'] = groupOnline;
        return this;
    }
    public set groupOnline(groupOnline: boolean  | undefined) {
        this['group_online'] = groupOnline;
    }
    public get groupOnline(): boolean | undefined {
        return this['group_online'];
    }
}