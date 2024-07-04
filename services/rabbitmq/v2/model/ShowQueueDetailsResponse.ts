import { BindingsDetails } from './BindingsDetails';
import { ConsumerDetails } from './ConsumerDetails';
import { QueueArguments } from './QueueArguments';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQueueDetailsResponse extends SdkResponse {
    public vhost?: string;
    public name?: string;
    public durable?: boolean;
    private 'auto_delete'?: boolean;
    public messages?: number;
    public consumers?: number;
    public policy?: string;
    private 'arguments'?: QueueArguments;
    private 'consumer_details'?: Array<ConsumerDetails>;
    private 'queue_bindings'?: Array<BindingsDetails>;
    public constructor() { 
        super();
    }
    public withVhost(vhost: string): ShowQueueDetailsResponse {
        this['vhost'] = vhost;
        return this;
    }
    public withName(name: string): ShowQueueDetailsResponse {
        this['name'] = name;
        return this;
    }
    public withDurable(durable: boolean): ShowQueueDetailsResponse {
        this['durable'] = durable;
        return this;
    }
    public withAutoDelete(autoDelete: boolean): ShowQueueDetailsResponse {
        this['auto_delete'] = autoDelete;
        return this;
    }
    public set autoDelete(autoDelete: boolean  | undefined) {
        this['auto_delete'] = autoDelete;
    }
    public get autoDelete(): boolean | undefined {
        return this['auto_delete'];
    }
    public withMessages(messages: number): ShowQueueDetailsResponse {
        this['messages'] = messages;
        return this;
    }
    public withConsumers(consumers: number): ShowQueueDetailsResponse {
        this['consumers'] = consumers;
        return this;
    }
    public withPolicy(policy: string): ShowQueueDetailsResponse {
        this['policy'] = policy;
        return this;
    }
    public withArguments(_arguments: QueueArguments): ShowQueueDetailsResponse {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: QueueArguments  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): QueueArguments | undefined {
        return this['arguments'];
    }
    public withConsumerDetails(consumerDetails: Array<ConsumerDetails>): ShowQueueDetailsResponse {
        this['consumer_details'] = consumerDetails;
        return this;
    }
    public set consumerDetails(consumerDetails: Array<ConsumerDetails>  | undefined) {
        this['consumer_details'] = consumerDetails;
    }
    public get consumerDetails(): Array<ConsumerDetails> | undefined {
        return this['consumer_details'];
    }
    public withQueueBindings(queueBindings: Array<BindingsDetails>): ShowQueueDetailsResponse {
        this['queue_bindings'] = queueBindings;
        return this;
    }
    public set queueBindings(queueBindings: Array<BindingsDetails>  | undefined) {
        this['queue_bindings'] = queueBindings;
    }
    public get queueBindings(): Array<BindingsDetails> | undefined {
        return this['queue_bindings'];
    }
}