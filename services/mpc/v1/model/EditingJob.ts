import { CommonTaskMeta } from './CommonTaskMeta';
import { CreateEditingJobReq } from './CreateEditingJobReq';
import { ObsObjInfo } from './ObsObjInfo';
import { OutputFileInfo } from './OutputFileInfo';


export class EditingJob {
    private 'task_id'?: string | undefined;
    public status?: string;
    private 'create_time'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'error_code'?: string | undefined;
    public description?: string;
    private 'user_data'?: string | undefined;
    private 'job_id'?: string | undefined;
    private 'edit_type'?: Array<string> | undefined;
    public output?: ObsObjInfo;
    private 'edit_task_req'?: CreateEditingJobReq | undefined;
    private 'output_file_info'?: Array<OutputFileInfo> | undefined;
    public constructor() { 
    }
    public withTaskId(taskId: string): EditingJob {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: string): EditingJob {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): EditingJob {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withStartTime(startTime: string): EditingJob {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): EditingJob {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): EditingJob {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withDescription(description: string): EditingJob {
        this['description'] = description;
        return this;
    }
    public withUserData(userData: string): EditingJob {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withJobId(jobId: string): EditingJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withEditType(editType: Array<string>): EditingJob {
        this['edit_type'] = editType;
        return this;
    }
    public set editType(editType: Array<string> | undefined) {
        this['edit_type'] = editType;
    }
    public get editType() {
        return this['edit_type'];
    }
    public withOutput(output: ObsObjInfo): EditingJob {
        this['output'] = output;
        return this;
    }
    public withEditTaskReq(editTaskReq: CreateEditingJobReq): EditingJob {
        this['edit_task_req'] = editTaskReq;
        return this;
    }
    public set editTaskReq(editTaskReq: CreateEditingJobReq | undefined) {
        this['edit_task_req'] = editTaskReq;
    }
    public get editTaskReq() {
        return this['edit_task_req'];
    }
    public withOutputFileInfo(outputFileInfo: Array<OutputFileInfo>): EditingJob {
        this['output_file_info'] = outputFileInfo;
        return this;
    }
    public set outputFileInfo(outputFileInfo: Array<OutputFileInfo> | undefined) {
        this['output_file_info'] = outputFileInfo;
    }
    public get outputFileInfo() {
        return this['output_file_info'];
    }
}