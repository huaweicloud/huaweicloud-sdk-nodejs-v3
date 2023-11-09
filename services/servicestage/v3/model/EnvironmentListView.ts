import { EnvironmentViewLabels } from './EnvironmentViewLabels';


export class EnvironmentListView {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'vpc_id'?: string;
    public creator?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'deploy_mode'?: EnvironmentListViewDeployModeEnum | string;
    public labels?: Array<EnvironmentViewLabels>;
    public constructor() { 
    }
    public withId(id: string): EnvironmentListView {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EnvironmentListView {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnvironmentListView {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): EnvironmentListView {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): EnvironmentListView {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVpcId(vpcId: string): EnvironmentListView {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCreator(creator: string): EnvironmentListView {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: number): EnvironmentListView {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): EnvironmentListView {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeployMode(deployMode: EnvironmentListViewDeployModeEnum | string): EnvironmentListView {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: EnvironmentListViewDeployModeEnum | string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): EnvironmentListViewDeployModeEnum | string | undefined {
        return this['deploy_mode'];
    }
    public withLabels(labels: Array<EnvironmentViewLabels>): EnvironmentListView {
        this['labels'] = labels;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EnvironmentListViewDeployModeEnum {
    CONTAINER = 'container',
    VIRTUALMACHINE = 'virtualmachine',
    MIXED = 'mixed'
}
