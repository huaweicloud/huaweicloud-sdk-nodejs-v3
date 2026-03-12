import { FaiureResource } from './FaiureResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeployCertificateResponse extends SdkResponse {
    private 'failure_list'?: Array<FaiureResource>;
    public constructor() { 
        super();
    }
    public withFailureList(failureList: Array<FaiureResource>): DeployCertificateResponse {
        this['failure_list'] = failureList;
        return this;
    }
    public set failureList(failureList: Array<FaiureResource>  | undefined) {
        this['failure_list'] = failureList;
    }
    public get failureList(): Array<FaiureResource> | undefined {
        return this['failure_list'];
    }
}