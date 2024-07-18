import { InstanceRequest } from './InstanceRequest';


export class CreateAutopilotAddonInstanceRequest {
    private 'Content-Type'?: string;
    public body?: InstanceRequest;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateAutopilotAddonInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: InstanceRequest): CreateAutopilotAddonInstanceRequest {
        this['body'] = body;
        return this;
    }
}