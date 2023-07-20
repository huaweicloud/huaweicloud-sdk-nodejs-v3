import { LtsLogErrorDetail } from './LtsLogErrorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLtsErrorLogDetailsResponse extends SdkResponse {
    private 'error_log_list'?: Array<LtsLogErrorDetail>;
    public constructor() { 
        super();
    }
    public withErrorLogList(errorLogList: Array<LtsLogErrorDetail>): ListLtsErrorLogDetailsResponse {
        this['error_log_list'] = errorLogList;
        return this;
    }
    public set errorLogList(errorLogList: Array<LtsLogErrorDetail>  | undefined) {
        this['error_log_list'] = errorLogList;
    }
    public get errorLogList(): Array<LtsLogErrorDetail> | undefined {
        return this['error_log_list'];
    }
}