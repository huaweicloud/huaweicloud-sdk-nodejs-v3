

export class SlowlogDownloadInfo {
    private 'workflow_id'?: string;
    private 'file_name'?: string;
    public status?: string;
    private 'file_size'?: string;
    private 'file_link'?: string;
    private 'create_at'?: number;
    private 'update_at'?: number;
    public constructor(workflowId?: string, fileName?: string, status?: string, fileSize?: string, fileLink?: string, createAt?: number, updateAt?: number) { 
        this['workflow_id'] = workflowId;
        this['file_name'] = fileName;
        this['status'] = status;
        this['file_size'] = fileSize;
        this['file_link'] = fileLink;
        this['create_at'] = createAt;
        this['update_at'] = updateAt;
    }
    public withWorkflowId(workflowId: string): SlowlogDownloadInfo {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withFileName(fileName: string): SlowlogDownloadInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withStatus(status: string): SlowlogDownloadInfo {
        this['status'] = status;
        return this;
    }
    public withFileSize(fileSize: string): SlowlogDownloadInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withFileLink(fileLink: string): SlowlogDownloadInfo {
        this['file_link'] = fileLink;
        return this;
    }
    public set fileLink(fileLink: string  | undefined) {
        this['file_link'] = fileLink;
    }
    public get fileLink(): string | undefined {
        return this['file_link'];
    }
    public withCreateAt(createAt: number): SlowlogDownloadInfo {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): SlowlogDownloadInfo {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
}