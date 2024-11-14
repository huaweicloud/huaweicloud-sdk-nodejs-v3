

export class OneHpcCacheTaskInfoResp {
    private 'task_id'?: string;
    public type?: string;
    public status?: OneHpcCacheTaskInfoRespStatusEnum | string;
    private 'src_target'?: string;
    private 'src_prefix'?: string;
    private 'dest_target'?: string;
    private 'dest_prefix'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public message?: string;
    public constructor(taskId?: string, type?: string, status?: string, srcTarget?: string, srcPrefix?: string, destTarget?: string, destPrefix?: string, startTime?: string, endTime?: string, message?: string) { 
        this['task_id'] = taskId;
        this['type'] = type;
        this['status'] = status;
        this['src_target'] = srcTarget;
        this['src_prefix'] = srcPrefix;
        this['dest_target'] = destTarget;
        this['dest_prefix'] = destPrefix;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['message'] = message;
    }
    public withTaskId(taskId: string): OneHpcCacheTaskInfoResp {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withType(type: string): OneHpcCacheTaskInfoResp {
        this['type'] = type;
        return this;
    }
    public withStatus(status: OneHpcCacheTaskInfoRespStatusEnum | string): OneHpcCacheTaskInfoResp {
        this['status'] = status;
        return this;
    }
    public withSrcTarget(srcTarget: string): OneHpcCacheTaskInfoResp {
        this['src_target'] = srcTarget;
        return this;
    }
    public set srcTarget(srcTarget: string  | undefined) {
        this['src_target'] = srcTarget;
    }
    public get srcTarget(): string | undefined {
        return this['src_target'];
    }
    public withSrcPrefix(srcPrefix: string): OneHpcCacheTaskInfoResp {
        this['src_prefix'] = srcPrefix;
        return this;
    }
    public set srcPrefix(srcPrefix: string  | undefined) {
        this['src_prefix'] = srcPrefix;
    }
    public get srcPrefix(): string | undefined {
        return this['src_prefix'];
    }
    public withDestTarget(destTarget: string): OneHpcCacheTaskInfoResp {
        this['dest_target'] = destTarget;
        return this;
    }
    public set destTarget(destTarget: string  | undefined) {
        this['dest_target'] = destTarget;
    }
    public get destTarget(): string | undefined {
        return this['dest_target'];
    }
    public withDestPrefix(destPrefix: string): OneHpcCacheTaskInfoResp {
        this['dest_prefix'] = destPrefix;
        return this;
    }
    public set destPrefix(destPrefix: string  | undefined) {
        this['dest_prefix'] = destPrefix;
    }
    public get destPrefix(): string | undefined {
        return this['dest_prefix'];
    }
    public withStartTime(startTime: string): OneHpcCacheTaskInfoResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): OneHpcCacheTaskInfoResp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMessage(message: string): OneHpcCacheTaskInfoResp {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OneHpcCacheTaskInfoRespStatusEnum {
    SUCCESS = 'SUCCESS',
    DOING = 'DOING',
    FAIL = 'FAIL'
}
