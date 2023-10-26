

export class ObsScanResultInfo {
    private 'task_id'?: string;
    private 'bucket_id'?: string;
    private 'bucket_name'?: string;
    private 'file_path'?: string;
    private 'file_name'?: string;
    public md5?: string;
    private 'risk_level'?: number;
    private 'sensitive_data_type'?: Array<string>;
    public constructor() { 
    }
    public withTaskId(taskId: string): ObsScanResultInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBucketId(bucketId: string): ObsScanResultInfo {
        this['bucket_id'] = bucketId;
        return this;
    }
    public set bucketId(bucketId: string  | undefined) {
        this['bucket_id'] = bucketId;
    }
    public get bucketId(): string | undefined {
        return this['bucket_id'];
    }
    public withBucketName(bucketName: string): ObsScanResultInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withFilePath(filePath: string): ObsScanResultInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileName(fileName: string): ObsScanResultInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withMd5(md5: string): ObsScanResultInfo {
        this['md5'] = md5;
        return this;
    }
    public withRiskLevel(riskLevel: number): ObsScanResultInfo {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: number  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): number | undefined {
        return this['risk_level'];
    }
    public withSensitiveDataType(sensitiveDataType: Array<string>): ObsScanResultInfo {
        this['sensitive_data_type'] = sensitiveDataType;
        return this;
    }
    public set sensitiveDataType(sensitiveDataType: Array<string>  | undefined) {
        this['sensitive_data_type'] = sensitiveDataType;
    }
    public get sensitiveDataType(): Array<string> | undefined {
        return this['sensitive_data_type'];
    }
}