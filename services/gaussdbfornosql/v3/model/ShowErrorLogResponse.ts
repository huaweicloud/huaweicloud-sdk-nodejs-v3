import { ErrorLogList } from './ErrorLogList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowErrorLogResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'error_log_list'?: Array<ErrorLogList>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowErrorLogResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withErrorLogList(errorLogList: Array<ErrorLogList>): ShowErrorLogResponse {
        this['error_log_list'] = errorLogList;
        return this;
    }
    public set errorLogList(errorLogList: Array<ErrorLogList>  | undefined) {
        this['error_log_list'] = errorLogList;
    }
    public get errorLogList(): Array<ErrorLogList> | undefined {
        return this['error_log_list'];
    }
}