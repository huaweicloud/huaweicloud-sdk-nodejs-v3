
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ReplicateKeyResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'domain_id'?: string;
    public region?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): ReplicateKeyResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withDomainId(domainId: string): ReplicateKeyResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegion(region: string): ReplicateKeyResponse {
        this['region'] = region;
        return this;
    }
}