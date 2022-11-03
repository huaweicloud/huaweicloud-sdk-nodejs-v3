import { AccelerateIp } from './AccelerateIp';
import { ConfigStatus } from './ConfigStatus';
import { FrozenInfo } from './FrozenInfo';
import { ResourceTag } from './ResourceTag';


export class AcceleratorDetail {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: ConfigStatus;
    private 'ip_sets'?: Array<AccelerateIp> | undefined;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    private 'domain_id'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'flavor_id'?: string | undefined;
    private 'frozen_info'?: FrozenInfo | undefined;
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withId(id: string): AcceleratorDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AcceleratorDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AcceleratorDetail {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ConfigStatus): AcceleratorDetail {
        this['status'] = status;
        return this;
    }
    public withIpSets(ipSets: Array<AccelerateIp>): AcceleratorDetail {
        this['ip_sets'] = ipSets;
        return this;
    }
    public set ipSets(ipSets: Array<AccelerateIp> | undefined) {
        this['ip_sets'] = ipSets;
    }
    public get ipSets() {
        return this['ip_sets'];
    }
    public withCreatedAt(createdAt: Date): AcceleratorDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): AcceleratorDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): AcceleratorDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AcceleratorDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFlavorId(flavorId: string): AcceleratorDetail {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId() {
        return this['flavor_id'];
    }
    public withFrozenInfo(frozenInfo: FrozenInfo): AcceleratorDetail {
        this['frozen_info'] = frozenInfo;
        return this;
    }
    public set frozenInfo(frozenInfo: FrozenInfo | undefined) {
        this['frozen_info'] = frozenInfo;
    }
    public get frozenInfo() {
        return this['frozen_info'];
    }
    public withTags(tags: Array<ResourceTag>): AcceleratorDetail {
        this['tags'] = tags;
        return this;
    }
}