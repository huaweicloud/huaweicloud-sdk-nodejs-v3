

export class CreateDcDsReqDTO {
    private 'ds_id'?: string;
    public config?: object;
    public name?: string;
    private 'module_id'?: string;
    private 'tpl_id'?: string;
    private 'quality_report'?: boolean;
    public constructor(dsId?: string, config?: object, name?: string, moduleId?: string, tplId?: string) { 
        this['ds_id'] = dsId;
        this['config'] = config;
        this['name'] = name;
        this['module_id'] = moduleId;
        this['tpl_id'] = tplId;
    }
    public withDsId(dsId: string): CreateDcDsReqDTO {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withConfig(config: object): CreateDcDsReqDTO {
        this['config'] = config;
        return this;
    }
    public withName(name: string): CreateDcDsReqDTO {
        this['name'] = name;
        return this;
    }
    public withModuleId(moduleId: string): CreateDcDsReqDTO {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withTplId(tplId: string): CreateDcDsReqDTO {
        this['tpl_id'] = tplId;
        return this;
    }
    public set tplId(tplId: string  | undefined) {
        this['tpl_id'] = tplId;
    }
    public get tplId(): string | undefined {
        return this['tpl_id'];
    }
    public withQualityReport(qualityReport: boolean): CreateDcDsReqDTO {
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