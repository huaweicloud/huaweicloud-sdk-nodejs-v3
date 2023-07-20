import { ErrorLogItem } from './ErrorLogItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListErrorlogForLtsResponse extends SdkResponse {
    private 'error_log_list'?: Array<ErrorLogItem>;
    public constructor() { 
        super();
    }
    public withErrorLogList(errorLogList: Array<ErrorLogItem>): ListErrorlogForLtsResponse {
        this['error_log_list'] = errorLogList;
        return this;
    }
    public set errorLogList(errorLogList: Array<ErrorLogItem>  | undefined) {
        this['error_log_list'] = errorLogList;
    }
    public get errorLogList(): Array<ErrorLogItem> | undefined {
        return this['error_log_list'];
    }
}