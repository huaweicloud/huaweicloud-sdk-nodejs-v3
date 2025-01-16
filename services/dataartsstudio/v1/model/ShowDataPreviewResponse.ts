
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataPreviewResponse extends SdkResponse {
    public rows?: Array<Array<object>>;
    public schema?: Array<object>;
    public constructor() { 
        super();
    }
    public withRows(rows: Array<Array<object>>): ShowDataPreviewResponse {
        this['rows'] = rows;
        return this;
    }
    public withSchema(schema: Array<object>): ShowDataPreviewResponse {
        this['schema'] = schema;
        return this;
    }
}