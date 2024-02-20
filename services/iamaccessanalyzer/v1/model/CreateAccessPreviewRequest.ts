import { CreateAccessPreviewReqBody } from './CreateAccessPreviewReqBody';


export class CreateAccessPreviewRequest {
    private 'analyzer_id'?: string;
    public body?: CreateAccessPreviewReqBody;
    public constructor(analyzerId?: string) { 
        this['analyzer_id'] = analyzerId;
    }
    public withAnalyzerId(analyzerId: string): CreateAccessPreviewRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withBody(body: CreateAccessPreviewReqBody): CreateAccessPreviewRequest {
        this['body'] = body;
        return this;
    }
}