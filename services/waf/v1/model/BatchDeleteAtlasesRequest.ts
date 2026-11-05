import { AiguardAtlasBatchDeleteBody } from './AiguardAtlasBatchDeleteBody';


export class BatchDeleteAtlasesRequest {
    private 'Content-Type'?: string;
    public body?: AiguardAtlasBatchDeleteBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchDeleteAtlasesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AiguardAtlasBatchDeleteBody): BatchDeleteAtlasesRequest {
        this['body'] = body;
        return this;
    }
}