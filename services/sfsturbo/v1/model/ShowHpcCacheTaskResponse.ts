
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHpcCacheTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    public type?: string;
    public status?: ShowHpcCacheTaskResponseStatusEnum | string;
    private 'src_target'?: string;
    private 'src_prefix'?: string;
    private 'dest_target'?: string;
    private 'dest_prefix'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public message?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowHpcCacheTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withType(type: string): ShowHpcCacheTaskResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: ShowHpcCacheTaskResponseStatusEnum | string): ShowHpcCacheTaskResponse {
        this['status'] = status;
        return this;
    }
    public withSrcTarget(srcTarget: string): ShowHpcCacheTaskResponse {
        this['src_target'] = srcTarget;
        return this;
    }
    public set srcTarget(srcTarget: string  | undefined) {
        this['src_target'] = srcTarget;
    }
    public get srcTarget(): string | undefined {
        return this['src_target'];
    }
    public withSrcPrefix(srcPrefix: string): ShowHpcCacheTaskResponse {
        this['src_prefix'] = srcPrefix;
        return this;
    }
    public set srcPrefix(srcPrefix: string  | undefined) {
        this['src_prefix'] = srcPrefix;
    }
    public get srcPrefix(): string | undefined {
        return this['src_prefix'];
    }
    public withDestTarget(destTarget: string): ShowHpcCacheTaskResponse {
        this['dest_target'] = destTarget;
        return this;
    }
    public set destTarget(destTarget: string  | undefined) {
        this['dest_target'] = destTarget;
    }
    public get destTarget(): string | undefined {
        return this['dest_target'];
    }
    public withDestPrefix(destPrefix: string): ShowHpcCacheTaskResponse {
        this['dest_prefix'] = destPrefix;
        return this;
    }
    public set destPrefix(destPrefix: string  | undefined) {
        this['dest_prefix'] = destPrefix;
    }
    public get destPrefix(): string | undefined {
        return this['dest_prefix'];
    }
    public withStartTime(startTime: string): ShowHpcCacheTaskResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowHpcCacheTaskResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMessage(message: string): ShowHpcCacheTaskResponse {
        this['message'] = message;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowHpcCacheTaskResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowHpcCacheTaskResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    DOING = 'DOING',
    FAIL = 'FAIL',
    DELETING = 'DELETING'
}
