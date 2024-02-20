import { ListFindingsReqBody } from './ListFindingsReqBody';


export class ListFindingsRequest {
    private 'analyzer_id'?: string;
    public body?: ListFindingsReqBody;
    public constructor(analyzerId?: string) { 
        this['analyzer_id'] = analyzerId;
    }
    public withAnalyzerId(analyzerId: string): ListFindingsRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withBody(body: ListFindingsReqBody): ListFindingsRequest {
        this['body'] = body;
        return this;
    }
}