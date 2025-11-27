

export class AddExportTask {
    private 'resource_type'?: string;
    private 'resource_condition'?: object;
    private 'export_format'?: string;
    private 'app_type'?: string;
    private 'app_id'?: string;
    public constructor(resourceType?: string, resourceCondition?: object) { 
        this['resource_type'] = resourceType;
        this['resource_condition'] = resourceCondition;
    }
    public withResourceType(resourceType: string): AddExportTask {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceCondition(resourceCondition: object): AddExportTask {
        this['resource_condition'] = resourceCondition;
        return this;
    }
    public set resourceCondition(resourceCondition: object  | undefined) {
        this['resource_condition'] = resourceCondition;
    }
    public get resourceCondition(): object | undefined {
        return this['resource_condition'];
    }
    public withExportFormat(exportFormat: string): AddExportTask {
        this['export_format'] = exportFormat;
        return this;
    }
    public set exportFormat(exportFormat: string  | undefined) {
        this['export_format'] = exportFormat;
    }
    public get exportFormat(): string | undefined {
        return this['export_format'];
    }
    public withAppType(appType: string): AddExportTask {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withAppId(appId: string): AddExportTask {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}