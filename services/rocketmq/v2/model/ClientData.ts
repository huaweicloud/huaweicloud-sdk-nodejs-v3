import { Subscription } from './Subscription';


export class ClientData {
    public language?: string;
    public version?: string;
    private 'client_id'?: string;
    private 'client_addr'?: string;
    private 'consume_type'?: ClientDataConsumeTypeEnum | string;
    public subscriptions?: Array<Subscription>;
    public constructor() { 
    }
    public withLanguage(language: string): ClientData {
        this['language'] = language;
        return this;
    }
    public withVersion(version: string): ClientData {
        this['version'] = version;
        return this;
    }
    public withClientId(clientId: string): ClientData {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withClientAddr(clientAddr: string): ClientData {
        this['client_addr'] = clientAddr;
        return this;
    }
    public set clientAddr(clientAddr: string  | undefined) {
        this['client_addr'] = clientAddr;
    }
    public get clientAddr(): string | undefined {
        return this['client_addr'];
    }
    public withConsumeType(consumeType: ClientDataConsumeTypeEnum | string): ClientData {
        this['consume_type'] = consumeType;
        return this;
    }
    public set consumeType(consumeType: ClientDataConsumeTypeEnum | string  | undefined) {
        this['consume_type'] = consumeType;
    }
    public get consumeType(): ClientDataConsumeTypeEnum | string | undefined {
        return this['consume_type'];
    }
    public withSubscriptions(subscriptions: Array<Subscription>): ClientData {
        this['subscriptions'] = subscriptions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClientDataConsumeTypeEnum {
    CONSUME_POP = 'CONSUME_POP',
    CONSUME_PASSIVELY = 'CONSUME_PASSIVELY',
    CONSUME_ACTIVELY = 'CONSUME_ACTIVELY'
}
