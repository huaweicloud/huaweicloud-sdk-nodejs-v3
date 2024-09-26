import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { EnterpriseProjectId } from './EnterpriseProjectId';
import { Name } from './Name';
import { Tag } from './Tag';
import { Tags } from './Tags';
import { UUID32Identifier } from './UUID32Identifier';
import { UpdatedAt } from './UpdatedAt';


export class CloudConnection {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'domain_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    public status?: CloudConnectionStatusEnum | string;
    private 'admin_state_up'?: boolean;
    private 'used_scene'?: CloudConnectionUsedSceneEnum | string;
    private 'network_instance_number'?: number;
    private 'bandwidth_package_number'?: number;
    private 'inter_region_bandwidth_number'?: number;
    public constructor(id?: string, name?: string, domainId?: string, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['name'] = name;
        this['domain_id'] = domainId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): CloudConnection {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CloudConnection {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CloudConnection {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): CloudConnection {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CloudConnection {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreatedAt(createdAt: Date): CloudConnection {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CloudConnection {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): CloudConnection {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: CloudConnectionStatusEnum | string): CloudConnection {
        this['status'] = status;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CloudConnection {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withUsedScene(usedScene: CloudConnectionUsedSceneEnum | string): CloudConnection {
        this['used_scene'] = usedScene;
        return this;
    }
    public set usedScene(usedScene: CloudConnectionUsedSceneEnum | string  | undefined) {
        this['used_scene'] = usedScene;
    }
    public get usedScene(): CloudConnectionUsedSceneEnum | string | undefined {
        return this['used_scene'];
    }
    public withNetworkInstanceNumber(networkInstanceNumber: number): CloudConnection {
        this['network_instance_number'] = networkInstanceNumber;
        return this;
    }
    public set networkInstanceNumber(networkInstanceNumber: number  | undefined) {
        this['network_instance_number'] = networkInstanceNumber;
    }
    public get networkInstanceNumber(): number | undefined {
        return this['network_instance_number'];
    }
    public withBandwidthPackageNumber(bandwidthPackageNumber: number): CloudConnection {
        this['bandwidth_package_number'] = bandwidthPackageNumber;
        return this;
    }
    public set bandwidthPackageNumber(bandwidthPackageNumber: number  | undefined) {
        this['bandwidth_package_number'] = bandwidthPackageNumber;
    }
    public get bandwidthPackageNumber(): number | undefined {
        return this['bandwidth_package_number'];
    }
    public withInterRegionBandwidthNumber(interRegionBandwidthNumber: number): CloudConnection {
        this['inter_region_bandwidth_number'] = interRegionBandwidthNumber;
        return this;
    }
    public set interRegionBandwidthNumber(interRegionBandwidthNumber: number  | undefined) {
        this['inter_region_bandwidth_number'] = interRegionBandwidthNumber;
    }
    public get interRegionBandwidthNumber(): number | undefined {
        return this['inter_region_bandwidth_number'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CloudConnectionStatusEnum {
    ACTIVE = 'ACTIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum CloudConnectionUsedSceneEnum {
    VPC = 'vpc'
}
