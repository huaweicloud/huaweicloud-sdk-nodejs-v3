
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGaussMySqlDatabaseCharsetsResponse extends SdkResponse {
    public charsets?: Array<string>;
    public constructor() { 
        super();
    }
    public withCharsets(charsets: Array<string>): ListGaussMySqlDatabaseCharsetsResponse {
        this['charsets'] = charsets;
        return this;
    }
}