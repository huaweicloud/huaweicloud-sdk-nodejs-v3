import { StartResourceScanReqBody } from './StartResourceScanReqBody';


export class StartResourceScanRequest {
    private 'analyzer_id'?: string;
    public body?: StartResourceScanReqBody;
    public constructor(analyzerId?: string) { 
        this['analyzer_id'] = analyzerId;
    }
    public withAnalyzerId(analyzerId: string): StartResourceScanRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withBody(body: StartResourceScanReqBody): StartResourceScanRequest {
        this['body'] = body;
        return this;
    }
}