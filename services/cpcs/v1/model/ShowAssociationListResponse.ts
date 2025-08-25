import { AssociationInfo } from './AssociationInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssociationListResponse extends SdkResponse {
    private 'total_num'?: number;
    public result?: Array<AssociationInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowAssociationListResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withResult(result: Array<AssociationInfo>): ShowAssociationListResponse {
        this['result'] = result;
        return this;
    }
}