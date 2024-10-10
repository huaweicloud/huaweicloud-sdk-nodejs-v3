import { BaseEndpoint } from './BaseEndpoint';
import { CloudVpcInfo } from './CloudVpcInfo';
import { ConnectionConfig } from './ConnectionConfig';
import { EndpointSslConfig } from './EndpointSslConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConnectionResponse extends SdkResponse {
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
    public constructor() { 
        super();
    }
    public withConnectionId(connectionId: string): CreateConnectionResponse {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withName(name: string): CreateConnectionResponse {
        this['name'] = name;
        return this;
    }
    public withCreateTime(createTime: number): CreateConnectionResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDbType(dbType: string): CreateConnectionResponse {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withConfig(config: ConnectionConfig): CreateConnectionResponse {
        this['config'] = config;
        return this;
    }
    public withEndpoint(endpoint: BaseEndpoint): CreateConnectionResponse {
        this['endpoint'] = endpoint;
        return this;
    }
    public withVpc(vpc: CloudVpcInfo): CreateConnectionResponse {
        this['vpc'] = vpc;
        return this;
    }
    public withSsl(ssl: EndpointSslConfig): CreateConnectionResponse {
        this['ssl'] = ssl;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateConnectionResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDescription(description: string): CreateConnectionResponse {
        this['description'] = description;
        return this;
    }
}