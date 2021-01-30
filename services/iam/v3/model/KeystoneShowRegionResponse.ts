import { Region } from './Region';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowRegionResponse extends SdkResponse {
    public region?: Region;
    public constructor() { 
        super();
    }
    public withRegion(region: Region): KeystoneShowRegionResponse {
        this['region'] = region;
        return this;
    }
}