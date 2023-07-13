

export class ShowTopUrlRequest {
    private 'enterprise_project_id'?: string | undefined;
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    private 'domain_name': string | undefined;
    private 'service_area'?: ShowTopUrlRequestServiceAreaEnum | undefined;
    private 'stat_type': ShowTopUrlRequestStatTypeEnum | undefined;
    public constructor(startTime?: any, endTime?: any, domainName?: any, statType?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['domain_name'] = domainName;
        this['stat_type'] = statType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowTopUrlRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withStartTime(startTime: number): ShowTopUrlRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowTopUrlRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withDomainName(domainName: string): ShowTopUrlRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withServiceArea(serviceArea: ShowTopUrlRequestServiceAreaEnum): ShowTopUrlRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: ShowTopUrlRequestServiceAreaEnum | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withStatType(statType: ShowTopUrlRequestStatTypeEnum): ShowTopUrlRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: ShowTopUrlRequestStatTypeEnum | undefined) {
        this['stat_type'] = statType;
    }
    public get statType() {
        return this['stat_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTopUrlRequestServiceAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTopUrlRequestStatTypeEnum {
    FLUX = 'flux',
    REQ_NUM = 'req_num'
}
