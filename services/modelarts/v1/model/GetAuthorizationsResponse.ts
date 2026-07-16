import { AuthorizationResponse } from './AuthorizationResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAuthorizationsResponse extends SdkResponse {
    private 'total_count'?: number;
    public auth?: Array<AuthorizationResponse>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): GetAuthorizationsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withAuth(auth: Array<AuthorizationResponse>): GetAuthorizationsResponse {
        this['auth'] = auth;
        return this;
    }
}