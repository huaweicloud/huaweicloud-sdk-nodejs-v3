import { CreateDigitalAssetRequestBody } from './CreateDigitalAssetRequestBody';


export class CreateDigitalAssetRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-App-UserId'?: string;
    private 'X-MSS-Authorization'?: string;
    public body?: CreateDigitalAssetRequestBody;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateDigitalAssetRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreateDigitalAssetRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXAppUserId(xAppUserId: string): CreateDigitalAssetRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withXMSSAuthorization(xMSSAuthorization: string): CreateDigitalAssetRequest {
        this['X-MSS-Authorization'] = xMSSAuthorization;
        return this;
    }
    public set xMSSAuthorization(xMSSAuthorization: string  | undefined) {
        this['X-MSS-Authorization'] = xMSSAuthorization;
    }
    public get xMSSAuthorization(): string | undefined {
        return this['X-MSS-Authorization'];
    }
    public withBody(body: CreateDigitalAssetRequestBody): CreateDigitalAssetRequest {
        this['body'] = body;
        return this;
    }
}