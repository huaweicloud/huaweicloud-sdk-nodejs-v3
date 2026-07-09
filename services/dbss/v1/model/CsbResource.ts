import { AffectedResource } from './AffectedResource';
import { CsbResourceTag } from './CsbResourceTag';
import { ResourceEnvironment } from './ResourceEnvironment';


export class CsbResource {
    public tags?: Array<CsbResourceTag>;
    private 'affected_resources'?: Array<AffectedResource>;
    private 'create_time'?: Date;
    public description?: string;
    public environment?: ResourceEnvironment;
    public name?: string;
    public provider?: string;
    private 'resource_id'?: string;
    private 'security_group_id'?: string;
    private 'subnet_id'?: string;
    public type?: string;
    private 'update_time'?: Date;
    public urn?: string;
    public urnext?: string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withTags(tags: Array<CsbResourceTag>): CsbResource {
        this['tags'] = tags;
        return this;
    }
    public withAffectedResources(affectedResources: Array<AffectedResource>): CsbResource {
        this['affected_resources'] = affectedResources;
        return this;
    }
    public set affectedResources(affectedResources: Array<AffectedResource>  | undefined) {
        this['affected_resources'] = affectedResources;
    }
    public get affectedResources(): Array<AffectedResource> | undefined {
        return this['affected_resources'];
    }
    public withCreateTime(createTime: Date): CsbResource {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withDescription(description: string): CsbResource {
        this['description'] = description;
        return this;
    }
    public withEnvironment(environment: ResourceEnvironment): CsbResource {
        this['environment'] = environment;
        return this;
    }
    public withName(name: string): CsbResource {
        this['name'] = name;
        return this;
    }
    public withProvider(provider: string): CsbResource {
        this['provider'] = provider;
        return this;
    }
    public withResourceId(resourceId: string): CsbResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CsbResource {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): CsbResource {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withType(type: string): CsbResource {
        this['type'] = type;
        return this;
    }
    public withUpdateTime(updateTime: Date): CsbResource {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUrn(urn: string): CsbResource {
        this['urn'] = urn;
        return this;
    }
    public withUrnext(urnext: string): CsbResource {
        this['urnext'] = urnext;
        return this;
    }
    public withVpcId(vpcId: string): CsbResource {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}