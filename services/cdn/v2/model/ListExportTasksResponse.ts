import { ExportTask } from './ExportTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExportTasksResponse extends SdkResponse {
    public total?: number;
    public data?: Array<ExportTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListExportTasksResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<ExportTask>): ListExportTasksResponse {
        this['data'] = data;
        return this;
    }
}