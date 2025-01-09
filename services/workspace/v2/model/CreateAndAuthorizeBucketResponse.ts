
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAndAuthorizeBucketResponse extends SdkResponse {
    private 'bucket_name'?: string;
    public constructor() { 
        super();
    }
    public withBucketName(bucketName: string): CreateAndAuthorizeBucketResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
}