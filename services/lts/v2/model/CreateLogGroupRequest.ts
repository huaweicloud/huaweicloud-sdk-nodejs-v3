import { CreateLogGroupParams } from './CreateLogGroupParams';


export class CreateLogGroupRequest {
    private 'Content-Type'?: string;
    public body?: CreateLogGroupParams;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateLogGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateLogGroupParams): CreateLogGroupRequest {
        this['body'] = body;
        return this;
    }
}