

export class DownloadSlowLogFileItem {
    private 'job_id'?: string;
    private 'file_name'?: string;
    public status?: string;
    private 'file_size'?: string;
    private 'file_link'?: string;
    private 'create_at'?: number;
    private 'updated_at'?: number;
    public constructor() { 
    }
    public withJobId(jobId: string): DownloadSlowLogFileItem {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withFileName(fileName: string): DownloadSlowLogFileItem {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withStatus(status: string): DownloadSlowLogFileItem {
        this['status'] = status;
        return this;
    }
    public withFileSize(fileSize: string): DownloadSlowLogFileItem {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withFileLink(fileLink: string): DownloadSlowLogFileItem {
        this['file_link'] = fileLink;
        return this;
    }
    public set fileLink(fileLink: string  | undefined) {
        this['file_link'] = fileLink;
    }
    public get fileLink(): string | undefined {
        return this['file_link'];
    }
    public withCreateAt(createAt: number): DownloadSlowLogFileItem {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdatedAt(updatedAt: number): DownloadSlowLogFileItem {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
}