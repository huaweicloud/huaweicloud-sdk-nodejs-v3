import { ObjectProcessReq } from './ObjectProcessReq';


export class CreateObjectProcessTaskRequest {
    private 'X-Sdk-Date'?: string;
    public body?: ObjectProcessReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateObjectProcessTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ObjectProcessReq): CreateObjectProcessTaskRequest {
        this['body'] = body;
        return this;
    }
}