import { NovaCreateKeypairRequestBody } from './NovaCreateKeypairRequestBody';


export class NovaCreateKeypairRequest {
    private 'OpenStack-API-Version'?: string | undefined;
    public body?: NovaCreateKeypairRequestBody;
    public constructor() { 
    }
    public withOpenStackAPIVersion(openStackAPIVersion: string): NovaCreateKeypairRequest {
        this['OpenStack-API-Version'] = openStackAPIVersion;
        return this;
    }
    public set openStackAPIVersion(openStackAPIVersion: string | undefined) {
        this['OpenStack-API-Version'] = openStackAPIVersion;
    }
    public get openStackAPIVersion() {
        return this['OpenStack-API-Version'];
    }
    public withBody(body: NovaCreateKeypairRequestBody): NovaCreateKeypairRequest {
        this['body'] = body;
        return this;
    }
}