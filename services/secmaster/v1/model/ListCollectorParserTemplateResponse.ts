import { ParserTemplate } from './ParserTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollectorParserTemplateResponse extends SdkResponse {
    public count?: number;
    public records?: Array<ParserTemplate>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCollectorParserTemplateResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<ParserTemplate>): ListCollectorParserTemplateResponse {
        this['records'] = records;
        return this;
    }
}