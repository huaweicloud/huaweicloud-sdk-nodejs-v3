

export class UpdateDcDsReqDTO {
    public config?: object;
    public name?: string;
    private 'quality_report'?: boolean;
    public constructor() { 
    }
    public withConfig(config: object): UpdateDcDsReqDTO {
        this['config'] = config;
        return this;
    }
    public withName(name: string): UpdateDcDsReqDTO {
        this['name'] = name;
        return this;
    }
    public withQualityReport(qualityReport: boolean): UpdateDcDsReqDTO {
        this['quality_report'] = qualityReport;
        return this;
    }
    public set qualityReport(qualityReport: boolean  | undefined) {
        this['quality_report'] = qualityReport;
    }
    public get qualityReport(): boolean | undefined {
        return this['quality_report'];
    }
}