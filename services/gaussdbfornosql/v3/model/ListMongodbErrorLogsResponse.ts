import { MongodbErrorLogDetail } from './MongodbErrorLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMongodbErrorLogsResponse extends SdkResponse {
    private 'error_logs'?: Array<MongodbErrorLogDetail>;
    public constructor() { 
        super();
    }
    public withErrorLogs(errorLogs: Array<MongodbErrorLogDetail>): ListMongodbErrorLogsResponse {
        this['error_logs'] = errorLogs;
        return this;
    }
    public set errorLogs(errorLogs: Array<MongodbErrorLogDetail>  | undefined) {
        this['error_logs'] = errorLogs;
    }
    public get errorLogs(): Array<MongodbErrorLogDetail> | undefined {
        return this['error_logs'];
    }
}