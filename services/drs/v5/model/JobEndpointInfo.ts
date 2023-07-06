import { BaseEndpoint } from './BaseEndpoint';
import { BaseEndpointConfig } from './BaseEndpointConfig';
import { CloudBaseInfo } from './CloudBaseInfo';
import { CloudVpcInfo } from './CloudVpcInfo';
import { EndpointSslConfig } from './EndpointSslConfig';


export class JobEndpointInfo {
    private 'db_type': JobEndpointInfoDbTypeEnum | undefined;
    private 'endpoint_type': JobEndpointInfoEndpointTypeEnum | undefined;
    private 'endpoint_role': JobEndpointInfoEndpointRoleEnum | undefined;
    public endpoint: BaseEndpoint;
    public cloud?: CloudBaseInfo;
    public vpc?: CloudVpcInfo;
    public config?: BaseEndpointConfig;
    public ssl?: EndpointSslConfig;
    public constructor(dbType?: any, endpointType?: any, endpointRole?: any, endpoint?: any) { 
        this['db_type'] = dbType;
        this['endpoint_type'] = endpointType;
        this['endpoint_role'] = endpointRole;
        this['endpoint'] = endpoint;
    }
    public withDbType(dbType: JobEndpointInfoDbTypeEnum): JobEndpointInfo {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: JobEndpointInfoDbTypeEnum | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType() {
        return this['db_type'];
    }
    public withEndpointType(endpointType: JobEndpointInfoEndpointTypeEnum): JobEndpointInfo {
        this['endpoint_type'] = endpointType;
        return this;
    }
    public set endpointType(endpointType: JobEndpointInfoEndpointTypeEnum | undefined) {
        this['endpoint_type'] = endpointType;
    }
    public get endpointType() {
        return this['endpoint_type'];
    }
    public withEndpointRole(endpointRole: JobEndpointInfoEndpointRoleEnum): JobEndpointInfo {
        this['endpoint_role'] = endpointRole;
        return this;
    }
    public set endpointRole(endpointRole: JobEndpointInfoEndpointRoleEnum | undefined) {
        this['endpoint_role'] = endpointRole;
    }
    public get endpointRole() {
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
}

/**
    * @export
    * @enum {string}
    */
export enum JobEndpointInfoDbTypeEnum {
    ORACLE = 'oracle',
    GAUSSDBV5 = 'gaussdbv5'
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
