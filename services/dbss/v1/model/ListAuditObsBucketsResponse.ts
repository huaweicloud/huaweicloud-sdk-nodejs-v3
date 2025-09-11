import { ObsBucketObject } from './ObsBucketObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditObsBucketsResponse extends SdkResponse {
    private 'obs_list'?: Array<ObsBucketObject>;
    public constructor() { 
        super();
    }
    public withObsList(obsList: Array<ObsBucketObject>): ListAuditObsBucketsResponse {
        this['obs_list'] = obsList;
        return this;
    }
    public set obsList(obsList: Array<ObsBucketObject>  | undefined) {
        this['obs_list'] = obsList;
    }
    public get obsList(): Array<ObsBucketObject> | undefined {
        return this['obs_list'];
    }
}