
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDomainMappingResponse extends SdkResponse {
    private 'pull_domain'?: string | undefined;
    private 'push_domain'?: string | undefined;
    public constructor() { 
        super();
    }
    public withPullDomain(pullDomain: string): CreateDomainMappingResponse {
        this['pull_domain'] = pullDomain;
        return this;
    }
    public set pullDomain(pullDomain: string | undefined) {
        this['pull_domain'] = pullDomain;
    }
    public get pullDomain() {
        return this['pull_domain'];
    }
    public withPushDomain(pushDomain: string): CreateDomainMappingResponse {
        this['push_domain'] = pushDomain;
        return this;
    }
    public set pushDomain(pushDomain: string | undefined) {
        this['push_domain'] = pushDomain;
    }
    public get pushDomain() {
        return this['push_domain'];
    }
}