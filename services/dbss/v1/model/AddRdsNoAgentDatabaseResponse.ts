
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddRdsNoAgentDatabaseResponse extends SdkResponse {
    private 'illegal_db_id'?: Array<string>;
    private 'legal_db_id'?: Array<string>;
    public constructor() { 
        super();
    }
    public withIllegalDbId(illegalDbId: Array<string>): AddRdsNoAgentDatabaseResponse {
        this['illegal_db_id'] = illegalDbId;
        return this;
    }
    public set illegalDbId(illegalDbId: Array<string>  | undefined) {
        this['illegal_db_id'] = illegalDbId;
    }
    public get illegalDbId(): Array<string> | undefined {
        return this['illegal_db_id'];
    }
    public withLegalDbId(legalDbId: Array<string>): AddRdsNoAgentDatabaseResponse {
        this['legal_db_id'] = legalDbId;
        return this;
    }
    public set legalDbId(legalDbId: Array<string>  | undefined) {
        this['legal_db_id'] = legalDbId;
    }
    public get legalDbId(): Array<string> | undefined {
        return this['legal_db_id'];
    }
}