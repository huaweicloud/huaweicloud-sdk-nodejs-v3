

export class ShowTopUrlRequest {
    private 'enterprise_project_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'domain_name'?: string;
    private 'service_area'?: ShowTopUrlRequestServiceAreaEnum | string;
    private 'stat_type'?: ShowTopUrlRequestStatTypeEnum | string;
    public constructor(startTime?: number, endTime?: number, domainName?: string, statType?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['domain_name'] = domainName;
        this['stat_type'] = statType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowTopUrlRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withStartTime(startTime: number): ShowTopUrlRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowTopUrlRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDomainName(domainName: string): ShowTopUrlRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withServiceArea(serviceArea: ShowTopUrlRequestServiceAreaEnum | string): ShowTopUrlRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: ShowTopUrlRequestServiceAreaEnum | string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): ShowTopUrlRequestServiceAreaEnum | string | undefined {
        return this['service_area'];
    }
    public withStatType(statType: ShowTopUrlRequestStatTypeEnum | string): ShowTopUrlRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: ShowTopUrlRequestStatTypeEnum | string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): ShowTopUrlRequestStatTypeEnum | string | undefined {
        return this['stat_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTopUrlRequestServiceAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china',
    GLOBAL = 'global'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTopUrlRequestStatTypeEnum {
    FLUX = 'flux',
    REQ_NUM = 'req_num'
}
