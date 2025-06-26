import { ProductUnitResp } from './ProductUnitResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotFlavorInfoResponse extends SdkResponse {
    public flavors?: Array<ProductUnitResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<ProductUnitResp>): ListSnapshotFlavorInfoResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withCount(count: number): ListSnapshotFlavorInfoResponse {
        this['count'] = count;
        return this;
    }
}