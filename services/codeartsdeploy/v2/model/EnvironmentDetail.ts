import { EnvironmentPermissionDetail } from './EnvironmentPermissionDetail';
import { UserInfo } from './UserInfo';


export class EnvironmentDetail {
    public id?: string;
    public name?: string;
    public description?: string;
    public os?: string;
    private 'project_id'?: string;
    private 'nick_name'?: string;
    private 'deploy_type'?: number;
    private 'created_time'?: string;
    private 'instance_count'?: number;
    private 'created_by'?: UserInfo;
    public permission?: EnvironmentPermissionDetail;
    public constructor() { 
    }
    public withId(id: string): EnvironmentDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EnvironmentDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnvironmentDetail {
        this['description'] = description;
        return this;
    }
    public withOs(os: string): EnvironmentDetail {
        this['os'] = os;
        return this;
    }
    public withProjectId(projectId: string): EnvironmentDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withNickName(nickName: string): EnvironmentDetail {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withDeployType(deployType: number): EnvironmentDetail {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: number  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): number | undefined {
        return this['deploy_type'];
    }
    public withCreatedTime(createdTime: string): EnvironmentDetail {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withInstanceCount(instanceCount: number): EnvironmentDetail {
        this['instance_count'] = instanceCount;
        return this;
    }
    public set instanceCount(instanceCount: number  | undefined) {
        this['instance_count'] = instanceCount;
    }
    public get instanceCount(): number | undefined {
        return this['instance_count'];
    }
    public withCreatedBy(createdBy: UserInfo): EnvironmentDetail {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserInfo  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): UserInfo | undefined {
        return this['created_by'];
    }
    public withPermission(permission: EnvironmentPermissionDetail): EnvironmentDetail {
        this['permission'] = permission;
        return this;
    }
}