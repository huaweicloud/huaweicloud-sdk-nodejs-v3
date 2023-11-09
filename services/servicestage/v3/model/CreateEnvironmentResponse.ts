import { EnvironmentViewLabels } from './EnvironmentViewLabels';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEnvironmentResponse extends SdkResponse {
    public id?: string;
    private 'project_id'?: string;
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'vpc_id'?: string;
    public creator?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'deploy_mode'?: CreateEnvironmentResponseDeployModeEnum | string;
    public labels?: Array<EnvironmentViewLabels>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateEnvironmentResponse {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): CreateEnvironmentResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): CreateEnvironmentResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateEnvironmentResponse {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateEnvironmentResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVpcId(vpcId: string): CreateEnvironmentResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCreator(creator: string): CreateEnvironmentResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: number): CreateEnvironmentResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): CreateEnvironmentResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeployMode(deployMode: CreateEnvironmentResponseDeployModeEnum | string): CreateEnvironmentResponse {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: CreateEnvironmentResponseDeployModeEnum | string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): CreateEnvironmentResponseDeployModeEnum | string | undefined {
        return this['deploy_mode'];
    }
    public withLabels(labels: Array<EnvironmentViewLabels>): CreateEnvironmentResponse {
        this['labels'] = labels;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEnvironmentResponseDeployModeEnum {
    CONTAINER = 'container',
    VIRTUALMACHINE = 'virtualmachine',
    MIXED = 'mixed'
}
