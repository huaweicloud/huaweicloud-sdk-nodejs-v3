import { ExportTask } from './ExportTask';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExportTasksResponse extends SdkResponse {
    private 'export_tasks'?: Array<ExportTask>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withExportTasks(exportTasks: Array<ExportTask>): ListExportTasksResponse {
        this['export_tasks'] = exportTasks;
        return this;
    }
    public set exportTasks(exportTasks: Array<ExportTask>  | undefined) {
        this['export_tasks'] = exportTasks;
    }
    public get exportTasks(): Array<ExportTask> | undefined {
        return this['export_tasks'];
    }
    public withPage(page: Page): ListExportTasksResponse {
        this['page'] = page;
        return this;
    }
}