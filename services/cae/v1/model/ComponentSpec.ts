import { Access } from './Access';
import { Build } from './Build';
import { ResourceLimit } from './ResourceLimit';
import { Source } from './Source';


export class ComponentSpec {
    public runtime?: ComponentSpecRuntimeEnum | string;
    private 'env_id'?: string;
    public replica?: number;
    public source?: Source;
    public build?: Build;
    private 'resource_limit'?: ResourceLimit;
    private 'access_info'?: Array<Access>;
    private 'image_url'?: string;
    private 'available_replica'?: number;
    private 'job_id'?: string;
    private 'build_id'?: string;
    public status?: ComponentSpecStatusEnum | string;
    private 'build_log_id'?: string;
    private 'configuration_operation_id'?: string;
    public constructor() { 
    }
    public withRuntime(runtime: ComponentSpecRuntimeEnum | string): ComponentSpec {
        this['runtime'] = runtime;
        return this;
    }
    public withEnvId(envId: string): ComponentSpec {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withReplica(replica: number): ComponentSpec {
        this['replica'] = replica;
        return this;
    }
    public withSource(source: Source): ComponentSpec {
        this['source'] = source;
        return this;
    }
    public withBuild(build: Build): ComponentSpec {
        this['build'] = build;
        return this;
    }
    public withResourceLimit(resourceLimit: ResourceLimit): ComponentSpec {
        this['resource_limit'] = resourceLimit;
        return this;
    }
    public set resourceLimit(resourceLimit: ResourceLimit  | undefined) {
        this['resource_limit'] = resourceLimit;
    }
    public get resourceLimit(): ResourceLimit | undefined {
        return this['resource_limit'];
    }
    public withAccessInfo(accessInfo: Array<Access>): ComponentSpec {
        this['access_info'] = accessInfo;
        return this;
    }
    public set accessInfo(accessInfo: Array<Access>  | undefined) {
        this['access_info'] = accessInfo;
    }
    public get accessInfo(): Array<Access> | undefined {
        return this['access_info'];
    }
    public withImageUrl(imageUrl: string): ComponentSpec {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withAvailableReplica(availableReplica: number): ComponentSpec {
        this['available_replica'] = availableReplica;
        return this;
    }
    public set availableReplica(availableReplica: number  | undefined) {
        this['available_replica'] = availableReplica;
    }
    public get availableReplica(): number | undefined {
        return this['available_replica'];
    }
    public withJobId(jobId: string): ComponentSpec {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildId(buildId: string): ComponentSpec {
        this['build_id'] = buildId;
        return this;
    }
    public set buildId(buildId: string  | undefined) {
        this['build_id'] = buildId;
    }
    public get buildId(): string | undefined {
        return this['build_id'];
    }
    public withStatus(status: ComponentSpecStatusEnum | string): ComponentSpec {
        this['status'] = status;
        return this;
    }
    public withBuildLogId(buildLogId: string): ComponentSpec {
        this['build_log_id'] = buildLogId;
        return this;
    }
    public set buildLogId(buildLogId: string  | undefined) {
        this['build_log_id'] = buildLogId;
    }
    public get buildLogId(): string | undefined {
        return this['build_log_id'];
    }
    public withConfigurationOperationId(configurationOperationId: string): ComponentSpec {
        this['configuration_operation_id'] = configurationOperationId;
        return this;
    }
    public set configurationOperationId(configurationOperationId: string  | undefined) {
        this['configuration_operation_id'] = configurationOperationId;
    }
    public get configurationOperationId(): string | undefined {
        return this['configuration_operation_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentSpecRuntimeEnum {
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
/**
    * @export
    * @enum {string}
    */
export enum ComponentSpecStatusEnum {
    CREATED = 'created',
    RUNNING = 'running',
    PAUSED = 'paused',
    NOTREADY = 'notReady'
}
