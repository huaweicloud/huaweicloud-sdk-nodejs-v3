import { ObsCredential } from './ObsCredential';
import { ObsPolicy } from './ObsPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBucketCredentialResponse extends SdkResponse {
    private 'server_end_point'?: string;
    private 'bucket_name'?: string;
    private 'object_path'?: string;
    public policy?: ObsPolicy;
    public credential?: ObsCredential;
    public constructor() { 
        super();
    }
    public withServerEndPoint(serverEndPoint: string): CreateBucketCredentialResponse {
        this['server_end_point'] = serverEndPoint;
        return this;
    }
    public set serverEndPoint(serverEndPoint: string  | undefined) {
        this['server_end_point'] = serverEndPoint;
    }
    public get serverEndPoint(): string | undefined {
        return this['server_end_point'];
    }
    public withBucketName(bucketName: string): CreateBucketCredentialResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withObjectPath(objectPath: string): CreateBucketCredentialResponse {
        this['object_path'] = objectPath;
        return this;
    }
    public set objectPath(objectPath: string  | undefined) {
        this['object_path'] = objectPath;
    }
    public get objectPath(): string | undefined {
        return this['object_path'];
    }
    public withPolicy(policy: ObsPolicy): CreateBucketCredentialResponse {
        this['policy'] = policy;
        return this;
    }
    public withCredential(credential: ObsCredential): CreateBucketCredentialResponse {
        this['credential'] = credential;
        return this;
    }
}