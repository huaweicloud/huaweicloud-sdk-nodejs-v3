import { StandElementValueVOList } from './StandElementValueVOList';


export class UpdateStandardRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    public id?: string;
    private 'Content-Type'?: string;
    public body?: StandElementValueVOList;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateStandardRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): UpdateStandardRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withId(id: string): UpdateStandardRequest {
        this['id'] = id;
        return this;
    }
    public withContentType(contentType: string): UpdateStandardRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: StandElementValueVOList): UpdateStandardRequest {
        this['body'] = body;
        return this;
    }
}