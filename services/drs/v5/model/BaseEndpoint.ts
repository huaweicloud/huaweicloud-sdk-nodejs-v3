

export class BaseEndpoint {
    public id?: string;
    private 'endpoint_name'?: BaseEndpointEndpointNameEnum | string;
    public ip?: string;
    private 'db_port'?: string;
    private 'db_user'?: string;
    private 'db_password'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'db_name'?: string;
    private 'source_sharding'?: Array<BaseEndpoint>;
    public constructor(endpointName?: string, dbUser?: string, dbPassword?: string) { 
        this['endpoint_name'] = endpointName;
        this['db_user'] = dbUser;
        this['db_password'] = dbPassword;
    }
    public withId(id: string): BaseEndpoint {
        this['id'] = id;
        return this;
    }
    public withEndpointName(endpointName: BaseEndpointEndpointNameEnum | string): BaseEndpoint {
        this['endpoint_name'] = endpointName;
        return this;
    }
    public set endpointName(endpointName: BaseEndpointEndpointNameEnum | string  | undefined) {
        this['endpoint_name'] = endpointName;
    }
    public get endpointName(): BaseEndpointEndpointNameEnum | string | undefined {
        return this['endpoint_name'];
    }
    public withIp(ip: string): BaseEndpoint {
        this['ip'] = ip;
        return this;
    }
    public withDbPort(dbPort: string): BaseEndpoint {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: string  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): string | undefined {
        return this['db_port'];
    }
    public withDbUser(dbUser: string): BaseEndpoint {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withDbPassword(dbPassword: string): BaseEndpoint {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string  | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword(): string | undefined {
        return this['db_password'];
    }
    public withInstanceId(instanceId: string): BaseEndpoint {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): BaseEndpoint {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDbName(dbName: string): BaseEndpoint {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSourceSharding(sourceSharding: Array<BaseEndpoint>): BaseEndpoint {
        this['source_sharding'] = sourceSharding;
        return this;
    }
    public set sourceSharding(sourceSharding: Array<BaseEndpoint>  | undefined) {
        this['source_sharding'] = sourceSharding;
    }
    public get sourceSharding(): Array<BaseEndpoint> | undefined {
        return this['source_sharding'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaseEndpointEndpointNameEnum {
    ORACLE = 'oracle',
    ECS_ORACLE = 'ecs_oracle',
    CLOUD_GAUSSDBV5 = 'cloud_gaussdbv5',
    MYSQL = 'mysql',
    ECS_MYSQL = 'ecs_mysql',
    CLOUD_MYSQL = 'cloud_mysql',
    REDIS = 'redis',
    ECS_REDIS = 'ecs_redis',
    REDISCLUSTER = 'rediscluster',
    ECS_REDISCLUSTER = 'ecs_rediscluster',
    CLOUD_GAUSSDB_REDIS = 'cloud_gaussdb_redis',
    POSTGRESQL = 'postgresql',
    ECS_POSTGRESQL = 'ecs_postgresql',
    CLOUD_POSTGRESQL = 'cloud_postgresql',
    MONGODB = 'mongodb',
    ECS_MONGODB = 'ecs_mongodb',
    CLOUD_MONGODB = 'cloud_mongodb'
}
