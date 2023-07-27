import { AuthorizerResp } from './AuthorizerResp';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomAuthorizersV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    private 'authorizer_list'?: Array<AuthorizerResp>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListCustomAuthorizersV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListCustomAuthorizersV2Response {
        this['total'] = total;
        return this;
    }
    public withAuthorizerList(authorizerList: Array<AuthorizerResp>): ListCustomAuthorizersV2Response {
        this['authorizer_list'] = authorizerList;
        return this;
    }
    public set authorizerList(authorizerList: Array<AuthorizerResp>  | undefined) {
        this['authorizer_list'] = authorizerList;
    }
    public get authorizerList(): Array<AuthorizerResp> | undefined {
        return this['authorizer_list'];
    }
}