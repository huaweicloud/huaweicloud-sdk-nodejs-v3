import { SourcesConfig } from './SourcesConfig';


export class DomainsWithPort {
    public id?: string;
    private 'business_type'?: string | undefined;
    private 'domain_status'?: string | undefined;
    public cname?: string;
    public sources?: Array<SourcesConfig>;
    private 'https_status'?: number | undefined;
    private 'create_time'?: number | undefined;
    private 'update_time'?: number | undefined;
    public disabled?: number;
    public locked?: number;
    private 'service_area'?: DomainsWithPortServiceAreaEnum | undefined;
    private 'banned_reason'?: string | undefined;
    private 'locked_reason'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): DomainsWithPort {
        this['id'] = id;
        return this;
    }
    public withBusinessType(businessType: string): DomainsWithPort {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType() {
        return this['business_type'];
    }
    public withDomainStatus(domainStatus: string): DomainsWithPort {
        this['domain_status'] = domainStatus;
        return this;
    }
    public set domainStatus(domainStatus: string | undefined) {
        this['domain_status'] = domainStatus;
    }
    public get domainStatus() {
        return this['domain_status'];
    }
    public withCname(cname: string): DomainsWithPort {
        this['cname'] = cname;
        return this;
    }
    public withSources(sources: Array<SourcesConfig>): DomainsWithPort {
        this['sources'] = sources;
        return this;
    }
    public withHttpsStatus(httpsStatus: number): DomainsWithPort {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: number | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus() {
        return this['https_status'];
    }
    public withCreateTime(createTime: number): DomainsWithPort {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): DomainsWithPort {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withDisabled(disabled: number): DomainsWithPort {
        this['disabled'] = disabled;
        return this;
    }
    public withLocked(locked: number): DomainsWithPort {
        this['locked'] = locked;
        return this;
    }
    public withServiceArea(serviceArea: DomainsWithPortServiceAreaEnum): DomainsWithPort {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: DomainsWithPortServiceAreaEnum | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withBannedReason(bannedReason: string): DomainsWithPort {
        this['banned_reason'] = bannedReason;
        return this;
    }
    public set bannedReason(bannedReason: string | undefined) {
        this['banned_reason'] = bannedReason;
    }
    public get bannedReason() {
        return this['banned_reason'];
    }
    public withLockedReason(lockedReason: string): DomainsWithPort {
        this['locked_reason'] = lockedReason;
        return this;
    }
    public set lockedReason(lockedReason: string | undefined) {
        this['locked_reason'] = lockedReason;
    }
    public get lockedReason() {
        return this['locked_reason'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DomainsWithPort {
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

/**
    * @export
    * @enum {string}
    */
export enum DomainsWithPortServiceAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china',
    GLOBAL = 'global'
}
