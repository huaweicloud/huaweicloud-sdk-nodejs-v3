
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddAuditDatabaseResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): AddAuditDatabaseResponse {
        this['id'] = id;
        return this;
    }
}