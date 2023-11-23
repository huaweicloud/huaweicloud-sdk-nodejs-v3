import { ErrorLogDetail } from './ErrorLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLtsErrorLogsResponse extends SdkResponse {
    private 'error_logs'?: Array<ErrorLogDetail>;
    public constructor() { 
        super();
    }
    public withErrorLogs(errorLogs: Array<ErrorLogDetail>): ListLtsErrorLogsResponse {
        this['error_logs'] = errorLogs;
        return this;
    }
    public set errorLogs(errorLogs: Array<ErrorLogDetail>  | undefined) {
        this['error_logs'] = errorLogs;
    }
    public get errorLogs(): Array<ErrorLogDetail> | undefined {
        return this['error_logs'];
    }
}