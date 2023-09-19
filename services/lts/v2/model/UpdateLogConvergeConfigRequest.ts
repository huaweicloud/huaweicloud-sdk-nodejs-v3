import { UpdatelogConvergeConfig } from './UpdatelogConvergeConfig';


export class UpdateLogConvergeConfigRequest {
    private 'Content-Type'?: string;
    public body?: UpdatelogConvergeConfig;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UpdateLogConvergeConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UpdatelogConvergeConfig): UpdateLogConvergeConfigRequest {
        this['body'] = body;
        return this;
    }
}