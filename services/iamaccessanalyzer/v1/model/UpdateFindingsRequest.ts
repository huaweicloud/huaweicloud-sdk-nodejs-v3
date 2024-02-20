import { UpdateFindingsReqBody } from './UpdateFindingsReqBody';


export class UpdateFindingsRequest {
    private 'analyzer_id'?: string;
    public body?: UpdateFindingsReqBody;
    public constructor(analyzerId?: string) { 
        this['analyzer_id'] = analyzerId;
    }
    public withAnalyzerId(analyzerId: string): UpdateFindingsRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withBody(body: UpdateFindingsReqBody): UpdateFindingsRequest {
        this['body'] = body;
        return this;
    }
}