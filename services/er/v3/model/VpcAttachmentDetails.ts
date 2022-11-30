import { Tag } from './Tag';


export class VpcAttachmentDetails {
    public id: string;
    public name: string;
    private 'vpc_id': string | undefined;
    private 'virsubnet_id': string | undefined;
    private 'auto_create_vpc_routes'?: boolean | undefined;
    public state: string;
    private 'created_at': Date | undefined;
    private 'updated_at'?: Date | undefined;
    public tags?: Array<Tag>;
    public description?: string;
    private 'project_id': string | undefined;
    private 'vpc_project_id'?: string | undefined;
    public constructor(id?: any, name?: any, vpcId?: any, virsubnetId?: any, state?: any, createdAt?: any, projectId?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['vpc_id'] = vpcId;
        this['virsubnet_id'] = virsubnetId;
        this['state'] = state;
        this['created_at'] = createdAt;
        this['project_id'] = projectId;
    }
    public withId(id: string): VpcAttachmentDetails {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpcAttachmentDetails {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: string): VpcAttachmentDetails {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withVirsubnetId(virsubnetId: string): VpcAttachmentDetails {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId() {
        return this['virsubnet_id'];
    }
    public withAutoCreateVpcRoutes(autoCreateVpcRoutes: boolean): VpcAttachmentDetails {
        this['auto_create_vpc_routes'] = autoCreateVpcRoutes;
        return this;
    }
    public set autoCreateVpcRoutes(autoCreateVpcRoutes: boolean | undefined) {
        this['auto_create_vpc_routes'] = autoCreateVpcRoutes;
    }
    public get autoCreateVpcRoutes() {
        return this['auto_create_vpc_routes'];
    }
    public withState(state: string): VpcAttachmentDetails {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: Date): VpcAttachmentDetails {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): VpcAttachmentDetails {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): VpcAttachmentDetails {
        this['tags'] = tags;
        return this;
    }
    public withDescription(description: string): VpcAttachmentDetails {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): VpcAttachmentDetails {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withVpcProjectId(vpcProjectId: string): VpcAttachmentDetails {
        this['vpc_project_id'] = vpcProjectId;
        return this;
    }
    public set vpcProjectId(vpcProjectId: string | undefined) {
        this['vpc_project_id'] = vpcProjectId;
    }
    public get vpcProjectId() {
        return this['vpc_project_id'];
    }
}