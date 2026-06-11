

export class DownloadInfo {
    private 'workflow_id'?: string;
    private 'file_name'?: string;
    public status?: string;
    private 'file_size'?: string;
    private 'file_link'?: string;
    private 'file_link_expiration_time'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withWorkflowId(workflowId: string): DownloadInfo {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withFileName(fileName: string): DownloadInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withStatus(status: string): DownloadInfo {
        this['status'] = status;
        return this;
    }
    public withFileSize(fileSize: string): DownloadInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withFileLink(fileLink: string): DownloadInfo {
        this['file_link'] = fileLink;
        return this;
    }
    public set fileLink(fileLink: string  | undefined) {
        this['file_link'] = fileLink;
    }
    public get fileLink(): string | undefined {
        return this['file_link'];
    }
    public withFileLinkExpirationTime(fileLinkExpirationTime: number): DownloadInfo {
        this['file_link_expiration_time'] = fileLinkExpirationTime;
        return this;
    }
    public set fileLinkExpirationTime(fileLinkExpirationTime: number  | undefined) {
        this['file_link_expiration_time'] = fileLinkExpirationTime;
    }
    public get fileLinkExpirationTime(): number | undefined {
        return this['file_link_expiration_time'];
    }
    public withStartTime(startTime: number): DownloadInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): DownloadInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}