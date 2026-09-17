import { TableVacuumInfoOpen } from './TableVacuumInfoOpen';
import { TableVacuumNumInfo } from './TableVacuumNumInfo';


export class TaskStatusOpenResp {
    private 'task_id'?: string;
    private 'task_dead_line'?: string;
    public category?: string;
    public status?: string;
    private 'time_left'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'finished_percentage'?: string;
    private 'vacuumed_space'?: string;
    private 'table_vacuum_info'?: TableVacuumInfoOpen;
    private 'vacuum_info'?: Array<object>;
    private 'table_vacuum_num_info'?: TableVacuumNumInfo;
    public constructor() { 
    }
    public withTaskId(taskId: string): TaskStatusOpenResp {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskDeadLine(taskDeadLine: string): TaskStatusOpenResp {
        this['task_dead_line'] = taskDeadLine;
        return this;
    }
    public set taskDeadLine(taskDeadLine: string  | undefined) {
        this['task_dead_line'] = taskDeadLine;
    }
    public get taskDeadLine(): string | undefined {
        return this['task_dead_line'];
    }
    public withCategory(category: string): TaskStatusOpenResp {
        this['category'] = category;
        return this;
    }
    public withStatus(status: string): TaskStatusOpenResp {
        this['status'] = status;
        return this;
    }
    public withTimeLeft(timeLeft: string): TaskStatusOpenResp {
        this['time_left'] = timeLeft;
        return this;
    }
    public set timeLeft(timeLeft: string  | undefined) {
        this['time_left'] = timeLeft;
    }
    public get timeLeft(): string | undefined {
        return this['time_left'];
    }
    public withStartTime(startTime: string): TaskStatusOpenResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TaskStatusOpenResp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withFinishedPercentage(finishedPercentage: string): TaskStatusOpenResp {
        this['finished_percentage'] = finishedPercentage;
        return this;
    }
    public set finishedPercentage(finishedPercentage: string  | undefined) {
        this['finished_percentage'] = finishedPercentage;
    }
    public get finishedPercentage(): string | undefined {
        return this['finished_percentage'];
    }
    public withVacuumedSpace(vacuumedSpace: string): TaskStatusOpenResp {
        this['vacuumed_space'] = vacuumedSpace;
        return this;
    }
    public set vacuumedSpace(vacuumedSpace: string  | undefined) {
        this['vacuumed_space'] = vacuumedSpace;
    }
    public get vacuumedSpace(): string | undefined {
        return this['vacuumed_space'];
    }
    public withTableVacuumInfo(tableVacuumInfo: TableVacuumInfoOpen): TaskStatusOpenResp {
        this['table_vacuum_info'] = tableVacuumInfo;
        return this;
    }
    public set tableVacuumInfo(tableVacuumInfo: TableVacuumInfoOpen  | undefined) {
        this['table_vacuum_info'] = tableVacuumInfo;
    }
    public get tableVacuumInfo(): TableVacuumInfoOpen | undefined {
        return this['table_vacuum_info'];
    }
    public withVacuumInfo(vacuumInfo: Array<object>): TaskStatusOpenResp {
        this['vacuum_info'] = vacuumInfo;
        return this;
    }
    public set vacuumInfo(vacuumInfo: Array<object>  | undefined) {
        this['vacuum_info'] = vacuumInfo;
    }
    public get vacuumInfo(): Array<object> | undefined {
        return this['vacuum_info'];
    }
    public withTableVacuumNumInfo(tableVacuumNumInfo: TableVacuumNumInfo): TaskStatusOpenResp {
        this['table_vacuum_num_info'] = tableVacuumNumInfo;
        return this;
    }
    public set tableVacuumNumInfo(tableVacuumNumInfo: TableVacuumNumInfo  | undefined) {
        this['table_vacuum_num_info'] = tableVacuumNumInfo;
    }
    public get tableVacuumNumInfo(): TableVacuumNumInfo | undefined {
        return this['table_vacuum_num_info'];
    }
}