
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGaussMySqlInstanceOpsWindowResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpdateGaussMySqlInstanceOpsWindowResponse {
        this['body'] = body;
        return this;
    }
}