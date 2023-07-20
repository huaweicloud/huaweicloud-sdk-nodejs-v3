import { Tag } from './Tag';


export class VpcAttachmentCreateRequest {
    private 'vpc_id'?: string;
    public name?: string;
    private 'virsubnet_id'?: string;
    public description?: string;
    private 'auto_create_vpc_routes'?: boolean;
    public tags?: Array<Tag>;
    public constructor(vpcId?: string, name?: string, virsubnetId?: string) { 
        this['vpc_id'] = vpcId;
        this['name'] = name;
        this['virsubnet_id'] = virsubnetId;
    }
    public withVpcId(vpcId: string): VpcAttachmentCreateRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withName(name: string): VpcAttachmentCreateRequest {
        this['name'] = name;
        return this;
    }
    public withVirsubnetId(virsubnetId: string): VpcAttachmentCreateRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withDescription(description: string): VpcAttachmentCreateRequest {
        this['description'] = description;
        return this;
    }
    public withAutoCreateVpcRoutes(autoCreateVpcRoutes: boolean): VpcAttachmentCreateRequest {
        this['auto_create_vpc_routes'] = autoCreateVpcRoutes;
        return this;
    }
    public set autoCreateVpcRoutes(autoCreateVpcRoutes: boolean  | undefined) {
        this['auto_create_vpc_routes'] = autoCreateVpcRoutes;
    }
    public get autoCreateVpcRoutes(): boolean | undefined {
        return this['auto_create_vpc_routes'];
    }
    public withTags(tags: Array<Tag>): VpcAttachmentCreateRequest {
        this['tags'] = tags;
        return this;
    }
}