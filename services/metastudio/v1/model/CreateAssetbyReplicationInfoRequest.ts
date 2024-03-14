import { ReplicationAssetInfo } from './ReplicationAssetInfo';


export class CreateAssetbyReplicationInfoRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-App-UserId'?: string;
    public body?: ReplicationAssetInfo;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateAssetbyReplicationInfoRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreateAssetbyReplicationInfoRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXAppUserId(xAppUserId: string): CreateAssetbyReplicationInfoRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withBody(body: ReplicationAssetInfo): CreateAssetbyReplicationInfoRequest {
        this['body'] = body;
        return this;
    }
}