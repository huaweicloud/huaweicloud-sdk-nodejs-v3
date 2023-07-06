

export class BaseEndpoint {
    public id?: string;
    private 'endpoint_name': BaseEndpointEndpointNameEnum | undefined;
    public ip?: string;
    private 'db_port'?: string | undefined;
    private 'db_user': string | undefined;
    private 'db_password': string | undefined;
    private 'instance_id'?: string | undefined;
    private 'instance_name'?: string | undefined;
    private 'db_name'?: string | undefined;
    private 'source_sharding'?: Array<BaseEndpoint> | undefined;
    public constructor(endpointName?: any, dbUser?: any, dbPassword?: any) { 
        this['endpoint_name'] = endpointName;
        this['db_user'] = dbUser;
        this['db_password'] = dbPassword;
    }
    public withId(id: string): BaseEndpoint {
        this['id'] = id;
        return this;
    }
    public withEndpointName(endpointName: BaseEndpointEndpointNameEnum): BaseEndpoint {
        this['endpoint_name'] = endpointName;
        return this;
    }
    public set endpointName(endpointName: BaseEndpointEndpointNameEnum | undefined) {
        this['endpoint_name'] = endpointName;
    }
    public get endpointName() {
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
    public set dbPort(dbPort: string | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort() {
        return this['db_port'];
    }
    public withDbUser(dbUser: string): BaseEndpoint {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser() {
        return this['db_user'];
    }
    public withDbPassword(dbPassword: string): BaseEndpoint {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword() {
        return this['db_password'];
    }
    public withInstanceId(instanceId: string): BaseEndpoint {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): BaseEndpoint {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName() {
        return this['instance_name'];
    }
    public withDbName(dbName: string): BaseEndpoint {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName() {
        return this['db_name'];
    }
    public withSourceSharding(sourceSharding: Array<BaseEndpoint>): BaseEndpoint {
        this['source_sharding'] = sourceSharding;
        return this;
    }
    public set sourceSharding(sourceSharding: Array<BaseEndpoint> | undefined) {
        this['source_sharding'] = sourceSharding;
    }
    public get sourceSharding() {
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
    CLOUD_MYSQL = 'cloud_mysql'
}
