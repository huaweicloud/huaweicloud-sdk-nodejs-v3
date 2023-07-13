

export class ShowBandwidthCalcRequest {
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    private 'domain_name': string | undefined;
    private 'service_area'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'calc_type': string | undefined;
    public constructor(startTime?: any, endTime?: any, domainName?: any, calcType?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['domain_name'] = domainName;
        this['calc_type'] = calcType;
    }
    public withStartTime(startTime: number): ShowBandwidthCalcRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowBandwidthCalcRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withDomainName(domainName: string): ShowBandwidthCalcRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withServiceArea(serviceArea: string): ShowBandwidthCalcRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowBandwidthCalcRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withCalcType(calcType: string): ShowBandwidthCalcRequest {
        this['calc_type'] = calcType;
        return this;
    }
    public set calcType(calcType: string | undefined) {
        this['calc_type'] = calcType;
    }
    public get calcType() {
        return this['calc_type'];
    }
}