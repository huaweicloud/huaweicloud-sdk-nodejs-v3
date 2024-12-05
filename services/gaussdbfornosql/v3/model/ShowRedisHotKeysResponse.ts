import { HotKeysInfoResponseBody } from './HotKeysInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRedisHotKeysResponse extends SdkResponse {
    public keys?: Array<HotKeysInfoResponseBody>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withKeys(keys: Array<HotKeysInfoResponseBody>): ShowRedisHotKeysResponse {
        this['keys'] = keys;
        return this;
    }
    public withCount(count: number): ShowRedisHotKeysResponse {
        this['count'] = count;
        return this;
    }
}