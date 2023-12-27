import { LTSFieldsInfo } from './LTSFieldsInfo';
import { LTSFullTextIndexInfo } from './LTSFullTextIndexInfo';


export class LTSIndexConfigInfo {
    public logStreamId?: string;
    public fullTextIndex?: LTSFullTextIndexInfo;
    public fields?: Array<LTSFieldsInfo>;
    public constructor(fullTextIndex?: LTSFullTextIndexInfo) { 
        this['fullTextIndex'] = fullTextIndex;
    }
    public withLogStreamId(logStreamId: string): LTSIndexConfigInfo {
        this['logStreamId'] = logStreamId;
        return this;
    }
    public withFullTextIndex(fullTextIndex: LTSFullTextIndexInfo): LTSIndexConfigInfo {
        this['fullTextIndex'] = fullTextIndex;
        return this;
    }
    public withFields(fields: Array<LTSFieldsInfo>): LTSIndexConfigInfo {
        this['fields'] = fields;
        return this;
    }
}