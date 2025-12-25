import { DatasetInfo } from './DatasetInfo';


export class ConfigResponse {
    public alert?: boolean;
    private 'allow_alert'?: boolean;
    private 'allow_lts'?: boolean;
    private 'csvc_display'?: string;
    public datasets?: Array<DatasetInfo>;
    public region?: boolean;
    private 'source_display'?: string;
    public success?: boolean;
    public total?: number;
    public constructor() { 
    }
    public withAlert(alert: boolean): ConfigResponse {
        this['alert'] = alert;
        return this;
    }
    public withAllowAlert(allowAlert: boolean): ConfigResponse {
        this['allow_alert'] = allowAlert;
        return this;
    }
    public set allowAlert(allowAlert: boolean  | undefined) {
        this['allow_alert'] = allowAlert;
    }
    public get allowAlert(): boolean | undefined {
        return this['allow_alert'];
    }
    public withAllowLts(allowLts: boolean): ConfigResponse {
        this['allow_lts'] = allowLts;
        return this;
    }
    public set allowLts(allowLts: boolean  | undefined) {
        this['allow_lts'] = allowLts;
    }
    public get allowLts(): boolean | undefined {
        return this['allow_lts'];
    }
    public withCsvcDisplay(csvcDisplay: string): ConfigResponse {
        this['csvc_display'] = csvcDisplay;
        return this;
    }
    public set csvcDisplay(csvcDisplay: string  | undefined) {
        this['csvc_display'] = csvcDisplay;
    }
    public get csvcDisplay(): string | undefined {
        return this['csvc_display'];
    }
    public withDatasets(datasets: Array<DatasetInfo>): ConfigResponse {
        this['datasets'] = datasets;
        return this;
    }
    public withRegion(region: boolean): ConfigResponse {
        this['region'] = region;
        return this;
    }
    public withSourceDisplay(sourceDisplay: string): ConfigResponse {
        this['source_display'] = sourceDisplay;
        return this;
    }
    public set sourceDisplay(sourceDisplay: string  | undefined) {
        this['source_display'] = sourceDisplay;
    }
    public get sourceDisplay(): string | undefined {
        return this['source_display'];
    }
    public withSuccess(success: boolean): ConfigResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): ConfigResponse {
        this['total'] = total;
        return this;
    }
}