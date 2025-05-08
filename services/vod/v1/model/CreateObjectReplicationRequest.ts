import { CreateObjectReplicationRequestBody } from './CreateObjectReplicationRequestBody';


export class CreateObjectReplicationRequest {
    private 'X-Sdk-Date'?: string;
    public body?: CreateObjectReplicationRequestBody;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateObjectReplicationRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreateObjectReplicationRequestBody): CreateObjectReplicationRequest {
        this['body'] = body;
        return this;
    }
}