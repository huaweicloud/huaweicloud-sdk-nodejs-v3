import { DownlinkVpc } from './DownlinkVpc';
import { Tag } from './Tag';


export class PrivateNat {
    public id?: string;
    private 'project_id'?: string;
    public name?: string;
    public description?: string;
    public spec?: PrivateNatSpecEnum | string;
    public status?: PrivateNatStatusEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'downlink_vpcs'?: Array<DownlinkVpc>;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    private 'rule_max'?: number;
    private 'transit_ip_pool_size_max'?: number;
    public constructor(id?: string, projectId?: string, name?: string, description?: string, spec?: string, status?: string, createdAt?: Date, updatedAt?: Date, downlinkVpcs?: Array<DownlinkVpc>, enterpriseProjectId?: string) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['name'] = name;
        this['description'] = description;
        this['spec'] = spec;
        this['status'] = status;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['downlink_vpcs'] = downlinkVpcs;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withId(id: string): PrivateNat {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): PrivateNat {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): PrivateNat {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PrivateNat {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: PrivateNatSpecEnum | string): PrivateNat {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PrivateNatStatusEnum | string): PrivateNat {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): PrivateNat {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): PrivateNat {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDownlinkVpcs(downlinkVpcs: Array<DownlinkVpc>): PrivateNat {
        this['downlink_vpcs'] = downlinkVpcs;
        return this;
    }
    public set downlinkVpcs(downlinkVpcs: Array<DownlinkVpc>  | undefined) {
        this['downlink_vpcs'] = downlinkVpcs;
    }
    public get downlinkVpcs(): Array<DownlinkVpc> | undefined {
        return this['downlink_vpcs'];
    }
    public withTags(tags: Array<Tag>): PrivateNat {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PrivateNat {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRuleMax(ruleMax: number): PrivateNat {
        this['rule_max'] = ruleMax;
        return this;
    }
    public set ruleMax(ruleMax: number  | undefined) {
        this['rule_max'] = ruleMax;
    }
    public get ruleMax(): number | undefined {
        return this['rule_max'];
    }
    public withTransitIpPoolSizeMax(transitIpPoolSizeMax: number): PrivateNat {
        this['transit_ip_pool_size_max'] = transitIpPoolSizeMax;
        return this;
    }
    public set transitIpPoolSizeMax(transitIpPoolSizeMax: number  | undefined) {
        this['transit_ip_pool_size_max'] = transitIpPoolSizeMax;
    }
    public get transitIpPoolSizeMax(): number | undefined {
        return this['transit_ip_pool_size_max'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrivateNatSpecEnum {
    SMALL = 'Small',
    MEDIUM = 'Medium',
    LARGE = 'Large',
    EXTRA_LARGE = 'Extra-large',
    EXTRA_XLARGE = 'Extra-xlarge'
}
/**
    * @export
    * @enum {string}
    */
export enum PrivateNatStatusEnum {
    ACTIVE = 'ACTIVE',
    FROZEN = 'FROZEN',
    INACTIVE = 'INACTIVE'
}
