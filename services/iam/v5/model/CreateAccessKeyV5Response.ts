import { AccessKey } from './AccessKey';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAccessKeyV5Response extends SdkResponse {
    private 'access_key'?: AccessKey;
    public constructor() { 
        super();
    }
    public withAccessKey(accessKey: AccessKey): CreateAccessKeyV5Response {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: AccessKey  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): AccessKey | undefined {
        return this['access_key'];
    }
}