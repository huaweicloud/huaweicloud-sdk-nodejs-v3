
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTableDataResponse extends SdkResponse {
    public rows?: Array<Array<object>>;
    public schema?: Array<object>;
    public constructor() { 
        super();
    }
    public withRows(rows: Array<Array<object>>): ShowTableDataResponse {
        this['rows'] = rows;
        return this;
    }
    public withSchema(schema: Array<object>): ShowTableDataResponse {
        this['schema'] = schema;
        return this;
    }
}