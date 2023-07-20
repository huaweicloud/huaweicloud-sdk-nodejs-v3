import { FlavorInfo } from './FlavorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorInfosResponse extends SdkResponse {
    private 'total_count'?: number;
    public flavors?: Array<FlavorInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListFlavorInfosResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withFlavors(flavors: Array<FlavorInfo>): ListFlavorInfosResponse {
        this['flavors'] = flavors;
        return this;
    }
}