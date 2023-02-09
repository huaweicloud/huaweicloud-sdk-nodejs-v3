import { DomainOriginHost } from './DomainOriginHost';
import { Sources } from './Sources';


export class CreateDomainResponseBodyContent {
    public id?: string;
    private 'domain_name'?: string | undefined;
    private 'business_type'?: string | undefined;
    private 'service_area'?: string | undefined;
    private 'user_domain_id'?: string | undefined;
    private 'domain_status'?: string | undefined;
    public cname?: string;
    public sources?: Array<Sources>;
    private 'domain_origin_host'?: DomainOriginHost | undefined;
    private 'https_status'?: number | undefined;
    private 'create_time'?: number | undefined;
    private 'modify_time'?: number | undefined;
    public disabled?: number;
    public locked?: number;
    private 'range_status'?: string | undefined;
    private 'follow_status'?: string | undefined;
    private 'origin_status'?: string | undefined;
    private 'auto_refresh_preheat'?: number | undefined;
    public constructor() { 
    }
    public withId(id: string): CreateDomainResponseBodyContent {
        this['id'] = id;
        return this;
    }
    public withDomainName(domainName: string): CreateDomainResponseBodyContent {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withBusinessType(businessType: string): CreateDomainResponseBodyContent {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType() {
        return this['business_type'];
    }
    public withServiceArea(serviceArea: string): CreateDomainResponseBodyContent {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withUserDomainId(userDomainId: string): CreateDomainResponseBodyContent {
        this['user_domain_id'] = userDomainId;
        return this;
    }
    public set userDomainId(userDomainId: string | undefined) {
        this['user_domain_id'] = userDomainId;
    }
    public get userDomainId() {
        return this['user_domain_id'];
    }
    public withDomainStatus(domainStatus: string): CreateDomainResponseBodyContent {
        this['domain_status'] = domainStatus;
        return this;
    }
    public set domainStatus(domainStatus: string | undefined) {
        this['domain_status'] = domainStatus;
    }
    public get domainStatus() {
        return this['domain_status'];
    }
    public withCname(cname: string): CreateDomainResponseBodyContent {
        this['cname'] = cname;
        return this;
    }
    public withSources(sources: Array<Sources>): CreateDomainResponseBodyContent {
        this['sources'] = sources;
        return this;
    }
    public withDomainOriginHost(domainOriginHost: DomainOriginHost): CreateDomainResponseBodyContent {
        this['domain_origin_host'] = domainOriginHost;
        return this;
    }
    public set domainOriginHost(domainOriginHost: DomainOriginHost | undefined) {
        this['domain_origin_host'] = domainOriginHost;
    }
    public get domainOriginHost() {
        return this['domain_origin_host'];
    }
    public withHttpsStatus(httpsStatus: number): CreateDomainResponseBodyContent {
        this['https_status'] = httpsStatus;
        return this;
    }
    public set httpsStatus(httpsStatus: number | undefined) {
        this['https_status'] = httpsStatus;
    }
    public get httpsStatus() {
        return this['https_status'];
    }
    public withCreateTime(createTime: number): CreateDomainResponseBodyContent {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withModifyTime(modifyTime: number): CreateDomainResponseBodyContent {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime() {
        return this['modify_time'];
    }
    public withDisabled(disabled: number): CreateDomainResponseBodyContent {
        this['disabled'] = disabled;
        return this;
    }
    public withLocked(locked: number): CreateDomainResponseBodyContent {
        this['locked'] = locked;
        return this;
    }
    public withRangeStatus(rangeStatus: string): CreateDomainResponseBodyContent {
        this['range_status'] = rangeStatus;
        return this;
    }
    public set rangeStatus(rangeStatus: string | undefined) {
        this['range_status'] = rangeStatus;
    }
    public get rangeStatus() {
        return this['range_status'];
    }
    public withFollowStatus(followStatus: string): CreateDomainResponseBodyContent {
        this['follow_status'] = followStatus;
        return this;
    }
    public set followStatus(followStatus: string | undefined) {
        this['follow_status'] = followStatus;
    }
    public get followStatus() {
        return this['follow_status'];
    }
    public withOriginStatus(originStatus: string): CreateDomainResponseBodyContent {
        this['origin_status'] = originStatus;
        return this;
    }
    public set originStatus(originStatus: string | undefined) {
        this['origin_status'] = originStatus;
    }
    public get originStatus() {
        return this['origin_status'];
    }
    public withAutoRefreshPreheat(autoRefreshPreheat: number): CreateDomainResponseBodyContent {
        this['auto_refresh_preheat'] = autoRefreshPreheat;
        return this;
    }
    public set autoRefreshPreheat(autoRefreshPreheat: number | undefined) {
        this['auto_refresh_preheat'] = autoRefreshPreheat;
    }
    public get autoRefreshPreheat() {
        return this['auto_refresh_preheat'];
    }
}