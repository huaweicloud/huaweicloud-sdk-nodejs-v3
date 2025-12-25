import { AnalysisResults } from './AnalysisResults';
import { SearchResult } from './SearchResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSearchLogsResponse extends SdkResponse {
    private 'analysis_results'?: AnalysisResults;
    public count?: number;
    public results?: Array<SearchResult>;
    public constructor() { 
        super();
    }
    public withAnalysisResults(analysisResults: AnalysisResults): ListSearchLogsResponse {
        this['analysis_results'] = analysisResults;
        return this;
    }
    public set analysisResults(analysisResults: AnalysisResults  | undefined) {
        this['analysis_results'] = analysisResults;
    }
    public get analysisResults(): AnalysisResults | undefined {
        return this['analysis_results'];
    }
    public withCount(count: number): ListSearchLogsResponse {
        this['count'] = count;
        return this;
    }
    public withResults(results: Array<SearchResult>): ListSearchLogsResponse {
        this['results'] = results;
        return this;
    }
}