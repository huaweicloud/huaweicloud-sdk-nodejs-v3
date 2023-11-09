import { EnvironmentViewLabels } from './EnvironmentViewLabels';
import { Resource } from './Resource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyEnvironmentResponse extends SdkResponse {
    public id?: string;
    private 'project_id'?: string;
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'vpc_id'?: string;
    public creator?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'deploy_mode'?: ModifyEnvironmentResponseDeployModeEnum | string;
    public resources?: Array<Resource>;
    public labels?: Array<EnvironmentViewLabels>;
    public constructor() { 
        super();
    }
    public withId(id: string): ModifyEnvironmentResponse {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ModifyEnvironmentResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): ModifyEnvironmentResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ModifyEnvironmentResponse {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ModifyEnvironmentResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVpcId(vpcId: string): ModifyEnvironmentResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCreator(creator: string): ModifyEnvironmentResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: number): ModifyEnvironmentResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ModifyEnvironmentResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeployMode(deployMode: ModifyEnvironmentResponseDeployModeEnum | string): ModifyEnvironmentResponse {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: ModifyEnvironmentResponseDeployModeEnum | string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): ModifyEnvironmentResponseDeployModeEnum | string | undefined {
        return this['deploy_mode'];
    }
    public withResources(resources: Array<Resource>): ModifyEnvironmentResponse {
        this['resources'] = resources;
        return this;
    }
    public withLabels(labels: Array<EnvironmentViewLabels>): ModifyEnvironmentResponse {
        this['labels'] = labels;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyEnvironmentResponseDeployModeEnum {
    CONTAINER = 'container',
    VIRTUALMACHINE = 'virtualmachine',
    MIXED = 'mixed'
}
