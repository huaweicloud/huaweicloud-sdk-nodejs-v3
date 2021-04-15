import { InstanceRequest } from './InstanceRequest';


export class CreateAddonInstanceRequest {
    private 'Content-Type': string | undefined;
    public body?: InstanceRequest;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateAddonInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: InstanceRequest): CreateAddonInstanceRequest {
        this['body'] = body;
        return this;
    }
}