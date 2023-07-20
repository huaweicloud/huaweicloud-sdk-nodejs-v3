import { CreateTakeOverTaskReq } from './CreateTakeOverTaskReq';


export class CreateTakeOverTaskRequest {
    private 'X-Sdk-Date'?: string;
    public body?: CreateTakeOverTaskReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateTakeOverTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreateTakeOverTaskReq): CreateTakeOverTaskRequest {
        this['body'] = body;
        return this;
    }
}