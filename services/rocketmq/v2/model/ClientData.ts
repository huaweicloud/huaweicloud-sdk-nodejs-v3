import { Subscription } from './Subscription';


export class ClientData {
    public language?: string;
    public version?: string;
    private 'client_id'?: string | undefined;
    private 'client_addr'?: string | undefined;
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
    public set clientId(clientId: string | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId() {
        return this['client_id'];
    }
    public withClientAddr(clientAddr: string): ClientData {
        this['client_addr'] = clientAddr;
        return this;
    }
    public set clientAddr(clientAddr: string | undefined) {
        this['client_addr'] = clientAddr;
    }
    public get clientAddr() {
        return this['client_addr'];
    }
    public withSubscriptions(subscriptions: Array<Subscription>): ClientData {
        this['subscriptions'] = subscriptions;
        return this;
    }
}