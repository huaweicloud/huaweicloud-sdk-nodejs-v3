import { UpdatePrimaryRegionRequestBody } from './UpdatePrimaryRegionRequestBody';


export class UpdatePrimaryRegionRequest {
    private 'key_id'?: string;
    public body?: UpdatePrimaryRegionRequestBody;
    public constructor(keyId?: string) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): UpdatePrimaryRegionRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withBody(body: UpdatePrimaryRegionRequestBody): UpdatePrimaryRegionRequest {
        this['body'] = body;
        return this;
    }
}