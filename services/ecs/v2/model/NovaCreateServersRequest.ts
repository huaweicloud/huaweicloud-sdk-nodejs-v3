import { NovaCreateServersRequestBody } from './NovaCreateServersRequestBody';


export class NovaCreateServersRequest {
    private 'OpenStack-API-Version'?: string | undefined;
    public body?: NovaCreateServersRequestBody;
    public constructor() { 
    }
    public withOpenStackAPIVersion(openStackAPIVersion: string): NovaCreateServersRequest {
        this['OpenStack-API-Version'] = openStackAPIVersion;
        return this;
    }
    public set openStackAPIVersion(openStackAPIVersion: string | undefined) {
        this['OpenStack-API-Version'] = openStackAPIVersion;
    }
    public get openStackAPIVersion() {
        return this['OpenStack-API-Version'];
    }
    public withBody(body: NovaCreateServersRequestBody): NovaCreateServersRequest {
        this['body'] = body;
        return this;
    }
}