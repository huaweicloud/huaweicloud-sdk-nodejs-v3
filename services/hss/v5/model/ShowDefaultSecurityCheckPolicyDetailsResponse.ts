import { SecurityCheckPolicyDetailInfoResponseInfo } from './SecurityCheckPolicyDetailInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDefaultSecurityCheckPolicyDetailsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'check_details'?: Array<SecurityCheckPolicyDetailInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowDefaultSecurityCheckPolicyDetailsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withCheckDetails(checkDetails: Array<SecurityCheckPolicyDetailInfoResponseInfo>): ShowDefaultSecurityCheckPolicyDetailsResponse {
        this['check_details'] = checkDetails;
        return this;
    }
    public set checkDetails(checkDetails: Array<SecurityCheckPolicyDetailInfoResponseInfo>  | undefined) {
        this['check_details'] = checkDetails;
    }
    public get checkDetails(): Array<SecurityCheckPolicyDetailInfoResponseInfo> | undefined {
        return this['check_details'];
    }
}