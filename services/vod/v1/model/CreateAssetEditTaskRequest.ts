import { CreateAssetEditTaskReq } from './CreateAssetEditTaskReq';


export class CreateAssetEditTaskRequest {
    private 'X-Sdk-Date'?: string;
    public body?: CreateAssetEditTaskReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateAssetEditTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreateAssetEditTaskReq): CreateAssetEditTaskRequest {
        this['body'] = body;
        return this;
    }
}