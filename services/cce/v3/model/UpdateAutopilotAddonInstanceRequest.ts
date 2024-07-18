import { InstanceRequest } from './InstanceRequest';


export class UpdateAutopilotAddonInstanceRequest {
    public id?: string;
    private 'Content-Type'?: string;
    public body?: InstanceRequest;
    public constructor(id?: string, contentType?: string) { 
        this['id'] = id;
        this['Content-Type'] = contentType;
    }
    public withId(id: string): UpdateAutopilotAddonInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withContentType(contentType: string): UpdateAutopilotAddonInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: InstanceRequest): UpdateAutopilotAddonInstanceRequest {
        this['body'] = body;
        return this;
    }
}