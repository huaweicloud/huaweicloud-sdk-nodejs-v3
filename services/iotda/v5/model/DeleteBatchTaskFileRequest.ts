

export class DeleteBatchTaskFileRequest {
    private 'Instance-Id'?: string | undefined;
    private 'file_id': string | undefined;
    public constructor(fileId: any) { 
        this['file_id'] = fileId;
    }
    public withInstanceId(instanceId: string): DeleteBatchTaskFileRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withFileId(fileId: string): DeleteBatchTaskFileRequest {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId() {
        return this['file_id'];
    }
}