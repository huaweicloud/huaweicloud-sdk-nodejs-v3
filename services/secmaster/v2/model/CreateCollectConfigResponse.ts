import { DatasetInfo } from './DatasetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCollectConfigResponse extends SdkResponse {
    public alert?: boolean;
    private 'allow_alert'?: boolean;
    private 'allow_lts'?: boolean;
    private 'csvc_display'?: string;
    public region?: string;
    private 'source_display'?: string;
    public success?: boolean;
    public total?: number;
    public datasets?: Array<DatasetInfo>;
    public constructor() { 
        super();
    }
    public withAlert(alert: boolean): CreateCollectConfigResponse {
        this['alert'] = alert;
        return this;
    }
    public withAllowAlert(allowAlert: boolean): CreateCollectConfigResponse {
        this['allow_alert'] = allowAlert;
        return this;
    }
    public set allowAlert(allowAlert: boolean  | undefined) {
        this['allow_alert'] = allowAlert;
    }
    public get allowAlert(): boolean | undefined {
        return this['allow_alert'];
    }
    public withAllowLts(allowLts: boolean): CreateCollectConfigResponse {
        this['allow_lts'] = allowLts;
        return this;
    }
    public set allowLts(allowLts: boolean  | undefined) {
        this['allow_lts'] = allowLts;
    }
    public get allowLts(): boolean | undefined {
        return this['allow_lts'];
    }
    public withCsvcDisplay(csvcDisplay: string): CreateCollectConfigResponse {
        this['csvc_display'] = csvcDisplay;
        return this;
    }
    public set csvcDisplay(csvcDisplay: string  | undefined) {
        this['csvc_display'] = csvcDisplay;
    }
    public get csvcDisplay(): string | undefined {
        return this['csvc_display'];
    }
    public withRegion(region: string): CreateCollectConfigResponse {
        this['region'] = region;
        return this;
    }
    public withSourceDisplay(sourceDisplay: string): CreateCollectConfigResponse {
        this['source_display'] = sourceDisplay;
        return this;
    }
    public set sourceDisplay(sourceDisplay: string  | undefined) {
        this['source_display'] = sourceDisplay;
    }
    public get sourceDisplay(): string | undefined {
        return this['source_display'];
    }
    public withSuccess(success: boolean): CreateCollectConfigResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): CreateCollectConfigResponse {
        this['total'] = total;
        return this;
    }
    public withDatasets(datasets: Array<DatasetInfo>): CreateCollectConfigResponse {
        this['datasets'] = datasets;
        return this;
    }
}