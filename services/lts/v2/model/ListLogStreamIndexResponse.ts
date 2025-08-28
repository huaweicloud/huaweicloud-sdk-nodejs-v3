import { LTSFieldsInfo } from './LTSFieldsInfo';
import { LTSFullTextIndexInfo } from './LTSFullTextIndexInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogStreamIndexResponse extends SdkResponse {
    public fullTextIndex?: LTSFullTextIndexInfo;
    public fields?: Array<LTSFieldsInfo>;
    public logStreamId?: string;
    public constructor() { 
        super();
    }
    public withFullTextIndex(fullTextIndex: LTSFullTextIndexInfo): ListLogStreamIndexResponse {
        this['fullTextIndex'] = fullTextIndex;
        return this;
    }
    public withFields(fields: Array<LTSFieldsInfo>): ListLogStreamIndexResponse {
        this['fields'] = fields;
        return this;
    }
    public withLogStreamId(logStreamId: string): ListLogStreamIndexResponse {
        this['logStreamId'] = logStreamId;
        return this;
    }
}