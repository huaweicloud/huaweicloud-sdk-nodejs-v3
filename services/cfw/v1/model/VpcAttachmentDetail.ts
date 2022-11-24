import { Tag } from './Tag';


export class VpcAttachmentDetail {
    public id?: string;
    public name?: string;
    private 'vpc_id'?: string | undefined;
    private 'virsubnet_id'?: string | undefined;
    public state?: string;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public tags?: Array<Tag>;
    public description?: string;
    private 'project_id'?: string | undefined;
    private 'vpc_project_id'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): VpcAttachmentDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpcAttachmentDetail {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: string): VpcAttachmentDetail {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withVirsubnetId(virsubnetId: string): VpcAttachmentDetail {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId() {
        return this['virsubnet_id'];
    }
    public withState(state: string): VpcAttachmentDetail {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: string): VpcAttachmentDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): VpcAttachmentDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): VpcAttachmentDetail {
        this['tags'] = tags;
        return this;
    }
    public withDescription(description: string): VpcAttachmentDetail {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): VpcAttachmentDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withVpcProjectId(vpcProjectId: string): VpcAttachmentDetail {
        this['vpc_project_id'] = vpcProjectId;
        return this;
    }
    public set vpcProjectId(vpcProjectId: string | undefined) {
        this['vpc_project_id'] = vpcProjectId;
    }
    public get vpcProjectId() {
        return this['vpc_project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): VpcAttachmentDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}