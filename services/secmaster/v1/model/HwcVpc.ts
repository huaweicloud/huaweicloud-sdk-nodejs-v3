import { HwcVpcCloudResource } from './HwcVpcCloudResource';
import { Tag } from './Tag';


export class HwcVpc {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'protected_status'?: string;
    public cidr?: string;
    private 'extend_cidrs'?: Array<string>;
    public status?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'cloud_resources'?: Array<HwcVpcCloudResource>;
    public tags?: Array<Tag>;
    public constructor(id?: string, name?: string, protectedStatus?: string, status?: string, projectId?: string, createdAt?: string, updatedAt?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['protected_status'] = protectedStatus;
        this['status'] = status;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): HwcVpc {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HwcVpc {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): HwcVpc {
        this['description'] = description;
        return this;
    }
    public withProtectedStatus(protectedStatus: string): HwcVpc {
        this['protected_status'] = protectedStatus;
        return this;
    }
    public set protectedStatus(protectedStatus: string  | undefined) {
        this['protected_status'] = protectedStatus;
    }
    public get protectedStatus(): string | undefined {
        return this['protected_status'];
    }
    public withCidr(cidr: string): HwcVpc {
        this['cidr'] = cidr;
        return this;
    }
    public withExtendCidrs(extendCidrs: Array<string>): HwcVpc {
        this['extend_cidrs'] = extendCidrs;
        return this;
    }
    public set extendCidrs(extendCidrs: Array<string>  | undefined) {
        this['extend_cidrs'] = extendCidrs;
    }
    public get extendCidrs(): Array<string> | undefined {
        return this['extend_cidrs'];
    }
    public withStatus(status: string): HwcVpc {
        this['status'] = status;
        return this;
    }
    public withProjectId(projectId: string): HwcVpc {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): HwcVpc {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreatedAt(createdAt: string): HwcVpc {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): HwcVpc {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withCloudResources(cloudResources: Array<HwcVpcCloudResource>): HwcVpc {
        this['cloud_resources'] = cloudResources;
        return this;
    }
    public set cloudResources(cloudResources: Array<HwcVpcCloudResource>  | undefined) {
        this['cloud_resources'] = cloudResources;
    }
    public get cloudResources(): Array<HwcVpcCloudResource> | undefined {
        return this['cloud_resources'];
    }
    public withTags(tags: Array<Tag>): HwcVpc {
        this['tags'] = tags;
        return this;
    }
}