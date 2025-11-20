

export class ListTransferAssetJobsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    public offset?: number;
    public limit?: number;
    private 'X-App-UserId'?: string;
    public role?: ListTransferAssetJobsRequestRoleEnum | string;
    public state?: string;
    private 'transfer_type'?: string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListTransferAssetJobsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListTransferAssetJobsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withOffset(offset: number): ListTransferAssetJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTransferAssetJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withXAppUserId(xAppUserId: string): ListTransferAssetJobsRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withRole(role: ListTransferAssetJobsRequestRoleEnum | string): ListTransferAssetJobsRequest {
        this['role'] = role;
        return this;
    }
    public withState(state: string): ListTransferAssetJobsRequest {
        this['state'] = state;
        return this;
    }
    public withTransferType(transferType: string): ListTransferAssetJobsRequest {
        this['transfer_type'] = transferType;
        return this;
    }
    public set transferType(transferType: string  | undefined) {
        this['transfer_type'] = transferType;
    }
    public get transferType(): string | undefined {
        return this['transfer_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTransferAssetJobsRequestRoleEnum {
    ALL = 'ALL',
    SENDER = 'SENDER',
    RECEIVER = 'RECEIVER'
}
