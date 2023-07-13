

export class JobLinkResp {
    private 'job_type': JobLinkRespJobTypeEnum | undefined;
    private 'engine_type': JobLinkRespEngineTypeEnum | undefined;
    private 'source_endpoint_type': JobLinkRespSourceEndpointTypeEnum | undefined;
    private 'target_endpoint_type': JobLinkRespTargetEndpointTypeEnum | undefined;
    private 'job_direction': JobLinkRespJobDirectionEnum | undefined;
    private 'net_type': JobLinkRespNetTypeEnum | undefined;
    private 'task_types': Array<JobLinkRespTaskTypesEnum> | undefined;
    private 'cluster_modes': Array<JobLinkRespClusterModesEnum> | undefined;
    public description: string;
    public constructor(jobType?: any, engineType?: any, sourceEndpointType?: any, targetEndpointType?: any, jobDirection?: any, netType?: any, taskTypes?: any, clusterModes?: any, description?: any) { 
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
    public withJobType(jobType: JobLinkRespJobTypeEnum): JobLinkResp {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobLinkRespJobTypeEnum | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withEngineType(engineType: JobLinkRespEngineTypeEnum): JobLinkResp {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: JobLinkRespEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withSourceEndpointType(sourceEndpointType: JobLinkRespSourceEndpointTypeEnum): JobLinkResp {
        this['source_endpoint_type'] = sourceEndpointType;
        return this;
    }
    public set sourceEndpointType(sourceEndpointType: JobLinkRespSourceEndpointTypeEnum | undefined) {
        this['source_endpoint_type'] = sourceEndpointType;
    }
    public get sourceEndpointType() {
        return this['source_endpoint_type'];
    }
    public withTargetEndpointType(targetEndpointType: JobLinkRespTargetEndpointTypeEnum): JobLinkResp {
        this['target_endpoint_type'] = targetEndpointType;
        return this;
    }
    public set targetEndpointType(targetEndpointType: JobLinkRespTargetEndpointTypeEnum | undefined) {
        this['target_endpoint_type'] = targetEndpointType;
    }
    public get targetEndpointType() {
        return this['target_endpoint_type'];
    }
    public withJobDirection(jobDirection: JobLinkRespJobDirectionEnum): JobLinkResp {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: JobLinkRespJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withNetType(netType: JobLinkRespNetTypeEnum): JobLinkResp {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: JobLinkRespNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withTaskTypes(taskTypes: Array<JobLinkRespTaskTypesEnum>): JobLinkResp {
        this['task_types'] = taskTypes;
        return this;
    }
    public set taskTypes(taskTypes: Array<JobLinkRespTaskTypesEnum> | undefined) {
        this['task_types'] = taskTypes;
    }
    public get taskTypes() {
        return this['task_types'];
    }
    public withClusterModes(clusterModes: Array<JobLinkRespClusterModesEnum>): JobLinkResp {
        this['cluster_modes'] = clusterModes;
        return this;
    }
    public set clusterModes(clusterModes: Array<JobLinkRespClusterModesEnum> | undefined) {
        this['cluster_modes'] = clusterModes;
    }
    public get clusterModes() {
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
    ORACLE_TO_GAUSSDBV5 = 'oracle-to-gaussdbv5'
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
