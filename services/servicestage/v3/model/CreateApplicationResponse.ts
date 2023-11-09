import { EnvironmentViewLabels } from './EnvironmentViewLabels';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApplicationResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public creator?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public description?: string;
    public labels?: Array<EnvironmentViewLabels>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateApplicationResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateApplicationResponse {
        this['name'] = name;
        return this;
    }
    public withCreator(creator: string): CreateApplicationResponse {
        this['creator'] = creator;
        return this;
    }
    public withProjectId(projectId: string): CreateApplicationResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateApplicationResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreateTime(createTime: number): CreateApplicationResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): CreateApplicationResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDescription(description: string): CreateApplicationResponse {
        this['description'] = description;
        return this;
    }
    public withLabels(labels: Array<EnvironmentViewLabels>): CreateApplicationResponse {
        this['labels'] = labels;
        return this;
    }
}