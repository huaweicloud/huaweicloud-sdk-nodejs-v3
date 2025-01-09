import { Eips } from './Eips';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopsEipsResponse extends SdkResponse {
    public eips?: Array<Eips>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEips(eips: Array<Eips>): ListDesktopsEipsResponse {
        this['eips'] = eips;
        return this;
    }
    public withTotalCount(totalCount: number): ListDesktopsEipsResponse {
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