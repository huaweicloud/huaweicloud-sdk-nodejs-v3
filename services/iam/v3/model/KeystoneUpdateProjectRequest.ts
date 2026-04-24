import { KeystoneUpdateProjectRequestBody } from './KeystoneUpdateProjectRequestBody';


export class KeystoneUpdateProjectRequest {
    private 'project_id'?: string;
    public body?: KeystoneUpdateProjectRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): KeystoneUpdateProjectRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: KeystoneUpdateProjectRequestBody): KeystoneUpdateProjectRequest {
        this['body'] = body;
        return this;
    }
}