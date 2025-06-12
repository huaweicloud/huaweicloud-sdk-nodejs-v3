

export class CreateExchangeBody {
    public name?: string;
    public type?: string;
    public durable?: boolean;
    private 'auto_delete'?: boolean;
    public internal?: boolean;
    private 'arguments'?: object;
    public constructor(name?: string, type?: string, autoDelete?: boolean) { 
        this['name'] = name;
        this['type'] = type;
        this['auto_delete'] = autoDelete;
    }
    public withName(name: string): CreateExchangeBody {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateExchangeBody {
        this['type'] = type;
        return this;
    }
    public withDurable(durable: boolean): CreateExchangeBody {
        this['durable'] = durable;
        return this;
    }
    public withAutoDelete(autoDelete: boolean): CreateExchangeBody {
        this['auto_delete'] = autoDelete;
        return this;
    }
    public set autoDelete(autoDelete: boolean  | undefined) {
        this['auto_delete'] = autoDelete;
    }
    public get autoDelete(): boolean | undefined {
        return this['auto_delete'];
    }
    public withInternal(internal: boolean): CreateExchangeBody {
        this['internal'] = internal;
        return this;
    }
    public withArguments(_arguments: object): CreateExchangeBody {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: object  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): object | undefined {
        return this['arguments'];
    }
}