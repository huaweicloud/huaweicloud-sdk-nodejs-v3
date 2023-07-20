import { InstanceRequest } from './InstanceRequest';


export class CreateAddonInstanceRequest {
    private 'Content-Type'?: string;
    public body?: InstanceRequest;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateAddonInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: InstanceRequest): CreateAddonInstanceRequest {
        this['body'] = body;
        return this;
    }
}