

export class DownloadStatisticsExcelRequest {
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    private 'domain_name': string | undefined;
    private 'excel_language'?: string | undefined;
    private 'service_area'?: string | undefined;
    public interval?: number;
    private 'enterprise_project_id'?: string | undefined;
    private 'excel_type': string | undefined;
    public constructor(startTime?: any, endTime?: any, domainName?: any, excelType?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['domain_name'] = domainName;
        this['excel_type'] = excelType;
    }
    public withStartTime(startTime: number): DownloadStatisticsExcelRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): DownloadStatisticsExcelRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withDomainName(domainName: string): DownloadStatisticsExcelRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withExcelLanguage(excelLanguage: string): DownloadStatisticsExcelRequest {
        this['excel_language'] = excelLanguage;
        return this;
    }
    public set excelLanguage(excelLanguage: string | undefined) {
        this['excel_language'] = excelLanguage;
    }
    public get excelLanguage() {
        return this['excel_language'];
    }
    public withServiceArea(serviceArea: string): DownloadStatisticsExcelRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withInterval(interval: number): DownloadStatisticsExcelRequest {
        this['interval'] = interval;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DownloadStatisticsExcelRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withExcelType(excelType: string): DownloadStatisticsExcelRequest {
        this['excel_type'] = excelType;
        return this;
    }
    public set excelType(excelType: string | undefined) {
        this['excel_type'] = excelType;
    }
    public get excelType() {
        return this['excel_type'];
    }
}