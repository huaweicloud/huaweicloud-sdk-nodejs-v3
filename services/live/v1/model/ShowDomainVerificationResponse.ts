
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainVerificationResponse extends SdkResponse {
    public domain?: string;
    private 'verify_content'?: string;
    private 'verify_result'?: boolean;
    public constructor() { 
        super();
    }
    public withDomain(domain: string): ShowDomainVerificationResponse {
        this['domain'] = domain;
        return this;
    }
    public withVerifyContent(verifyContent: string): ShowDomainVerificationResponse {
        this['verify_content'] = verifyContent;
        return this;
    }
    public set verifyContent(verifyContent: string  | undefined) {
        this['verify_content'] = verifyContent;
    }
    public get verifyContent(): string | undefined {
        return this['verify_content'];
    }
    public withVerifyResult(verifyResult: boolean): ShowDomainVerificationResponse {
        this['verify_result'] = verifyResult;
        return this;
    }
    public set verifyResult(verifyResult: boolean  | undefined) {
        this['verify_result'] = verifyResult;
    }
    public get verifyResult(): boolean | undefined {
        return this['verify_result'];
    }
}