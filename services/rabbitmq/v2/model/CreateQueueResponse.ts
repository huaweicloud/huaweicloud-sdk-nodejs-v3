
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateQueueResponse extends SdkResponse {
    public name?: string;
    private 'auto_delete'?: boolean;
    public durable?: boolean;
    private 'dead_letter_exchange'?: string;
    private 'dead_letter_routing_key'?: string;
    private 'message_ttl'?: number;
    private 'lazy_mode'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateQueueResponse {
        this['name'] = name;
        return this;
    }
    public withAutoDelete(autoDelete: boolean): CreateQueueResponse {
        this['auto_delete'] = autoDelete;
        return this;
    }
    public set autoDelete(autoDelete: boolean  | undefined) {
        this['auto_delete'] = autoDelete;
    }
    public get autoDelete(): boolean | undefined {
        return this['auto_delete'];
    }
    public withDurable(durable: boolean): CreateQueueResponse {
        this['durable'] = durable;
        return this;
    }
    public withDeadLetterExchange(deadLetterExchange: string): CreateQueueResponse {
        this['dead_letter_exchange'] = deadLetterExchange;
        return this;
    }
    public set deadLetterExchange(deadLetterExchange: string  | undefined) {
        this['dead_letter_exchange'] = deadLetterExchange;
    }
    public get deadLetterExchange(): string | undefined {
        return this['dead_letter_exchange'];
    }
    public withDeadLetterRoutingKey(deadLetterRoutingKey: string): CreateQueueResponse {
        this['dead_letter_routing_key'] = deadLetterRoutingKey;
        return this;
    }
    public set deadLetterRoutingKey(deadLetterRoutingKey: string  | undefined) {
        this['dead_letter_routing_key'] = deadLetterRoutingKey;
    }
    public get deadLetterRoutingKey(): string | undefined {
        return this['dead_letter_routing_key'];
    }
    public withMessageTtl(messageTtl: number): CreateQueueResponse {
        this['message_ttl'] = messageTtl;
        return this;
    }
    public set messageTtl(messageTtl: number  | undefined) {
        this['message_ttl'] = messageTtl;
    }
    public get messageTtl(): number | undefined {
        return this['message_ttl'];
    }
    public withLazyMode(lazyMode: string): CreateQueueResponse {
        this['lazy_mode'] = lazyMode;
        return this;
    }
    public set lazyMode(lazyMode: string  | undefined) {
        this['lazy_mode'] = lazyMode;
    }
    public get lazyMode(): string | undefined {
        return this['lazy_mode'];
    }
}