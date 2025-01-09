import { OuNameInfo } from './OuNameInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOuDetailsResponse extends SdkResponse {
    public ous?: Array<OuNameInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withOus(ous: Array<OuNameInfo>): ListOuDetailsResponse {
        this['ous'] = ous;
        return this;
    }
    public withTotalCount(totalCount: number): ListOuDetailsResponse {
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