import { AccessKeyLastUsed } from './AccessKeyLastUsed';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAccessKeyLastUsedV5Response extends SdkResponse {
    private 'access_key_last_used'?: AccessKeyLastUsed;
    public constructor() { 
        super();
    }
    public withAccessKeyLastUsed(accessKeyLastUsed: AccessKeyLastUsed): ShowAccessKeyLastUsedV5Response {
        this['access_key_last_used'] = accessKeyLastUsed;
        return this;
    }
    public set accessKeyLastUsed(accessKeyLastUsed: AccessKeyLastUsed  | undefined) {
        this['access_key_last_used'] = accessKeyLastUsed;
    }
    public get accessKeyLastUsed(): AccessKeyLastUsed | undefined {
        return this['access_key_last_used'];
    }
}