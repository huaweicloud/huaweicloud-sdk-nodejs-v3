import { CreateObjectRetrievalRequestBody } from './CreateObjectRetrievalRequestBody';


export class CreateObjectRetrievalRequest {
    private 'X-Sdk-Date'?: string;
    public body?: CreateObjectRetrievalRequestBody;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateObjectRetrievalRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreateObjectRetrievalRequestBody): CreateObjectRetrievalRequest {
        this['body'] = body;
        return this;
    }
}