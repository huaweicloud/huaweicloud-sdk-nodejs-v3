import { ExtractAudioTaskReq } from './ExtractAudioTaskReq';


export class CreateExtractAudioTaskRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: ExtractAudioTaskReq;
    public constructor() { 
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