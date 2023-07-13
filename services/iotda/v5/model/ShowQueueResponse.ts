
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQueueResponse extends SdkResponse {
    private 'queue_id'?: string | undefined;
    private 'queue_name'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'last_modify_time'?: string | undefined;
    public constructor() { 
        super();
    }
    public withQueueId(queueId: string): ShowQueueResponse {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: string | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId() {
        return this['queue_id'];
    }
    public withQueueName(queueName: string): ShowQueueResponse {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName() {
        return this['queue_name'];
    }
    public withCreateTime(createTime: string): ShowQueueResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withLastModifyTime(lastModifyTime: string): ShowQueueResponse {
        this['last_modify_time'] = lastModifyTime;
        return this;
    }
    public set lastModifyTime(lastModifyTime: string | undefined) {
        this['last_modify_time'] = lastModifyTime;
    }
    public get lastModifyTime() {
        return this['last_modify_time'];
    }
}