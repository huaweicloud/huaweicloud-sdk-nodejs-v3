import { ApplyPolicyId } from './ApplyPolicyId';
import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { EnterpriseProjectId } from './EnterpriseProjectId';
import { Name } from './Name';
import { SiteConnection } from './SiteConnection';
import { SiteInformation } from './SiteInformation';
import { SiteNetworkState } from './SiteNetworkState';
import { SiteNetworkStateEnum } from './SiteNetworkStateEnum';
import { SiteNetworkTopology } from './SiteNetworkTopology';
import { SiteNetworkTopologyEnum } from './SiteNetworkTopologyEnum';
import { Tag } from './Tag';
import { Tags } from './Tags';
import { UUID64Identifier } from './UUID64Identifier';
import { UpdatedAt } from './UpdatedAt';


export class SiteNetworkEntry {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'domain_id'?: string;
    public state?: SiteNetworkStateEnum;
    private 'enterprise_project_id'?: string;
    private 'apply_policy_id'?: string;
    public tags?: Array<Tag>;
    public topology?: SiteNetworkTopologyEnum;
    public connections?: Array<SiteConnection>;
    public sites?: Array<SiteInformation>;
    private 'hub_site'?: SiteInformation;
    private 'spoke_sites'?: Array<SiteInformation>;
    public constructor(id?: string, name?: string, createdAt?: Date, updatedAt?: Date, domainId?: string, state?: SiteNetworkStateEnum, applyPolicyId?: string, topology?: SiteNetworkTopologyEnum, connections?: Array<SiteConnection>) { 
        this['id'] = id;
        this['name'] = name;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['domain_id'] = domainId;
        this['state'] = state;
        this['apply_policy_id'] = applyPolicyId;
        this['topology'] = topology;
        this['connections'] = connections;
    }
    public withId(id: string): SiteNetworkEntry {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SiteNetworkEntry {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SiteNetworkEntry {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): SiteNetworkEntry {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): SiteNetworkEntry {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): SiteNetworkEntry {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withState(state: SiteNetworkStateEnum): SiteNetworkEntry {
        this['state'] = state;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SiteNetworkEntry {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withApplyPolicyId(applyPolicyId: string): SiteNetworkEntry {
        this['apply_policy_id'] = applyPolicyId;
        return this;
    }
    public set applyPolicyId(applyPolicyId: string  | undefined) {
        this['apply_policy_id'] = applyPolicyId;
    }
    public get applyPolicyId(): string | undefined {
        return this['apply_policy_id'];
    }
    public withTags(tags: Array<Tag>): SiteNetworkEntry {
        this['tags'] = tags;
        return this;
    }
    public withTopology(topology: SiteNetworkTopologyEnum): SiteNetworkEntry {
        this['topology'] = topology;
        return this;
    }
    public withConnections(connections: Array<SiteConnection>): SiteNetworkEntry {
        this['connections'] = connections;
        return this;
    }
    public withSites(sites: Array<SiteInformation>): SiteNetworkEntry {
        this['sites'] = sites;
        return this;
    }
    public withHubSite(hubSite: SiteInformation): SiteNetworkEntry {
        this['hub_site'] = hubSite;
        return this;
    }
    public set hubSite(hubSite: SiteInformation  | undefined) {
        this['hub_site'] = hubSite;
    }
    public get hubSite(): SiteInformation | undefined {
        return this['hub_site'];
    }
    public withSpokeSites(spokeSites: Array<SiteInformation>): SiteNetworkEntry {
        this['spoke_sites'] = spokeSites;
        return this;
    }
    public set spokeSites(spokeSites: Array<SiteInformation>  | undefined) {
        this['spoke_sites'] = spokeSites;
    }
    public get spokeSites(): Array<SiteInformation> | undefined {
        return this['spoke_sites'];
    }
}