import { BaseEndpoint } from './BaseEndpoint';
import { CloudVpcInfo } from './CloudVpcInfo';
import { ConnectionConfig } from './ConnectionConfig';
import { EndpointSslConfig } from './EndpointSslConfig';


export class ConnectionResp {
    private 'connection_id'?: string;
    public name?: string;
    private 'create_time'?: number;
    private 'db_type'?: string;
    public config?: ConnectionConfig;
    public endpoint?: BaseEndpoint;
    public vpc?: CloudVpcInfo;
    public ssl?: EndpointSslConfig;
    private 'enterprise_project_id'?: string;
    public description?: string;
    public constructor(connectionId?: string, name?: string, createTime?: number, dbType?: string, endpoint?: BaseEndpoint) { 
        this['connection_id'] = connectionId;
        this['name'] = name;
        this['create_time'] = createTime;
        this['db_type'] = dbType;
        this['endpoint'] = endpoint;
    }
    public withConnectionId(connectionId: string): ConnectionResp {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withName(name: string): ConnectionResp {
        this['name'] = name;
        return this;
    }
    public withCreateTime(createTime: number): ConnectionResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDbType(dbType: string): ConnectionResp {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withConfig(config: ConnectionConfig): ConnectionResp {
        this['config'] = config;
        return this;
    }
    public withEndpoint(endpoint: BaseEndpoint): ConnectionResp {
        this['endpoint'] = endpoint;
        return this;
    }
    public withVpc(vpc: CloudVpcInfo): ConnectionResp {
        this['vpc'] = vpc;
        return this;
    }
    public withSsl(ssl: EndpointSslConfig): ConnectionResp {
        this['ssl'] = ssl;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ConnectionResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDescription(description: string): ConnectionResp {
        this['description'] = description;
        return this;
    }
}