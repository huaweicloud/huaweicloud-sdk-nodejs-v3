import { Snapshot } from './Snapshot';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshots4ApiResponse extends SdkResponse {
    public items?: Array<Snapshot>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withItems(items: Array<Snapshot>): ListSnapshots4ApiResponse {
        this['items'] = items;
        return this;
    }
    public withCount(count: number): ListSnapshots4ApiResponse {
        this['count'] = count;
        return this;
    }
}