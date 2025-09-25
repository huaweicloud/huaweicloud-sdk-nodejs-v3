

export class ListAspResult {
    private 'job_id'?: string;
    private 'file_size'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'download_url'?: string;
    public status?: ListAspResultStatusEnum | string;
    public constructor(jobId?: string, startTime?: string, endTime?: string, status?: string) { 
        this['job_id'] = jobId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['status'] = status;
    }
    public withJobId(jobId: string): ListAspResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withFileSize(fileSize: number): ListAspResult {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withStartTime(startTime: string): ListAspResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAspResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDownloadUrl(downloadUrl: string): ListAspResult {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
    public withStatus(status: ListAspResultStatusEnum | string): ListAspResult {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAspResultStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    EXPORTING = 'EXPORTING'
}
