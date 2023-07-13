import { StructConfig } from './StructConfig';


export class UpdateStructConfigRequest {
    private 'Content-Type': string | undefined;
    public body?: StructConfig;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UpdateStructConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: StructConfig): UpdateStructConfigRequest {
        this['body'] = body;
        return this;
    }
}