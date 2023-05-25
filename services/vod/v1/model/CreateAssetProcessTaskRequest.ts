import { AssetProcessReq } from './AssetProcessReq';


export class CreateAssetProcessTaskRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: AssetProcessReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateAssetProcessTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: AssetProcessReq): CreateAssetProcessTaskRequest {
        this['body'] = body;
        return this;
    }
}