

export class ComponentSnapshotContext {
    private 'app_id'?: string;
    private 'available_replica'?: number;
    public build?: string;
    private 'build_id'?: string;
    private 'build_log_id'?: string;
    private 'env_id'?: string;
    public id?: string;
    private 'image_url'?: string;
    private 'job_id'?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    public name?: string;
    public operation?: string;
    private 'operation_status'?: string;
    public replica?: number;
    private 'resource_limit'?: string;
    public runtime?: ComponentSnapshotContextRuntimeEnum | string;
    public source?: string;
    public status?: string;
    public version?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withAppId(appId: string): ComponentSnapshotContext {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAvailableReplica(availableReplica: number): ComponentSnapshotContext {
        this['available_replica'] = availableReplica;
        return this;
    }
    public set availableReplica(availableReplica: number  | undefined) {
        this['available_replica'] = availableReplica;
    }
    public get availableReplica(): number | undefined {
        return this['available_replica'];
    }
    public withBuild(build: string): ComponentSnapshotContext {
        this['build'] = build;
        return this;
    }
    public withBuildId(buildId: string): ComponentSnapshotContext {
        this['build_id'] = buildId;
        return this;
    }
    public set buildId(buildId: string  | undefined) {
        this['build_id'] = buildId;
    }
    public get buildId(): string | undefined {
        return this['build_id'];
    }
    public withBuildLogId(buildLogId: string): ComponentSnapshotContext {
        this['build_log_id'] = buildLogId;
        return this;
    }
    public set buildLogId(buildLogId: string  | undefined) {
        this['build_log_id'] = buildLogId;
    }
    public get buildLogId(): string | undefined {
        return this['build_log_id'];
    }
    public withEnvId(envId: string): ComponentSnapshotContext {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withId(id: string): ComponentSnapshotContext {
        this['id'] = id;
        return this;
    }
    public withImageUrl(imageUrl: string): ComponentSnapshotContext {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withJobId(jobId: string): ComponentSnapshotContext {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withLogGroupId(logGroupId: string): ComponentSnapshotContext {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ComponentSnapshotContext {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withName(name: string): ComponentSnapshotContext {
        this['name'] = name;
        return this;
    }
    public withOperation(operation: string): ComponentSnapshotContext {
        this['operation'] = operation;
        return this;
    }
    public withOperationStatus(operationStatus: string): ComponentSnapshotContext {
        this['operation_status'] = operationStatus;
        return this;
    }
    public set operationStatus(operationStatus: string  | undefined) {
        this['operation_status'] = operationStatus;
    }
    public get operationStatus(): string | undefined {
        return this['operation_status'];
    }
    public withReplica(replica: number): ComponentSnapshotContext {
        this['replica'] = replica;
        return this;
    }
    public withResourceLimit(resourceLimit: string): ComponentSnapshotContext {
        this['resource_limit'] = resourceLimit;
        return this;
    }
    public set resourceLimit(resourceLimit: string  | undefined) {
        this['resource_limit'] = resourceLimit;
    }
    public get resourceLimit(): string | undefined {
        return this['resource_limit'];
    }
    public withRuntime(runtime: ComponentSnapshotContextRuntimeEnum | string): ComponentSnapshotContext {
        this['runtime'] = runtime;
        return this;
    }
    public withSource(source: string): ComponentSnapshotContext {
        this['source'] = source;
        return this;
    }
    public withStatus(status: string): ComponentSnapshotContext {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): ComponentSnapshotContext {
        this['version'] = version;
        return this;
    }
    public withCreatedAt(createdAt: string): ComponentSnapshotContext {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ComponentSnapshotContext {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentSnapshotContextRuntimeEnum {
    DOCKER = 'Docker',
    JAVA8 = 'Java8',
    JAVA11 = 'Java11',
    JAVA17 = 'Java17',
    JAVA21 = 'Java21',
    TOMCAT8 = 'Tomcat8',
    TOMCAT9 = 'Tomcat9',
    PYTHON3 = 'Python3',
    NODEJS8 = 'Nodejs8',
    NODEJS14 = 'Nodejs14',
    NODEJS16 = 'Nodejs16',
    PHP7 = 'Php7',
    PHP8 = 'Php8',
    DOTNET6 = 'Dotnet6',
    DOTNET7 = 'Dotnet7',
    DOTNET8 = 'Dotnet8'
}
