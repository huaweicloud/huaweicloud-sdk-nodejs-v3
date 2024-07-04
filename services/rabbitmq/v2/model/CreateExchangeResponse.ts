
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateExchangeResponse extends SdkResponse {
    public durable?: boolean;
    private 'default'?: boolean;
    public internal?: boolean;
    public name?: string;
    private 'auto_delete'?: boolean;
    public type?: string;
    public vhost?: string;
    public constructor() { 
        super();
    }
    public withDurable(durable: boolean): CreateExchangeResponse {
        this['durable'] = durable;
        return this;
    }
    public withDefault(_default: boolean): CreateExchangeResponse {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withInternal(internal: boolean): CreateExchangeResponse {
        this['internal'] = internal;
        return this;
    }
    public withName(name: string): CreateExchangeResponse {
        this['name'] = name;
        return this;
    }
    public withAutoDelete(autoDelete: boolean): CreateExchangeResponse {
        this['auto_delete'] = autoDelete;
        return this;
    }
    public set autoDelete(autoDelete: boolean  | undefined) {
        this['auto_delete'] = autoDelete;
    }
    public get autoDelete(): boolean | undefined {
        return this['auto_delete'];
    }
    public withType(type: string): CreateExchangeResponse {
        this['type'] = type;
        return this;
    }
    public withVhost(vhost: string): CreateExchangeResponse {
        this['vhost'] = vhost;
        return this;
    }
}