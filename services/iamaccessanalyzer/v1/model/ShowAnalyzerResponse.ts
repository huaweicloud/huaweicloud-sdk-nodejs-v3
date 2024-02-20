import { AnalyzerSummary } from './AnalyzerSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAnalyzerResponse extends SdkResponse {
    public analyzer?: AnalyzerSummary;
    public constructor() { 
        super();
    }
    public withAnalyzer(analyzer: AnalyzerSummary): ShowAnalyzerResponse {
        this['analyzer'] = analyzer;
        return this;
    }
}