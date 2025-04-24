import { EventStreamingCreateReq } from './EventStreamingCreateReq';
import { EventStreamingCreateReqRuleConfig } from './EventStreamingCreateReqRuleConfig';
import { EventStreamingSink } from './EventStreamingSink';
import { EventStreamingSource } from './EventStreamingSource';
import { RunOption } from './RunOption';


export class EventStreamingDetail {
    public name?: string;
    public description?: string;
    public source?: EventStreamingSource;
    public sink?: EventStreamingSink;
    private 'rule_config'?: EventStreamingCreateReqRuleConfig;
    public option?: RunOption;
    public status?: EventStreamingDetailStatusEnum | string;
    public id?: string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public constructor(name?: string, source?: EventStreamingSource, sink?: EventStreamingSink) { 
        this['name'] = name;
        this['source'] = source;
        this['sink'] = sink;
    }
    public withName(name: string): EventStreamingDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EventStreamingDetail {
        this['description'] = description;
        return this;
    }
    public withSource(source: EventStreamingSource): EventStreamingDetail {
        this['source'] = source;
        return this;
    }
    public withSink(sink: EventStreamingSink): EventStreamingDetail {
        this['sink'] = sink;
        return this;
    }
    public withRuleConfig(ruleConfig: EventStreamingCreateReqRuleConfig): EventStreamingDetail {
        this['rule_config'] = ruleConfig;
        return this;
    }
    public set ruleConfig(ruleConfig: EventStreamingCreateReqRuleConfig  | undefined) {
        this['rule_config'] = ruleConfig;
    }
    public get ruleConfig(): EventStreamingCreateReqRuleConfig | undefined {
        return this['rule_config'];
    }
    public withOption(option: RunOption): EventStreamingDetail {
        this['option'] = option;
        return this;
    }
    public withStatus(status: EventStreamingDetailStatusEnum | string): EventStreamingDetail {
        this['status'] = status;
        return this;
    }
    public withId(id: string): EventStreamingDetail {
        this['id'] = id;
        return this;
    }
    public withCreatedTime(createdTime: string): EventStreamingDetail {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): EventStreamingDetail {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventStreamingDetailStatusEnum {
    CREATED = 'CREATED',
    RUNNING = 'RUNNING',
    ERROR = 'ERROR',
    STOPPED = 'STOPPED'
}
