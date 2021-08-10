import { ExtractAudioTaskReq } from './ExtractAudioTaskReq';


export class CreateExtractAudioTaskRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: ExtractAudioTaskReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateExtractAudioTaskRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreateExtractAudioTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ExtractAudioTaskReq): CreateExtractAudioTaskRequest {
        this['body'] = body;
        return this;
    }
}