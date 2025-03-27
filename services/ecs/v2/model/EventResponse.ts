import { EventResponseExecuteOptions } from './EventResponseExecuteOptions';
import { EventResponseSource } from './EventResponseSource';


export class EventResponse {
    public id?: string;
    public type?: string;
    public state?: string;
    private 'publish_time'?: string;
    private 'start_time'?: string;
    private 'finish_time'?: string;
    private 'not_before'?: string;
    private 'not_after'?: string;
    private 'not_before_deadline'?: string;
    public description?: string;
    private 'instance_id'?: string;
    private 'execute_options'?: EventResponseExecuteOptions;
    public source?: EventResponseSource;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): EventResponse {
        this['id'] = id;
        return this;
    }
    public withType(type: string): EventResponse {
        this['type'] = type;
        return this;
    }
    public withState(state: string): EventResponse {
        this['state'] = state;
        return this;
    }
    public withPublishTime(publishTime: string): EventResponse {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: string  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): string | undefined {
        return this['publish_time'];
    }
    public withStartTime(startTime: string): EventResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): EventResponse {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withNotBefore(notBefore: string): EventResponse {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: string  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): string | undefined {
        return this['not_before'];
    }
    public withNotAfter(notAfter: string): EventResponse {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: string  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): string | undefined {
        return this['not_after'];
    }
    public withNotBeforeDeadline(notBeforeDeadline: string): EventResponse {
        this['not_before_deadline'] = notBeforeDeadline;
        return this;
    }
    public set notBeforeDeadline(notBeforeDeadline: string  | undefined) {
        this['not_before_deadline'] = notBeforeDeadline;
    }
    public get notBeforeDeadline(): string | undefined {
        return this['not_before_deadline'];
    }
    public withDescription(description: string): EventResponse {
        this['description'] = description;
        return this;
    }
    public withInstanceId(instanceId: string): EventResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withExecuteOptions(executeOptions: EventResponseExecuteOptions): EventResponse {
        this['execute_options'] = executeOptions;
        return this;
    }
    public set executeOptions(executeOptions: EventResponseExecuteOptions  | undefined) {
        this['execute_options'] = executeOptions;
    }
    public get executeOptions(): EventResponseExecuteOptions | undefined {
        return this['execute_options'];
    }
    public withSource(source: EventResponseSource): EventResponse {
        this['source'] = source;
        return this;
    }
}