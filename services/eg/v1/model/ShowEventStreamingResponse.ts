import { EventStreamingCreateReq } from './EventStreamingCreateReq';
import { EventStreamingCreateReqRuleConfig } from './EventStreamingCreateReqRuleConfig';
import { EventStreamingSink } from './EventStreamingSink';
import { EventStreamingSource } from './EventStreamingSource';
import { RunOption } from './RunOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEventStreamingResponse extends SdkResponse {
    public name?: string;
    public description?: string;
    public source?: EventStreamingSource;
    public sink?: EventStreamingSink;
    private 'rule_config'?: EventStreamingCreateReqRuleConfig;
    public option?: RunOption;
    public status?: ShowEventStreamingResponseStatusEnum | string;
    public id?: string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor(name?: string, source?: EventStreamingSource, sink?: EventStreamingSink) { 
        super();
        this['name'] = name;
        this['source'] = source;
        this['sink'] = sink;
    }
    public withName(name: string): ShowEventStreamingResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowEventStreamingResponse {
        this['description'] = description;
        return this;
    }
    public withSource(source: EventStreamingSource): ShowEventStreamingResponse {
        this['source'] = source;
        return this;
    }
    public withSink(sink: EventStreamingSink): ShowEventStreamingResponse {
        this['sink'] = sink;
        return this;
    }
    public withRuleConfig(ruleConfig: EventStreamingCreateReqRuleConfig): ShowEventStreamingResponse {
        this['rule_config'] = ruleConfig;
        return this;
    }
    public set ruleConfig(ruleConfig: EventStreamingCreateReqRuleConfig  | undefined) {
        this['rule_config'] = ruleConfig;
    }
    public get ruleConfig(): EventStreamingCreateReqRuleConfig | undefined {
        return this['rule_config'];
    }
    public withOption(option: RunOption): ShowEventStreamingResponse {
        this['option'] = option;
        return this;
    }
    public withStatus(status: ShowEventStreamingResponseStatusEnum | string): ShowEventStreamingResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): ShowEventStreamingResponse {
        this['id'] = id;
        return this;
    }
    public withCreatedTime(createdTime: string): ShowEventStreamingResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): ShowEventStreamingResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withXRequestId(xRequestId: string): ShowEventStreamingResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEventStreamingResponseStatusEnum {
    CREATED = 'CREATED',
    RUNNING = 'RUNNING',
    ERROR = 'ERROR',
    STOPPED = 'STOPPED'
}
