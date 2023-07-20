
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopDomainNamesResponse extends SdkResponse {
    private 'top_domain_names'?: Array<{ [key: string]: object; }>;
    public constructor() { 
        super();
    }
    public withTopDomainNames(topDomainNames: Array<{ [key: string]: object; }>): ShowTopDomainNamesResponse {
        this['top_domain_names'] = topDomainNames;
        return this;
    }
    public set topDomainNames(topDomainNames: Array<{ [key: string]: object; }>  | undefined) {
        this['top_domain_names'] = topDomainNames;
    }
    public get topDomainNames(): Array<{ [key: string]: object; }> | undefined {
        return this['top_domain_names'];
    }
}