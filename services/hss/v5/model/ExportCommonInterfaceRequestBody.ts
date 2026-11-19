

export class ExportCommonInterfaceRequestBody {
    private 'export_type'?: string;
    public condition?: string;
    private 'id_list'?: Array<string>;
    public constructor(exportType?: string) { 
        this['export_type'] = exportType;
    }
    public withExportType(exportType: string): ExportCommonInterfaceRequestBody {
        this['export_type'] = exportType;
        return this;
    }
    public set exportType(exportType: string  | undefined) {
        this['export_type'] = exportType;
    }
    public get exportType(): string | undefined {
        return this['export_type'];
    }
    public withCondition(condition: string): ExportCommonInterfaceRequestBody {
        this['condition'] = condition;
        return this;
    }
    public withIdList(idList: Array<string>): ExportCommonInterfaceRequestBody {
        this['id_list'] = idList;
        return this;
    }
    public set idList(idList: Array<string>  | undefined) {
        this['id_list'] = idList;
    }
    public get idList(): Array<string> | undefined {
        return this['id_list'];
    }
}