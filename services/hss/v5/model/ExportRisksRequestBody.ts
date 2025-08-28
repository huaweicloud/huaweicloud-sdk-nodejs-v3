import { IacRequestInfo } from './IacRequestInfo';


export class ExportRisksRequestBody {
    private 'export_headers'?: Array<Array<string>>;
    private 'iac_items'?: IacRequestInfo;
    public constructor(exportHeaders?: Array<Array<string>>) { 
        this['export_headers'] = exportHeaders;
    }
    public withExportHeaders(exportHeaders: Array<Array<string>>): ExportRisksRequestBody {
        this['export_headers'] = exportHeaders;
        return this;
    }
    public set exportHeaders(exportHeaders: Array<Array<string>>  | undefined) {
        this['export_headers'] = exportHeaders;
    }
    public get exportHeaders(): Array<Array<string>> | undefined {
        return this['export_headers'];
    }
    public withIacItems(iacItems: IacRequestInfo): ExportRisksRequestBody {
        this['iac_items'] = iacItems;
        return this;
    }
    public set iacItems(iacItems: IacRequestInfo  | undefined) {
        this['iac_items'] = iacItems;
    }
    public get iacItems(): IacRequestInfo | undefined {
        return this['iac_items'];
    }
}