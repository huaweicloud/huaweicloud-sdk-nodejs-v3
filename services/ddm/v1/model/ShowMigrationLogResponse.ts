import { TaskLogsVO } from './TaskLogsVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMigrationLogResponse extends SdkResponse {
    private 'task_logs'?: Array<TaskLogsVO>;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskLogs(taskLogs: Array<TaskLogsVO>): ShowMigrationLogResponse {
        this['task_logs'] = taskLogs;
        return this;
    }
    public set taskLogs(taskLogs: Array<TaskLogsVO>  | undefined) {
        this['task_logs'] = taskLogs;
    }
    public get taskLogs(): Array<TaskLogsVO> | undefined {
        return this['task_logs'];
    }
    public withCurPage(curPage: number): ShowMigrationLogResponse {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ShowMigrationLogResponse {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withTotal(total: number): ShowMigrationLogResponse {
        this['total'] = total;
        return this;
    }
}