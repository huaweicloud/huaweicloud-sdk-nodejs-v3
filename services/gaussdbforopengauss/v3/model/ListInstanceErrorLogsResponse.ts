import { InstanceLogFile } from './InstanceLogFile';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceErrorLogsResponse extends SdkResponse {
    public total?: number;
    private 'log_files'?: Array<InstanceLogFile>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceErrorLogsResponse {
        this['total'] = total;
        return this;
    }
    public withLogFiles(logFiles: Array<InstanceLogFile>): ListInstanceErrorLogsResponse {
        this['log_files'] = logFiles;
        return this;
    }
    public set logFiles(logFiles: Array<InstanceLogFile>  | undefined) {
        this['log_files'] = logFiles;
    }
    public get logFiles(): Array<InstanceLogFile> | undefined {
        return this['log_files'];
    }
}