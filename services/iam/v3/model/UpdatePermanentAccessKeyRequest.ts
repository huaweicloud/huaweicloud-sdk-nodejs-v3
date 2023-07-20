import { UpdatePermanentAccessKeyRequestBody } from './UpdatePermanentAccessKeyRequestBody';


export class UpdatePermanentAccessKeyRequest {
    private 'access_key'?: string;
    public body?: UpdatePermanentAccessKeyRequestBody;
    public constructor(accessKey?: string) { 
        this['access_key'] = accessKey;
    }
    public withAccessKey(accessKey: string): UpdatePermanentAccessKeyRequest {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withBody(body: UpdatePermanentAccessKeyRequestBody): UpdatePermanentAccessKeyRequest {
        this['body'] = body;
        return this;
    }
}