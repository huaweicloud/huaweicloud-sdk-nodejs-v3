import { ListPreviewFindingsReqBody } from './ListPreviewFindingsReqBody';


export class ListAccessPreviewFindingsRequest {
    private 'analyzer_id'?: string;
    private 'access_preview_id'?: string;
    public body?: ListPreviewFindingsReqBody;
    public constructor(analyzerId?: string, accessPreviewId?: string) { 
        this['analyzer_id'] = analyzerId;
        this['access_preview_id'] = accessPreviewId;
    }
    public withAnalyzerId(analyzerId: string): ListAccessPreviewFindingsRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withAccessPreviewId(accessPreviewId: string): ListAccessPreviewFindingsRequest {
        this['access_preview_id'] = accessPreviewId;
        return this;
    }
    public set accessPreviewId(accessPreviewId: string  | undefined) {
        this['access_preview_id'] = accessPreviewId;
    }
    public get accessPreviewId(): string | undefined {
        return this['access_preview_id'];
    }
    public withBody(body: ListPreviewFindingsReqBody): ListAccessPreviewFindingsRequest {
        this['body'] = body;
        return this;
    }
}