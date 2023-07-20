import { StructConfig } from './StructConfig';


export class CreateStructConfigRequest {
    private 'Content-Type'?: string;
    public body?: StructConfig;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateStructConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: StructConfig): CreateStructConfigRequest {
        this['body'] = body;
        return this;
    }
}