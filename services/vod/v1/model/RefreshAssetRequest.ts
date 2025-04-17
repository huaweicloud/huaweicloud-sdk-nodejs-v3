import { RefreshTaskReq } from './RefreshTaskReq';


export class RefreshAssetRequest {
    private 'X-Sdk-Date'?: string;
    public body?: RefreshTaskReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): RefreshAssetRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: RefreshTaskReq): RefreshAssetRequest {
        this['body'] = body;
        return this;
    }
}