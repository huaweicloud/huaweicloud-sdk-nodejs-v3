
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLogStreamResponse extends SdkResponse {
    private 'creation_time'?: number;
    private 'log_topic_name'?: string;
    private 'log_topic_id'?: string;
    private 'ttl_in_days'?: UpdateLogStreamResponseTtlInDaysEnum | number;
    public constructor() { 
        super();
    }
    public withCreationTime(creationTime: number): UpdateLogStreamResponse {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): number | undefined {
        return this['creation_time'];
    }
    public withLogTopicName(logTopicName: string): UpdateLogStreamResponse {
        this['log_topic_name'] = logTopicName;
        return this;
    }
    public set logTopicName(logTopicName: string  | undefined) {
        this['log_topic_name'] = logTopicName;
    }
    public get logTopicName(): string | undefined {
        return this['log_topic_name'];
    }
    public withLogTopicId(logTopicId: string): UpdateLogStreamResponse {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string  | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId(): string | undefined {
        return this['log_topic_id'];
    }
    public withTtlInDays(ttlInDays: UpdateLogStreamResponseTtlInDaysEnum | number): UpdateLogStreamResponse {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: UpdateLogStreamResponseTtlInDaysEnum | number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): UpdateLogStreamResponseTtlInDaysEnum | number | undefined {
        return this['ttl_in_days'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateLogStreamResponseTtlInDaysEnum {
    NUMBER_7 = 7
}
