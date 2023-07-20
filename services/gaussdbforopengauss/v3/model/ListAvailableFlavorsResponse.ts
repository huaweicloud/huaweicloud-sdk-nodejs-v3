import { AvailableFlavorInfoResult } from './AvailableFlavorInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableFlavorsResponse extends SdkResponse {
    public flavors?: Array<AvailableFlavorInfoResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<AvailableFlavorInfoResult>): ListAvailableFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withTotalCount(totalCount: number): ListAvailableFlavorsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}