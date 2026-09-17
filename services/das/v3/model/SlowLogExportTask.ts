

export class SlowLogExportTask {
    private 'task_id'?: number;
    private 'instance_id'?: string;
    private 'task_status'?: number;
    private 'create_at'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'download_url'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: number): SlowLogExportTask {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withInstanceId(instanceId: string): SlowLogExportTask {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskStatus(taskStatus: number): SlowLogExportTask {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: number  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): number | undefined {
        return this['task_status'];
    }
    public withCreateAt(createAt: number): SlowLogExportTask {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withStartTime(startTime: number): SlowLogExportTask {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): SlowLogExportTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDownloadUrl(downloadUrl: string): SlowLogExportTask {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
}