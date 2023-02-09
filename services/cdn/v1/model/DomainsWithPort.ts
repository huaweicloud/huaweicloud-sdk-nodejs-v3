import { DomainOriginHost } from './DomainOriginHost';
import { SourceWithPort } from './SourceWithPort';


export class DomainsWithPort {
    public id?: string;
    private 'domain_name'?: string | undefined;
    private 'business_type'?: string | undefined;
    private 'user_domain_id'?: string | undefined;
    private 'domain_status'?: string | undefined;
    public cname?: string;
    public sources?: Array<SourceWithPort>;
    private 'domain_origin_host'?: DomainOriginHost | undefined;
    private 'https_status'?: number | undefined;
    private 'create_time'?: number | undefined;
    private 'modify_time'?: number | undefined;
    public disabled?: number;
    public locked?: number;
    private 'auto_refresh_preheat'?: number | undefined;
    private 'service_area'?: DomainsWithPortServiceAreaEnum | undefined;
    private 'range_status'?: string | undefined;
    private 'follow_status'?: string | undefined;
    private 'origin_status'?: string | undefined;
    private 'banned_reason'?: string | undefined;
    private 'locked_reason'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): DomainsWithPort {
        this['id'] = id;
        return this;
    }
    public withDomainName(domainName: string): DomainsWithPort {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
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
    public withUserDomainId(userDomainId: string): DomainsWithPort {
        this['user_domain_id'] = userDomainId;
        return this;
    }
    public set userDomainId(userDomainId: string | undefined) {
        this['user_domain_id'] = userDomainId;
    }
    public get userDomainId() {
        return this['user_domain_id'];
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
    public withSources(sources: Array<SourceWithPort>): DomainsWithPort {
        this['sources'] = sources;
        return this;
    }
    public withDomainOriginHost(domainOriginHost: DomainOriginHost): DomainsWithPort {
        this['domain_origin_host'] = domainOriginHost;
        return this;
    }
    public set domainOriginHost(domainOriginHost: DomainOriginHost | undefined) {
        this['domain_origin_host'] = domainOriginHost;
    }
    public get domainOriginHost() {
        return this['domain_origin_host'];
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
    public withModifyTime(modifyTime: number): DomainsWithPort {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime() {
        return this['modify_time'];
    }
    public withDisabled(disabled: number): DomainsWithPort {
        this['disabled'] = disabled;
        return this;
    }
    public withLocked(locked: number): DomainsWithPort {
        this['locked'] = locked;
        return this;
    }
    public withAutoRefreshPreheat(autoRefreshPreheat: number): DomainsWithPort {
        this['auto_refresh_preheat'] = autoRefreshPreheat;
        return this;
    }
    public set autoRefreshPreheat(autoRefreshPreheat: number | undefined) {
        this['auto_refresh_preheat'] = autoRefreshPreheat;
    }
    public get autoRefreshPreheat() {
        return this['auto_refresh_preheat'];
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
    public withRangeStatus(rangeStatus: string): DomainsWithPort {
        this['range_status'] = rangeStatus;
        return this;
    }
    public set rangeStatus(rangeStatus: string | undefined) {
        this['range_status'] = rangeStatus;
    }
    public get rangeStatus() {
        return this['range_status'];
    }
    public withFollowStatus(followStatus: string): DomainsWithPort {
        this['follow_status'] = followStatus;
        return this;
    }
    public set followStatus(followStatus: string | undefined) {
        this['follow_status'] = followStatus;
    }
    public get followStatus() {
        return this['follow_status'];
    }
    public withOriginStatus(originStatus: string): DomainsWithPort {
        this['origin_status'] = originStatus;
        return this;
    }
    public set originStatus(originStatus: string | undefined) {
        this['origin_status'] = originStatus;
    }
    public get originStatus() {
        return this['origin_status'];
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
