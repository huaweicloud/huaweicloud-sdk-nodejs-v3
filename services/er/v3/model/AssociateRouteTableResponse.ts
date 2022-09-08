import { Association } from './Association';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateRouteTableResponse extends SdkResponse {
    public association?: Association;
    private 'request_id'?: string | undefined;
    private 'X-Client-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAssociation(association: Association): AssociateRouteTableResponse {
        this['association'] = association;
        return this;
    }
    public withRequestId(requestId: string): AssociateRouteTableResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withXClientToken(xClientToken: string): AssociateRouteTableResponse {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken() {
        return this['X-Client-Token'];
    }
}