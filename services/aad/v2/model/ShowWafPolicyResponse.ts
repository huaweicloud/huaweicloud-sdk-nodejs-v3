import { WafPolicyOptions } from './WafPolicyOptions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWafPolicyResponse extends SdkResponse {
    private 'domain_name'?: string;
    private 'overseas_type'?: number;
    public options?: WafPolicyOptions;
    public level?: number;
    public mode?: number;
    public constructor() { 
        super();
    }
    public withDomainName(domainName: string): ShowWafPolicyResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withOverseasType(overseasType: number): ShowWafPolicyResponse {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: number  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): number | undefined {
        return this['overseas_type'];
    }
    public withOptions(options: WafPolicyOptions): ShowWafPolicyResponse {
        this['options'] = options;
        return this;
    }
    public withLevel(level: number): ShowWafPolicyResponse {
        this['level'] = level;
        return this;
    }
    public withMode(mode: number): ShowWafPolicyResponse {
        this['mode'] = mode;
        return this;
    }
}