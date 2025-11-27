import { Tag } from './Tag';


export class TransitSubnet {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'virsubnet_project_id'?: string;
    private 'project_id'?: string;
    private 'vpc_id'?: string;
    private 'virsubnet_id'?: string;
    public cidr?: string;
    public type?: TransitSubnetTypeEnum | string;
    public status?: TransitSubnetStatusEnum | string;
    private 'ip_count'?: number;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    public constructor(id?: string, name?: string, description?: string, virsubnetProjectId?: string, projectId?: string, vpcId?: string, virsubnetId?: string, cidr?: string, type?: string, status?: string, ipCount?: number, createdAt?: Date, updatedAt?: Date, tags?: Array<Tag>) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['virsubnet_project_id'] = virsubnetProjectId;
        this['project_id'] = projectId;
        this['vpc_id'] = vpcId;
        this['virsubnet_id'] = virsubnetId;
        this['cidr'] = cidr;
        this['type'] = type;
        this['status'] = status;
        this['ip_count'] = ipCount;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['tags'] = tags;
    }
    public withId(id: string): TransitSubnet {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TransitSubnet {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TransitSubnet {
        this['description'] = description;
        return this;
    }
    public withVirsubnetProjectId(virsubnetProjectId: string): TransitSubnet {
        this['virsubnet_project_id'] = virsubnetProjectId;
        return this;
    }
    public set virsubnetProjectId(virsubnetProjectId: string  | undefined) {
        this['virsubnet_project_id'] = virsubnetProjectId;
    }
    public get virsubnetProjectId(): string | undefined {
        return this['virsubnet_project_id'];
    }
    public withProjectId(projectId: string): TransitSubnet {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVpcId(vpcId: string): TransitSubnet {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVirsubnetId(virsubnetId: string): TransitSubnet {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withCidr(cidr: string): TransitSubnet {
        this['cidr'] = cidr;
        return this;
    }
    public withType(type: TransitSubnetTypeEnum | string): TransitSubnet {
        this['type'] = type;
        return this;
    }
    public withStatus(status: TransitSubnetStatusEnum | string): TransitSubnet {
        this['status'] = status;
        return this;
    }
    public withIpCount(ipCount: number): TransitSubnet {
        this['ip_count'] = ipCount;
        return this;
    }
    public set ipCount(ipCount: number  | undefined) {
        this['ip_count'] = ipCount;
    }
    public get ipCount(): number | undefined {
        return this['ip_count'];
    }
    public withCreatedAt(createdAt: Date): TransitSubnet {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): TransitSubnet {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): TransitSubnet {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransitSubnetTypeEnum {
    VPC = 'VPC'
}
/**
    * @export
    * @enum {string}
    */
export enum TransitSubnetStatusEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}
