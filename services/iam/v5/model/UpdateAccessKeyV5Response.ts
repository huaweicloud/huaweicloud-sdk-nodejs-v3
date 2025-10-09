import { AccessKeyMetadata } from './AccessKeyMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAccessKeyV5Response extends SdkResponse {
    private 'access_key'?: AccessKeyMetadata;
    public constructor() { 
        super();
    }
    public withAccessKey(accessKey: AccessKeyMetadata): UpdateAccessKeyV5Response {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: AccessKeyMetadata  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): AccessKeyMetadata | undefined {
        return this['access_key'];
    }
}