import { ErrorTransInfo } from './ErrorTransInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchErrorInfo4ApiResponse extends SdkResponse {
    public total?: number;
    private 'error_trans_infos'?: Array<ErrorTransInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): SearchErrorInfo4ApiResponse {
        this['total'] = total;
        return this;
    }
    public withErrorTransInfos(errorTransInfos: Array<ErrorTransInfo>): SearchErrorInfo4ApiResponse {
        this['error_trans_infos'] = errorTransInfos;
        return this;
    }
    public set errorTransInfos(errorTransInfos: Array<ErrorTransInfo>  | undefined) {
        this['error_trans_infos'] = errorTransInfos;
    }
    public get errorTransInfos(): Array<ErrorTransInfo> | undefined {
        return this['error_trans_infos'];
    }
}