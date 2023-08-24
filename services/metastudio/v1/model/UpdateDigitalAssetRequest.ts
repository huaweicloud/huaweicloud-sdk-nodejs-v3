import { UpdateDigitalAssetRequestBody } from './UpdateDigitalAssetRequestBody';


export class UpdateDigitalAssetRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-App-UserId'?: string;
    private 'asset_id'?: string;
    public body?: UpdateDigitalAssetRequestBody;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withAuthorization(authorization: string): UpdateDigitalAssetRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateDigitalAssetRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXAppUserId(xAppUserId: string): UpdateDigitalAssetRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withAssetId(assetId: string): UpdateDigitalAssetRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withBody(body: UpdateDigitalAssetRequestBody): UpdateDigitalAssetRequest {
        this['body'] = body;
        return this;
    }
}