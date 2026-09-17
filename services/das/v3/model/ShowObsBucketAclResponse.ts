
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowObsBucketAclResponse extends SdkResponse {
    private 'bucket_risk'?: string;
    public message?: string;
    private 'obs_acl'?: string;
    public constructor() { 
        super();
    }
    public withBucketRisk(bucketRisk: string): ShowObsBucketAclResponse {
        this['bucket_risk'] = bucketRisk;
        return this;
    }
    public set bucketRisk(bucketRisk: string  | undefined) {
        this['bucket_risk'] = bucketRisk;
    }
    public get bucketRisk(): string | undefined {
        return this['bucket_risk'];
    }
    public withMessage(message: string): ShowObsBucketAclResponse {
        this['message'] = message;
        return this;
    }
    public withObsAcl(obsAcl: string): ShowObsBucketAclResponse {
        this['obs_acl'] = obsAcl;
        return this;
    }
    public set obsAcl(obsAcl: string  | undefined) {
        this['obs_acl'] = obsAcl;
    }
    public get obsAcl(): string | undefined {
        return this['obs_acl'];
    }
}