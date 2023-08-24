import { StyleInfo } from './StyleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStylesResponse extends SdkResponse {
    public count?: number;
    public styles?: Array<StyleInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListStylesResponse {
        this['count'] = count;
        return this;
    }
    public withStyles(styles: Array<StyleInfo>): ListStylesResponse {
        this['styles'] = styles;
        return this;
    }
}