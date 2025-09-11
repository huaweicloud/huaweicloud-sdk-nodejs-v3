
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKmsKeyDetailResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'key_alias'?: string;
    private 'domain_id'?: string;
    private 'key_state'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): ShowKmsKeyDetailResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeyAlias(keyAlias: string): ShowKmsKeyDetailResponse {
        this['key_alias'] = keyAlias;
        return this;
    }
    public set keyAlias(keyAlias: string  | undefined) {
        this['key_alias'] = keyAlias;
    }
    public get keyAlias(): string | undefined {
        return this['key_alias'];
    }
    public withDomainId(domainId: string): ShowKmsKeyDetailResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withKeyState(keyState: string): ShowKmsKeyDetailResponse {
        this['key_state'] = keyState;
        return this;
    }
    public set keyState(keyState: string  | undefined) {
        this['key_state'] = keyState;
    }
    public get keyState(): string | undefined {
        return this['key_state'];
    }
}