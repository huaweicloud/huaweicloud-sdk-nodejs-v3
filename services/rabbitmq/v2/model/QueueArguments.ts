

export class QueueArguments {
    private 'x-message-ttl'?: number;
    private 'x-dead-letter-exchange'?: string;
    private 'x-dead-letter-routing-key'?: string;
    private 'x-queue-mode'?: string;
    public constructor() { 
    }
    public withXMessageTtl(xMessageTtl: number): QueueArguments {
        this['x-message-ttl'] = xMessageTtl;
        return this;
    }
    public set xMessageTtl(xMessageTtl: number  | undefined) {
        this['x-message-ttl'] = xMessageTtl;
    }
    public get xMessageTtl(): number | undefined {
        return this['x-message-ttl'];
    }
    public withXDeadLetterExchange(xDeadLetterExchange: string): QueueArguments {
        this['x-dead-letter-exchange'] = xDeadLetterExchange;
        return this;
    }
    public set xDeadLetterExchange(xDeadLetterExchange: string  | undefined) {
        this['x-dead-letter-exchange'] = xDeadLetterExchange;
    }
    public get xDeadLetterExchange(): string | undefined {
        return this['x-dead-letter-exchange'];
    }
    public withXDeadLetterRoutingKey(xDeadLetterRoutingKey: string): QueueArguments {
        this['x-dead-letter-routing-key'] = xDeadLetterRoutingKey;
        return this;
    }
    public set xDeadLetterRoutingKey(xDeadLetterRoutingKey: string  | undefined) {
        this['x-dead-letter-routing-key'] = xDeadLetterRoutingKey;
    }
    public get xDeadLetterRoutingKey(): string | undefined {
        return this['x-dead-letter-routing-key'];
    }
    public withXQueueMode(xQueueMode: string): QueueArguments {
        this['x-queue-mode'] = xQueueMode;
        return this;
    }
    public set xQueueMode(xQueueMode: string  | undefined) {
        this['x-queue-mode'] = xQueueMode;
    }
    public get xQueueMode(): string | undefined {
        return this['x-queue-mode'];
    }
}