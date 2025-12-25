import { DeleteRelationResource } from './DeleteRelationResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDataclassTypeResponse extends SdkResponse {
    public body?: Array<DeleteRelationResource>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DeleteRelationResource>): DeleteDataclassTypeResponse {
        this['body'] = body;
        return this;
    }
}