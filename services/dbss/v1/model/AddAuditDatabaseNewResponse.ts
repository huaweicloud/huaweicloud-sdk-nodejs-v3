
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddAuditDatabaseNewResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): AddAuditDatabaseNewResponse {
        this['id'] = id;
        return this;
    }
}