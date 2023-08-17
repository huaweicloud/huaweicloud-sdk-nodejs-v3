import { PipelineBuildResult } from './PipelineBuildResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipleineBuildResultResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    private 'build_results'?: Array<PipelineBuildResult>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPipleineBuildResultResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipleineBuildResultResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListPipleineBuildResultResponse {
        this['total'] = total;
        return this;
    }
    public withBuildResults(buildResults: Array<PipelineBuildResult>): ListPipleineBuildResultResponse {
        this['build_results'] = buildResults;
        return this;
    }
    public set buildResults(buildResults: Array<PipelineBuildResult>  | undefined) {
        this['build_results'] = buildResults;
    }
    public get buildResults(): Array<PipelineBuildResult> | undefined {
        return this['build_results'];
    }
}