import { Resource } from './Resource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeResourceInEnvironmentResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public alias?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'charge_mode'?: string;
    private 'deploy_mode'?: string;
    private 'vpc_id'?: string;
    private 'base_resources'?: Array<Resource>;
    private 'optional_resources'?: Array<Resource>;
    public creator?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ChangeResourceInEnvironmentResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ChangeResourceInEnvironmentResponse {
        this['name'] = name;
        return this;
    }
    public withAlias(alias: string): ChangeResourceInEnvironmentResponse {
        this['alias'] = alias;
        return this;
    }
    public withDescription(description: string): ChangeResourceInEnvironmentResponse {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): ChangeResourceInEnvironmentResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeResourceInEnvironmentResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withChargeMode(chargeMode: string): ChangeResourceInEnvironmentResponse {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withDeployMode(deployMode: string): ChangeResourceInEnvironmentResponse {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): string | undefined {
        return this['deploy_mode'];
    }
    public withVpcId(vpcId: string): ChangeResourceInEnvironmentResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withBaseResources(baseResources: Array<Resource>): ChangeResourceInEnvironmentResponse {
        this['base_resources'] = baseResources;
        return this;
    }
    public set baseResources(baseResources: Array<Resource>  | undefined) {
        this['base_resources'] = baseResources;
    }
    public get baseResources(): Array<Resource> | undefined {
        return this['base_resources'];
    }
    public withOptionalResources(optionalResources: Array<Resource>): ChangeResourceInEnvironmentResponse {
        this['optional_resources'] = optionalResources;
        return this;
    }
    public set optionalResources(optionalResources: Array<Resource>  | undefined) {
        this['optional_resources'] = optionalResources;
    }
    public get optionalResources(): Array<Resource> | undefined {
        return this['optional_resources'];
    }
    public withCreator(creator: string): ChangeResourceInEnvironmentResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: number): ChangeResourceInEnvironmentResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ChangeResourceInEnvironmentResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}