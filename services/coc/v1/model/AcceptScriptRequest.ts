import { ApprovalJobScriptModel } from './ApprovalJobScriptModel';


export class AcceptScriptRequest {
    private 'script_uuid'?: string;
    private 'x-project-id'?: string;
    private 'x-user-profile'?: string;
    private 'X-Language'?: string;
    public body?: ApprovalJobScriptModel;
    public constructor(scriptUuid?: string) { 
        this['script_uuid'] = scriptUuid;
    }
    public withScriptUuid(scriptUuid: string): AcceptScriptRequest {
        this['script_uuid'] = scriptUuid;
        return this;
    }
    public set scriptUuid(scriptUuid: string  | undefined) {
        this['script_uuid'] = scriptUuid;
    }
    public get scriptUuid(): string | undefined {
        return this['script_uuid'];
    }
    public withXProjectId(xProjectId: string): AcceptScriptRequest {
        this['x-project-id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['x-project-id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['x-project-id'];
    }
    public withXUserProfile(xUserProfile: string): AcceptScriptRequest {
        this['x-user-profile'] = xUserProfile;
        return this;
    }
    public set xUserProfile(xUserProfile: string  | undefined) {
        this['x-user-profile'] = xUserProfile;
    }
    public get xUserProfile(): string | undefined {
        return this['x-user-profile'];
    }
    public withXLanguage(xLanguage: string): AcceptScriptRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ApprovalJobScriptModel): AcceptScriptRequest {
        this['body'] = body;
        return this;
    }
}