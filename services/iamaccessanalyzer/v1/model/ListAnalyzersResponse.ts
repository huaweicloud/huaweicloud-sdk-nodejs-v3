import { AnalyzerSummary } from './AnalyzerSummary';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAnalyzersResponse extends SdkResponse {
    public analyzers?: Array<AnalyzerSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withAnalyzers(analyzers: Array<AnalyzerSummary>): ListAnalyzersResponse {
        this['analyzers'] = analyzers;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListAnalyzersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}