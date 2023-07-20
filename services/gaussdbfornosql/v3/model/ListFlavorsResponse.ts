import { ListFlavorsResult } from './ListFlavorsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    private 'total_count'?: number;
    public flavors?: Array<ListFlavorsResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListFlavorsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withFlavors(flavors: Array<ListFlavorsResult>): ListFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}