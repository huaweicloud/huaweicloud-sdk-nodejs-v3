import { BigKeysInfoResponseBody } from './BigKeysInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRedisBigKeysResponse extends SdkResponse {
    public keys?: Array<BigKeysInfoResponseBody>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withKeys(keys: Array<BigKeysInfoResponseBody>): ShowRedisBigKeysResponse {
        this['keys'] = keys;
        return this;
    }
    public withCount(count: number): ShowRedisBigKeysResponse {
        this['count'] = count;
        return this;
    }
}