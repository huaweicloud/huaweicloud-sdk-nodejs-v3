

export class SlowLogDownloadInfo {
    public id?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'workflow_id'?: string;
    private 'file_name'?: string;
    private 'file_size'?: string;
    private 'file_link'?: string;
    private 'bucket_name'?: string;
    private 'created_at'?: number;
    private 'updated_at'?: number;
    public version?: string;
    public status?: string;
    public message?: string;
    public constructor() { 
    }
    public withId(id: string): SlowLogDownloadInfo {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): SlowLogDownloadInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): SlowLogDownloadInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withWorkflowId(workflowId: string): SlowLogDownloadInfo {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withFileName(fileName: string): SlowLogDownloadInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileSize(fileSize: string): SlowLogDownloadInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withFileLink(fileLink: string): SlowLogDownloadInfo {
        this['file_link'] = fileLink;
        return this;
    }
    public set fileLink(fileLink: string  | undefined) {
        this['file_link'] = fileLink;
    }
    public get fileLink(): string | undefined {
        return this['file_link'];
    }
    public withBucketName(bucketName: string): SlowLogDownloadInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withCreatedAt(createdAt: number): SlowLogDownloadInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: number): SlowLogDownloadInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
    public withVersion(version: string): SlowLogDownloadInfo {
        this['version'] = version;
        return this;
    }
    public withStatus(status: string): SlowLogDownloadInfo {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): SlowLogDownloadInfo {
        this['message'] = message;
        return this;
    }
}