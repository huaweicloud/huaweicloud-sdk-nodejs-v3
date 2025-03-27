import { UpdateStorageModeReq } from './UpdateStorageModeReq';


export class UpdateStorageModeRequest {
    private 'X-Sdk-Date'?: string;
    public body?: UpdateStorageModeReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UpdateStorageModeRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UpdateStorageModeReq): UpdateStorageModeRequest {
        this['body'] = body;
        return this;
    }
}