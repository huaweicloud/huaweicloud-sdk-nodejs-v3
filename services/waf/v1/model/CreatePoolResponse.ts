import { IdNameEntry } from './IdNameEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePoolResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public region?: string;
    public type?: string;
    private 'vpc_id'?: string;
    public description?: string;
    public hosts?: Array<IdNameEntry>;
    public instances?: Array<IdNameEntry>;
    private 'enterprise_project_id'?: string;
    private 'create_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreatePoolResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreatePoolResponse {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): CreatePoolResponse {
        this['region'] = region;
        return this;
    }
    public withType(type: string): CreatePoolResponse {
        this['type'] = type;
        return this;
    }
    public withVpcId(vpcId: string): CreatePoolResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withDescription(description: string): CreatePoolResponse {
        this['description'] = description;
        return this;
    }
    public withHosts(hosts: Array<IdNameEntry>): CreatePoolResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<IdNameEntry>): CreatePoolResponse {
        this['instances'] = instances;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePoolResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreateTime(createTime: number): CreatePoolResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}