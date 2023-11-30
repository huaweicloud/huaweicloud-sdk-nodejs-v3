
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipelineLogResponse extends SdkResponse {
    private 'has_more'?: boolean;
    private 'end_offset'?: string;
    private 'start_offset'?: string;
    public log?: string;
    public location?: string;
    private 'step_run_id'?: string;
    public constructor() { 
        super();
    }
    public withHasMore(hasMore: boolean): ShowPipelineLogResponse {
        this['has_more'] = hasMore;
        return this;
    }
    public set hasMore(hasMore: boolean  | undefined) {
        this['has_more'] = hasMore;
    }
    public get hasMore(): boolean | undefined {
        return this['has_more'];
    }
    public withEndOffset(endOffset: string): ShowPipelineLogResponse {
        this['end_offset'] = endOffset;
        return this;
    }
    public set endOffset(endOffset: string  | undefined) {
        this['end_offset'] = endOffset;
    }
    public get endOffset(): string | undefined {
        return this['end_offset'];
    }
    public withStartOffset(startOffset: string): ShowPipelineLogResponse {
        this['start_offset'] = startOffset;
        return this;
    }
    public set startOffset(startOffset: string  | undefined) {
        this['start_offset'] = startOffset;
    }
    public get startOffset(): string | undefined {
        return this['start_offset'];
    }
    public withLog(log: string): ShowPipelineLogResponse {
        this['log'] = log;
        return this;
    }
    public withLocation(location: string): ShowPipelineLogResponse {
        this['location'] = location;
        return this;
    }
    public withStepRunId(stepRunId: string): ShowPipelineLogResponse {
        this['step_run_id'] = stepRunId;
        return this;
    }
    public set stepRunId(stepRunId: string  | undefined) {
        this['step_run_id'] = stepRunId;
    }
    public get stepRunId(): string | undefined {
        return this['step_run_id'];
    }
}