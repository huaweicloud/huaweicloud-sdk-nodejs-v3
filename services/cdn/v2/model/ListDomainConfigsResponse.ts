import { CnameStatus } from './CnameStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainConfigsResponse extends SdkResponse {
    private 'cname_status'?: Array<CnameStatus>;
    public constructor() { 
        super();
    }
    public withCnameStatus(cnameStatus: Array<CnameStatus>): ListDomainConfigsResponse {
        this['cname_status'] = cnameStatus;
        return this;
    }
    public set cnameStatus(cnameStatus: Array<CnameStatus>  | undefined) {
        this['cname_status'] = cnameStatus;
    }
    public get cnameStatus(): Array<CnameStatus> | undefined {
        return this['cname_status'];
    }
}