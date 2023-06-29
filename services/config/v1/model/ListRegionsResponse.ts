import { Region } from './Region';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegionsResponse extends SdkResponse {
    public value?: Array<Region>;
    public constructor() { 
        super();
    }
    public withValue(value: Array<Region>): ListRegionsResponse {
        this['value'] = value;
        return this;
    }
}