import { DomainOriginHost } from './DomainOriginHost';
import { EpResourceTag } from './EpResourceTag';
import { Sources } from './Sources';


export class Domains {
    public id?: string;
    private 'domain_name'?: string;
    private 'business_type'?: string;
    private 'domain_status'?: string;
    public cname?: string;
    public sources?: Array<Sources>;
    private 'domain_origin_host'?: DomainOriginHost;
    private 'https_status'?: number;
    private 'create_time'?: number;
    private 'modify_time'?: number;
    public disabled?: number;
    public locked?: number;
    private 'auto_refresh_preheat'?: number;
    private 'service_area'?: DomainsServiceAreaEnum | string;
    private 'range_status'?: string;
    private 'follow_status'?: string;
    private 'origin_status'?: string;
    private 'banned_reason'?: string;
    private 'locked_reason'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<EpResourceTag>;
    public constructor() { 
    }
    public withId(id: string): Domains {
        this['id'] = id;
        return this;
    }
    public withDomainName(domainName: string): Domains {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withBusinessType(businessType: string): Domains {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withDomainStatus(domainStatus: string): Domains {
        this['domain_status'] = domainStatus;
        return this;
    }
    public set domainStatus(domainStatus: string  | undefined) {
        this['domain_status'] = domainStatus;
    }
    public get domainStatus(): string | undefined {
        return this['domain_status'];
    }
    public withCname(cname: string): Domains {
        this['cname'] = cname;
        return this;
    }
    public withSources(sources: Array<Sources>): Domains {
        this['sources'] = sources;
        return this;
    }
    public withDomainOriginHost(domainOriginHost: DomainOriginHost): Domains {
        this['domain_origin_host'] = domainOriginHost;
        return this;
    }
    public set domainOriginHost(domainOriginHost: DomainOriginHost  | undefined) {
        this['domain_origin_host'] = domainOriginHost;
    }
    public get domainOriginHost(): DomainOriginHost | undefined {
        return this['domain_origin_host'];
    }
    public withHttpsStatus(httpsStatus: number): Domains {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: number  | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus(): number | undefined {
        return this['https_status'];
    }
    public withCreateTime(createTime: number): Domains {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withModifyTime(modifyTime: number): Domains {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number  | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime(): number | undefined {
        return this['modify_time'];
    }
    public withDisabled(disabled: number): Domains {
        this['disabled'] = disabled;
        return this;
    }
    public withLocked(locked: number): Domains {
        this['locked'] = locked;
        return this;
    }
    public withAutoRefreshPreheat(autoRefreshPreheat: number): Domains {
        this['auto_refresh_preheat'] = autoRefreshPreheat;
        return this;
    }
    public set autoRefreshPreheat(autoRefreshPreheat: number  | undefined) {
        this['auto_refresh_preheat'] = autoRefreshPreheat;
    }
    public get autoRefreshPreheat(): number | undefined {
        return this['auto_refresh_preheat'];
    }
    public withServiceArea(serviceArea: DomainsServiceAreaEnum | string): Domains {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: DomainsServiceAreaEnum | string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): DomainsServiceAreaEnum | string | undefined {
        return this['service_area'];
    }
    public withRangeStatus(rangeStatus: string): Domains {
        this['range_status'] = rangeStatus;
        return this;
    }
    public set rangeStatus(rangeStatus: string  | undefined) {
        this['range_status'] = rangeStatus;
    }
    public get rangeStatus(): string | undefined {
        return this['range_status'];
    }
    public withFollowStatus(followStatus: string): Domains {
        this['follow_status'] = followStatus;
        return this;
    }
    public set followStatus(followStatus: string  | undefined) {
        this['follow_status'] = followStatus;
    }
    public get followStatus(): string | undefined {
        return this['follow_status'];
    }
    public withOriginStatus(originStatus: string): Domains {
        this['origin_status'] = originStatus;
        return this;
    }
    public set originStatus(originStatus: string  | undefined) {
        this['origin_status'] = originStatus;
    }
    public get originStatus(): string | undefined {
        return this['origin_status'];
    }
    public withBannedReason(bannedReason: string): Domains {
        this['banned_reason'] = bannedReason;
        return this;
    }
    public set bannedReason(bannedReason: string  | undefined) {
        this['banned_reason'] = bannedReason;
    }
    public get bannedReason(): string | undefined {
        return this['banned_reason'];
    }
    public withLockedReason(lockedReason: string): Domains {
        this['locked_reason'] = lockedReason;
        return this;
    }
    public set lockedReason(lockedReason: string  | undefined) {
        this['locked_reason'] = lockedReason;
    }
    public get lockedReason(): string | undefined {
        return this['locked_reason'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Domains {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<EpResourceTag>): Domains {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DomainsServiceAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china',
    GLOBAL = 'global'
}
