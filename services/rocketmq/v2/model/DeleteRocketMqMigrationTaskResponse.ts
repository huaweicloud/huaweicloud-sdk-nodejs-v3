
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRocketMqMigrationTaskResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteRocketMqMigrationTaskResponse {
        this['body'] = body;
        return this;
    }
}