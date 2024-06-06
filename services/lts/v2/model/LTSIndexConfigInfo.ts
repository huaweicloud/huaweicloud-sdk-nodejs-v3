import { LTSFieldsInfo } from './LTSFieldsInfo';
import { LTSFullTextIndexInfo } from './LTSFullTextIndexInfo';


export class LTSIndexConfigInfo {
    public fullTextIndex?: LTSFullTextIndexInfo;
    public fields?: Array<LTSFieldsInfo>;
    public sqlAnalysisEnable?: boolean;
    public logStreamId?: string;
    public constructor(fullTextIndex?: LTSFullTextIndexInfo) { 
        this['fullTextIndex'] = fullTextIndex;
    }
    public withFullTextIndex(fullTextIndex: LTSFullTextIndexInfo): LTSIndexConfigInfo {
        this['fullTextIndex'] = fullTextIndex;
        return this;
    }
    public withFields(fields: Array<LTSFieldsInfo>): LTSIndexConfigInfo {
        this['fields'] = fields;
        return this;
    }
    public withSqlAnalysisEnable(sqlAnalysisEnable: boolean): LTSIndexConfigInfo {
        this['sqlAnalysisEnable'] = sqlAnalysisEnable;
        return this;
    }
    public withLogStreamId(logStreamId: string): LTSIndexConfigInfo {
        this['logStreamId'] = logStreamId;
        return this;
    }
}