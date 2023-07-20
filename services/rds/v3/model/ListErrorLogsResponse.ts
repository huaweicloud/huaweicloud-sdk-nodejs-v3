import { ErrorLog } from './ErrorLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListErrorLogsResponse extends SdkResponse {
    private 'error_log_list'?: Array<ErrorLog>;
    private 'total_record'?: number;
    public constructor() { 
        super();
    }
    public withErrorLogList(errorLogList: Array<ErrorLog>): ListErrorLogsResponse {
        this['error_log_list'] = errorLogList;
        return this;
    }
    public set errorLogList(errorLogList: Array<ErrorLog>  | undefined) {
        this['error_log_list'] = errorLogList;
    }
    public get errorLogList(): Array<ErrorLog> | undefined {
        return this['error_log_list'];
    }
    public withTotalRecord(totalRecord: number): ListErrorLogsResponse {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number  | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord(): number | undefined {
        return this['total_record'];
    }
}