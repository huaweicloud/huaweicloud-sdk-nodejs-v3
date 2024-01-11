

export class JobLinkResp {
    private 'job_type'?: JobLinkRespJobTypeEnum | string;
    private 'engine_type'?: JobLinkRespEngineTypeEnum | string;
    private 'source_endpoint_type'?: JobLinkRespSourceEndpointTypeEnum | string;
    private 'target_endpoint_type'?: JobLinkRespTargetEndpointTypeEnum | string;
    private 'job_direction'?: JobLinkRespJobDirectionEnum | string;
    private 'net_type'?: JobLinkRespNetTypeEnum | string;
    private 'task_types'?: Array<JobLinkRespTaskTypesEnum> | Array<string>;
    private 'cluster_modes'?: Array<JobLinkRespClusterModesEnum> | Array<string>;
    public description?: string;
    public constructor(jobType?: string, engineType?: string, sourceEndpointType?: string, targetEndpointType?: string, jobDirection?: string, netType?: string, taskTypes?: Array<string>, clusterModes?: Array<string>, description?: string) { 
        this['job_type'] = jobType;
        this['engine_type'] = engineType;
        this['source_endpoint_type'] = sourceEndpointType;
        this['target_endpoint_type'] = targetEndpointType;
        this['job_direction'] = jobDirection;
        this['net_type'] = netType;
        this['task_types'] = taskTypes;
        this['cluster_modes'] = clusterModes;
        this['description'] = description;
    }
    public withJobType(jobType: JobLinkRespJobTypeEnum | string): JobLinkResp {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobLinkRespJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobLinkRespJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withEngineType(engineType: JobLinkRespEngineTypeEnum | string): JobLinkResp {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: JobLinkRespEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): JobLinkRespEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withSourceEndpointType(sourceEndpointType: JobLinkRespSourceEndpointTypeEnum | string): JobLinkResp {
        this['source_endpoint_type'] = sourceEndpointType;
        return this;
    }
    public set sourceEndpointType(sourceEndpointType: JobLinkRespSourceEndpointTypeEnum | string  | undefined) {
        this['source_endpoint_type'] = sourceEndpointType;
    }
    public get sourceEndpointType(): JobLinkRespSourceEndpointTypeEnum | string | undefined {
        return this['source_endpoint_type'];
    }
    public withTargetEndpointType(targetEndpointType: JobLinkRespTargetEndpointTypeEnum | string): JobLinkResp {
        this['target_endpoint_type'] = targetEndpointType;
        return this;
    }
    public set targetEndpointType(targetEndpointType: JobLinkRespTargetEndpointTypeEnum | string  | undefined) {
        this['target_endpoint_type'] = targetEndpointType;
    }
    public get targetEndpointType(): JobLinkRespTargetEndpointTypeEnum | string | undefined {
        return this['target_endpoint_type'];
    }
    public withJobDirection(jobDirection: JobLinkRespJobDirectionEnum | string): JobLinkResp {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: JobLinkRespJobDirectionEnum | string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): JobLinkRespJobDirectionEnum | string | undefined {
        return this['job_direction'];
    }
    public withNetType(netType: JobLinkRespNetTypeEnum | string): JobLinkResp {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: JobLinkRespNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): JobLinkRespNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withTaskTypes(taskTypes: Array<JobLinkRespTaskTypesEnum> | Array<string>): JobLinkResp {
        this['task_types'] = taskTypes;
        return this;
    }
    public set taskTypes(taskTypes: Array<JobLinkRespTaskTypesEnum> | Array<string>  | undefined) {
        this['task_types'] = taskTypes;
    }
    public get taskTypes(): Array<JobLinkRespTaskTypesEnum> | Array<string> | undefined {
        return this['task_types'];
    }
    public withClusterModes(clusterModes: Array<JobLinkRespClusterModesEnum> | Array<string>): JobLinkResp {
        this['cluster_modes'] = clusterModes;
        return this;
    }
    public set clusterModes(clusterModes: Array<JobLinkRespClusterModesEnum> | Array<string>  | undefined) {
        this['cluster_modes'] = clusterModes;
    }
    public get clusterModes(): Array<JobLinkRespClusterModesEnum> | Array<string> | undefined {
        return this['cluster_modes'];
    }
    public withDescription(description: string): JobLinkResp {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobLinkRespJobTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum JobLinkRespEngineTypeEnum {
    ORACLE_TO_GAUSSDBV5 = 'oracle-to-gaussdbv5',
    REDIS_TO_GAUSSREDIS = 'redis-to-gaussredis',
    REDISCLUSTER_TO_GAUSSREDIS = 'rediscluster-to-gaussredis'
}
/**
    * @export
    * @enum {string}
    */
export enum JobLinkRespSourceEndpointTypeEnum {
    OFFLINE = 'offline',
    ECS = 'ecs',
    CLOUD = 'cloud'
}
/**
    * @export
    * @enum {string}
    */
export enum JobLinkRespTargetEndpointTypeEnum {
    OFFLINE = 'offline',
    ECS = 'ecs',
    CLOUD = 'cloud'
}
/**
    * @export
    * @enum {string}
    */
export enum JobLinkRespJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
/**
    * @export
    * @enum {string}
    */
export enum JobLinkRespNetTypeEnum {
    EIP = 'eip',
    VPC = 'vpc',
    VPN = 'vpn'
}
/**
    * @export
    * @enum {string}
    */
export enum JobLinkRespTaskTypesEnum {
    FULL_TRANS = 'FULL_TRANS',
    FULL_INCR_TRANS = 'FULL_INCR_TRANS',
    INCR_TRANS = 'INCR_TRANS'
}
/**
    * @export
    * @enum {string}
    */
export enum JobLinkRespClusterModesEnum {
    SINGLE = 'Single',
    HA = 'Ha',
    CLUSTER = 'Cluster',
    SHARDING = 'Sharding',
    INDEPENDENT = 'Independent'
}
