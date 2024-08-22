import { ScriptExecuteModel } from './ScriptExecuteModel';


export class ExecuteScriptRequest {
    private 'script_uuid'?: string;
    private 'X-Language'?: string;
    private 'x-project-id'?: string;
    private 'x-user-profile'?: string;
    public body?: ScriptExecuteModel;
    public constructor(scriptUuid?: string) { 
        this['script_uuid'] = scriptUuid;
    }
    public withScriptUuid(scriptUuid: string): ExecuteScriptRequest {
        this['script_uuid'] = scriptUuid;
        return this;
    }
    public set scriptUuid(scriptUuid: string  | undefined) {
        this['script_uuid'] = scriptUuid;
    }
    public get scriptUuid(): string | undefined {
        return this['script_uuid'];
    }
    public withXLanguage(xLanguage: string): ExecuteScriptRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withXProjectId(xProjectId: string): ExecuteScriptRequest {
        this['x-project-id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['x-project-id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['x-project-id'];
    }
    public withXUserProfile(xUserProfile: string): ExecuteScriptRequest {
        this['x-user-profile'] = xUserProfile;
        return this;
    }
    public set xUserProfile(xUserProfile: string  | undefined) {
        this['x-user-profile'] = xUserProfile;
    }
    public get xUserProfile(): string | undefined {
        return this['x-user-profile'];
    }
    public withBody(body: ScriptExecuteModel): ExecuteScriptRequest {
        this['body'] = body;
        return this;
    }
}