import { CreateTakeOverTaskReq } from './CreateTakeOverTaskReq';


export class CreateTakeOverTaskRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: CreateTakeOverTaskReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateTakeOverTaskRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreateTakeOverTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreateTakeOverTaskReq): CreateTakeOverTaskRequest {
        this['body'] = body;
        return this;
    }
}