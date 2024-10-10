import { BaseEndpoint } from './BaseEndpoint';
import { CloudBaseInfo } from './CloudBaseInfo';
import { CloudVpcInfo } from './CloudVpcInfo';
import { ConnectionConfig } from './ConnectionConfig';
import { EndpointSslConfig } from './EndpointSslConfig';


export class UpdateConnectionReq {
    public name?: string;
    private 'db_type'?: string;
    public config?: ConnectionConfig;
    public description?: string;
    public endpoint?: BaseEndpoint;
    public vpc?: CloudVpcInfo;
    public ssl?: EndpointSslConfig;
    public cloud?: CloudBaseInfo;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateConnectionReq {
        this['name'] = name;
        return this;
    }
    public withDbType(dbType: string): UpdateConnectionReq {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withConfig(config: ConnectionConfig): UpdateConnectionReq {
        this['config'] = config;
        return this;
    }
    public withDescription(description: string): UpdateConnectionReq {
        this['description'] = description;
        return this;
    }
    public withEndpoint(endpoint: BaseEndpoint): UpdateConnectionReq {
        this['endpoint'] = endpoint;
        return this;
    }
    public withVpc(vpc: CloudVpcInfo): UpdateConnectionReq {
        this['vpc'] = vpc;
        return this;
    }
    public withSsl(ssl: EndpointSslConfig): UpdateConnectionReq {
        this['ssl'] = ssl;
        return this;
    }
    public withCloud(cloud: CloudBaseInfo): UpdateConnectionReq {
        this['cloud'] = cloud;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateConnectionReq {
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