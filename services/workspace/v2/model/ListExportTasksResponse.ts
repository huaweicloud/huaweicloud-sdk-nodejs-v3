import { ExportTaskItem } from './ExportTaskItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExportTasksResponse extends SdkResponse {
    private 'export_tasks'?: Array<ExportTaskItem>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withExportTasks(exportTasks: Array<ExportTaskItem>): ListExportTasksResponse {
        this['export_tasks'] = exportTasks;
        return this;
    }
    public set exportTasks(exportTasks: Array<ExportTaskItem>  | undefined) {
        this['export_tasks'] = exportTasks;
    }
    public get exportTasks(): Array<ExportTaskItem> | undefined {
        return this['export_tasks'];
    }
    public withCount(count: number): ListExportTasksResponse {
        this['count'] = count;
        return this;
    }
}