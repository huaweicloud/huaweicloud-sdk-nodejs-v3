import { ObjectMetaData } from './ObjectMetaData';
import { ObsInfo } from './ObsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRealTimeClipResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'publish_domain'?: string;
    public app?: string;
    public stream?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'file_url'?: string;
    public output?: ObsInfo;
    private 'meta_data'?: ObjectMetaData;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): CreateRealTimeClipResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withPublishDomain(publishDomain: string): CreateRealTimeClipResponse {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withApp(app: string): CreateRealTimeClipResponse {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): CreateRealTimeClipResponse {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: number): CreateRealTimeClipResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): CreateRealTimeClipResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withFileUrl(fileUrl: string): CreateRealTimeClipResponse {
        this['file_url'] = fileUrl;
        return this;
    }
    public set fileUrl(fileUrl: string  | undefined) {
        this['file_url'] = fileUrl;
    }
    public get fileUrl(): string | undefined {
        return this['file_url'];
    }
    public withOutput(output: ObsInfo): CreateRealTimeClipResponse {
        this['output'] = output;
        return this;
    }
    public withMetaData(metaData: ObjectMetaData): CreateRealTimeClipResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: ObjectMetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): ObjectMetaData | undefined {
        return this['meta_data'];
    }
}