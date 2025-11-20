import { CollectionInfo } from './CollectionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantUserConfigurationResponse extends SdkResponse {
    private 'my_collections'?: Array<CollectionInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withMyCollections(myCollections: Array<CollectionInfo>): ShowTenantUserConfigurationResponse {
        this['my_collections'] = myCollections;
        return this;
    }
    public set myCollections(myCollections: Array<CollectionInfo>  | undefined) {
        this['my_collections'] = myCollections;
    }
    public get myCollections(): Array<CollectionInfo> | undefined {
        return this['my_collections'];
    }
    public withXRequestId(xRequestId: string): ShowTenantUserConfigurationResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}