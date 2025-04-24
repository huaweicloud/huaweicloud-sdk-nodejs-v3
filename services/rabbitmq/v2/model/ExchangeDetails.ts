

export class ExchangeDetails {
    public durable?: boolean;
    private 'default'?: boolean;
    public internal?: boolean;
    private 'arguments'?: object;
    public name?: string;
    private 'auto_delete'?: boolean;
    public type?: string;
    public vhost?: string;
    public constructor() { 
    }
    public withDurable(durable: boolean): ExchangeDetails {
        this['durable'] = durable;
        return this;
    }
    public withDefault(_default: boolean): ExchangeDetails {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withInternal(internal: boolean): ExchangeDetails {
        this['internal'] = internal;
        return this;
    }
    public withArguments(_arguments: object): ExchangeDetails {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: object  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): object | undefined {
        return this['arguments'];
    }
    public withName(name: string): ExchangeDetails {
        this['name'] = name;
        return this;
    }
    public withAutoDelete(autoDelete: boolean): ExchangeDetails {
        this['auto_delete'] = autoDelete;
        return this;
    }
    public set autoDelete(autoDelete: boolean  | undefined) {
        this['auto_delete'] = autoDelete;
    }
    public get autoDelete(): boolean | undefined {
        return this['auto_delete'];
    }
    public withType(type: string): ExchangeDetails {
        this['type'] = type;
        return this;
    }
    public withVhost(vhost: string): ExchangeDetails {
        this['vhost'] = vhost;
        return this;
    }
}