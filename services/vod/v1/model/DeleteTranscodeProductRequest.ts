import { DeleteTranscodeProductReq } from './DeleteTranscodeProductReq';


export class DeleteTranscodeProductRequest {
    private 'X-Sdk-Date'?: string;
    public body?: DeleteTranscodeProductReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): DeleteTranscodeProductRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: DeleteTranscodeProductReq): DeleteTranscodeProductRequest {
        this['body'] = body;
        return this;
    }
}