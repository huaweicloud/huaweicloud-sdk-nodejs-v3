
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRocketMqMigrationTaskResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): CreateRocketMqMigrationTaskResponse {
        this['body'] = body;
        return this;
    }
}