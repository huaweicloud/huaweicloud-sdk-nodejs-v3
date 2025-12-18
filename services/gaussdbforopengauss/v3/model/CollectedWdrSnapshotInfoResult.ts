

export class CollectedWdrSnapshotInfoResult {
    private 'job_id'?: string;
    private 'wdr_type'?: string;
    private 'file_size'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'download_url'?: string;
    public status?: string;
    public notes?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): CollectedWdrSnapshotInfoResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withWdrType(wdrType: string): CollectedWdrSnapshotInfoResult {
        this['wdr_type'] = wdrType;
        return this;
    }
    public set wdrType(wdrType: string  | undefined) {
        this['wdr_type'] = wdrType;
    }
    public get wdrType(): string | undefined {
        return this['wdr_type'];
    }
    public withFileSize(fileSize: number): CollectedWdrSnapshotInfoResult {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withStartTime(startTime: string): CollectedWdrSnapshotInfoResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): CollectedWdrSnapshotInfoResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDownloadUrl(downloadUrl: string): CollectedWdrSnapshotInfoResult {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
    public withStatus(status: string): CollectedWdrSnapshotInfoResult {
        this['status'] = status;
        return this;
    }
    public withNotes(notes: string): CollectedWdrSnapshotInfoResult {
        this['notes'] = notes;
        return this;
    }
}