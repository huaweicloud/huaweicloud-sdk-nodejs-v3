
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGaussMySqlInstanceAliasResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpdateGaussMySqlInstanceAliasResponse {
        this['body'] = body;
        return this;
    }
}