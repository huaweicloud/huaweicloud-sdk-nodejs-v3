

export class QueryTaskRequest {
    private 'user_name'?: string;
    public name?: string;
    private 'data_source_type'?: string;
    private 'data_connection_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'directory_id'?: string;
    private 'bucket_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withUserName(userName: string): QueryTaskRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withName(name: string): QueryTaskRequest {
        this['name'] = name;
        return this;
    }
    public withDataSourceType(dataSourceType: string): QueryTaskRequest {
        this['data_source_type'] = dataSourceType;
        return this;
    }
    public set dataSourceType(dataSourceType: string  | undefined) {
        this['data_source_type'] = dataSourceType;
    }
    public get dataSourceType(): string | undefined {
        return this['data_source_type'];
    }
    public withDataConnectionId(dataConnectionId: string): QueryTaskRequest {
        this['data_connection_id'] = dataConnectionId;
        return this;
    }
    public set dataConnectionId(dataConnectionId: string  | undefined) {
        this['data_connection_id'] = dataConnectionId;
    }
    public get dataConnectionId(): string | undefined {
        return this['data_connection_id'];
    }
    public withStartTime(startTime: string): QueryTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDirectoryId(directoryId: string): QueryTaskRequest {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: string  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): string | undefined {
        return this['directory_id'];
    }
    public withBucketName(bucketName: string): QueryTaskRequest {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withLimit(limit: number): QueryTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): QueryTaskRequest {
        this['offset'] = offset;
        return this;
    }
}