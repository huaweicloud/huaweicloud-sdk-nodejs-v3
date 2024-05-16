import { ResourceShare } from './ResourceShare';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateResourceShareResponse extends SdkResponse {
    private 'resource_share'?: ResourceShare;
    public constructor() { 
        super();
    }
    public withResourceShare(resourceShare: ResourceShare): UpdateResourceShareResponse {
        this['resource_share'] = resourceShare;
        return this;
    }
    public set resourceShare(resourceShare: ResourceShare  | undefined) {
        this['resource_share'] = resourceShare;
    }
    public get resourceShare(): ResourceShare | undefined {
        return this['resource_share'];
    }
}