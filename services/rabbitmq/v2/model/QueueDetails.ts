import { QueueArguments } from './QueueArguments';


export class QueueDetails {
    public vhost?: string;
    public name?: string;
    public durable?: boolean;
    private 'auto_delete'?: boolean;
    public messages?: number;
    public consumers?: number;
    public policy?: string;
    private 'arguments'?: QueueArguments;
    public constructor() { 
    }
    public withVhost(vhost: string): QueueDetails {
        this['vhost'] = vhost;
        return this;
    }
    public withName(name: string): QueueDetails {
        this['name'] = name;
        return this;
    }
    public withDurable(durable: boolean): QueueDetails {
        this['durable'] = durable;
        return this;
    }
    public withAutoDelete(autoDelete: boolean): QueueDetails {
        this['auto_delete'] = autoDelete;
        return this;
    }
    public set autoDelete(autoDelete: boolean  | undefined) {
        this['auto_delete'] = autoDelete;
    }
    public get autoDelete(): boolean | undefined {
        return this['auto_delete'];
    }
    public withMessages(messages: number): QueueDetails {
        this['messages'] = messages;
        return this;
    }
    public withConsumers(consumers: number): QueueDetails {
        this['consumers'] = consumers;
        return this;
    }
    public withPolicy(policy: string): QueueDetails {
        this['policy'] = policy;
        return this;
    }
    public withArguments(_arguments: QueueArguments): QueueDetails {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: QueueArguments  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): QueueArguments | undefined {
        return this['arguments'];
    }
}