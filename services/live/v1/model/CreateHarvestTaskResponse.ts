import { VodPackageInfo } from './VodPackageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHarvestTaskResponse extends SdkResponse {
    private 'job_id'?: string;
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'create_time'?: number;
    private 'event_name'?: string;
    private 'task_desc'?: string;
    public status?: CreateHarvestTaskResponseStatusEnum | string;
    private 'max_retry_cnt'?: number;
    private 'package_info'?: VodPackageInfo;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateHarvestTaskResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withDomain(domain: string): CreateHarvestTaskResponse {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): CreateHarvestTaskResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): CreateHarvestTaskResponse {
        this['id'] = id;
        return this;
    }
    public withStartTime(startTime: number): CreateHarvestTaskResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): CreateHarvestTaskResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCreateTime(createTime: number): CreateHarvestTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withEventName(eventName: string): CreateHarvestTaskResponse {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withTaskDesc(taskDesc: string): CreateHarvestTaskResponse {
        this['task_desc'] = taskDesc;
        return this;
    }
    public set taskDesc(taskDesc: string  | undefined) {
        this['task_desc'] = taskDesc;
    }
    public get taskDesc(): string | undefined {
        return this['task_desc'];
    }
    public withStatus(status: CreateHarvestTaskResponseStatusEnum | string): CreateHarvestTaskResponse {
        this['status'] = status;
        return this;
    }
    public withMaxRetryCnt(maxRetryCnt: number): CreateHarvestTaskResponse {
        this['max_retry_cnt'] = maxRetryCnt;
        return this;
    }
    public set maxRetryCnt(maxRetryCnt: number  | undefined) {
        this['max_retry_cnt'] = maxRetryCnt;
    }
    public get maxRetryCnt(): number | undefined {
        return this['max_retry_cnt'];
    }
    public withPackageInfo(packageInfo: VodPackageInfo): CreateHarvestTaskResponse {
        this['package_info'] = packageInfo;
        return this;
    }
    public set packageInfo(packageInfo: VodPackageInfo  | undefined) {
        this['package_info'] = packageInfo;
    }
    public get packageInfo(): VodPackageInfo | undefined {
        return this['package_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHarvestTaskResponseStatusEnum {
    UNSTART = 'UNSTART',
    IN_PROGRESS = 'IN_PROGRESS',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED'
}