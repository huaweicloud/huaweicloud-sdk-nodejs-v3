

export class StartAnalysisSessionRequestBody {
    private 'collect_request_id'?: string;
    public constructor(collectRequestId?: string) { 
        this['collect_request_id'] = collectRequestId;
    }
    public withCollectRequestId(collectRequestId: string): StartAnalysisSessionRequestBody {
        this['collect_request_id'] = collectRequestId;
        return this;
    }
    public set collectRequestId(collectRequestId: string  | undefined) {
        this['collect_request_id'] = collectRequestId;
    }
    public get collectRequestId(): string | undefined {
        return this['collect_request_id'];
    }
}