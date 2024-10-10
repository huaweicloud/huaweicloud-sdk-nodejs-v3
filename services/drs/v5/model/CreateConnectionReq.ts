import { BaseEndpoint } from './BaseEndpoint';
import { CloudBaseInfo } from './CloudBaseInfo';
import { CloudVpcInfo } from './CloudVpcInfo';
import { ConnectionConfig } from './ConnectionConfig';
import { EndpointSslConfig } from './EndpointSslConfig';


export class CreateConnectionReq {
    public name?: string;
    private 'db_type'?: CreateConnectionReqDbTypeEnum | string;
    public config?: ConnectionConfig;
    public description?: string;
    public endpoint?: BaseEndpoint;
    public vpc?: CloudVpcInfo;
    public ssl?: EndpointSslConfig;
    public cloud?: CloudBaseInfo;
    private 'enterprise_project_id'?: string;
    public constructor(name?: string, dbType?: string, endpoint?: BaseEndpoint) { 
        this['name'] = name;
        this['db_type'] = dbType;
        this['endpoint'] = endpoint;
    }
    public withName(name: string): CreateConnectionReq {
        this['name'] = name;
        return this;
    }
    public withDbType(dbType: CreateConnectionReqDbTypeEnum | string): CreateConnectionReq {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: CreateConnectionReqDbTypeEnum | string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): CreateConnectionReqDbTypeEnum | string | undefined {
        return this['db_type'];
    }
    public withConfig(config: ConnectionConfig): CreateConnectionReq {
        this['config'] = config;
        return this;
    }
    public withDescription(description: string): CreateConnectionReq {
        this['description'] = description;
        return this;
    }
    public withEndpoint(endpoint: BaseEndpoint): CreateConnectionReq {
        this['endpoint'] = endpoint;
        return this;
    }
    public withVpc(vpc: CloudVpcInfo): CreateConnectionReq {
        this['vpc'] = vpc;
        return this;
    }
    public withSsl(ssl: EndpointSslConfig): CreateConnectionReq {
        this['ssl'] = ssl;
        return this;
    }
    public withCloud(cloud: CloudBaseInfo): CreateConnectionReq {
        this['cloud'] = cloud;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateConnectionReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateConnectionReqDbTypeEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    MONGODB = 'mongodb',
    ORACLE = 'oracle'
}
