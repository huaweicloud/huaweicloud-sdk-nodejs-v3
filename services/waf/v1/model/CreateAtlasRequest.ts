import { AiguardAtlasBody } from './AiguardAtlasBody';


export class CreateAtlasRequest {
    private 'Content-Type'?: string;
    public body?: AiguardAtlasBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateAtlasRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AiguardAtlasBody): CreateAtlasRequest {
        this['body'] = body;
        return this;
    }
}