import { BaseEndpoint } from './BaseEndpoint';
import { BaseEndpointConfig } from './BaseEndpointConfig';
import { CloudBaseInfo } from './CloudBaseInfo';
import { CloudVpcInfo } from './CloudVpcInfo';
import { CustomizedDns } from './CustomizedDns';
import { EndpointSslConfig } from './EndpointSslConfig';


export class JobEndpointInfo {
    private 'db_type'?: JobEndpointInfoDbTypeEnum | string;
    private 'endpoint_type'?: JobEndpointInfoEndpointTypeEnum | string;
    private 'endpoint_role'?: JobEndpointInfoEndpointRoleEnum | string;
    public endpoint?: BaseEndpoint;
    public cloud?: CloudBaseInfo;
    public vpc?: CloudVpcInfo;
    public config?: BaseEndpointConfig;
    public ssl?: EndpointSslConfig;
    private 'customized_dns'?: CustomizedDns;
    public constructor(dbType?: string, endpointType?: string, endpointRole?: string, endpoint?: BaseEndpoint) { 
        this['db_type'] = dbType;
        this['endpoint_type'] = endpointType;
        this['endpoint_role'] = endpointRole;
        this['endpoint'] = endpoint;
    }
    public withDbType(dbType: JobEndpointInfoDbTypeEnum | string): JobEndpointInfo {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: JobEndpointInfoDbTypeEnum | string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): JobEndpointInfoDbTypeEnum | string | undefined {
        return this['db_type'];
    }
    public withEndpointType(endpointType: JobEndpointInfoEndpointTypeEnum | string): JobEndpointInfo {
        this['endpoint_type'] = endpointType;
        return this;
    }
    public set endpointType(endpointType: JobEndpointInfoEndpointTypeEnum | string  | undefined) {
        this['endpoint_type'] = endpointType;
    }
    public get endpointType(): JobEndpointInfoEndpointTypeEnum | string | undefined {
        return this['endpoint_type'];
    }
    public withEndpointRole(endpointRole: JobEndpointInfoEndpointRoleEnum | string): JobEndpointInfo {
        this['endpoint_role'] = endpointRole;
        return this;
    }
    public set endpointRole(endpointRole: JobEndpointInfoEndpointRoleEnum | string  | undefined) {
        this['endpoint_role'] = endpointRole;
    }
    public get endpointRole(): JobEndpointInfoEndpointRoleEnum | string | undefined {
        return this['endpoint_role'];
    }
    public withEndpoint(endpoint: BaseEndpoint): JobEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withCloud(cloud: CloudBaseInfo): JobEndpointInfo {
        this['cloud'] = cloud;
        return this;
    }
    public withVpc(vpc: CloudVpcInfo): JobEndpointInfo {
        this['vpc'] = vpc;
        return this;
    }
    public withConfig(config: BaseEndpointConfig): JobEndpointInfo {
        this['config'] = config;
        return this;
    }
    public withSsl(ssl: EndpointSslConfig): JobEndpointInfo {
        this['ssl'] = ssl;
        return this;
    }
    public withCustomizedDns(customizedDns: CustomizedDns): JobEndpointInfo {
        this['customized_dns'] = customizedDns;
        return this;
    }
    public set customizedDns(customizedDns: CustomizedDns  | undefined) {
        this['customized_dns'] = customizedDns;
    }
    public get customizedDns(): CustomizedDns | undefined {
        return this['customized_dns'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobEndpointInfoDbTypeEnum {
    ORACLE = 'oracle',
    GAUSSDBV5 = 'gaussdbv5',
    REDIS = 'redis',
    REDISCLUSTER = 'rediscluster',
    GAUSSREDIS = 'gaussredis',
    MYSQL = 'mysql'
}
/**
    * @export
    * @enum {string}
    */
export enum JobEndpointInfoEndpointTypeEnum {
    OFFLINE = 'offline',
    ECS = 'ecs',
    CLOUD = 'cloud'
}
/**
    * @export
    * @enum {string}
    */
export enum JobEndpointInfoEndpointRoleEnum {
    SO = 'so',
    TA = 'ta'
}
