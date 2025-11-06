import { InstanceStatistics } from './InstanceStatistics';
import { Resource } from './Resource';
import { StatusSchema } from './StatusSchema';


export class ResourceGroupInfo {
    private 'group_name'?: string;
    public type?: string;
    private 'relation_ids'?: Array<string>;
    private 'group_id'?: string;
    private 'create_time'?: number;
    private 'instance_statistics'?: InstanceStatistics;
    public status?: StatusSchema;
    private 'enterprise_project_id'?: string;
    public resources?: Array<Resource>;
    public constructor() { 
    }
    public withGroupName(groupName: string): ResourceGroupInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withType(type: string): ResourceGroupInfo {
        this['type'] = type;
        return this;
    }
    public withRelationIds(relationIds: Array<string>): ResourceGroupInfo {
        this['relation_ids'] = relationIds;
        return this;
    }
    public set relationIds(relationIds: Array<string>  | undefined) {
        this['relation_ids'] = relationIds;
    }
    public get relationIds(): Array<string> | undefined {
        return this['relation_ids'];
    }
    public withGroupId(groupId: string): ResourceGroupInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withCreateTime(createTime: number): ResourceGroupInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withInstanceStatistics(instanceStatistics: InstanceStatistics): ResourceGroupInfo {
        this['instance_statistics'] = instanceStatistics;
        return this;
    }
    public set instanceStatistics(instanceStatistics: InstanceStatistics  | undefined) {
        this['instance_statistics'] = instanceStatistics;
    }
    public get instanceStatistics(): InstanceStatistics | undefined {
        return this['instance_statistics'];
    }
    public withStatus(status: StatusSchema): ResourceGroupInfo {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ResourceGroupInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withResources(resources: Array<Resource>): ResourceGroupInfo {
        this['resources'] = resources;
        return this;
    }
}