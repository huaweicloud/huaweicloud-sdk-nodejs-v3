import { AddScriptModel } from './AddScriptModel';


export class CreateScriptRequest {
    private 'x-project-id'?: string;
    private 'x-user-profile'?: string;
    private 'X-Language'?: string;
    public body?: AddScriptModel;
    public constructor() { 
    }
    public withXProjectId(xProjectId: string): CreateScriptRequest {
        this['x-project-id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['x-project-id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['x-project-id'];
    }
    public withXUserProfile(xUserProfile: string): CreateScriptRequest {
        this['x-user-profile'] = xUserProfile;
        return this;
    }
    public set xUserProfile(xUserProfile: string  | undefined) {
        this['x-user-profile'] = xUserProfile;
    }
    public get xUserProfile(): string | undefined {
        return this['x-user-profile'];
    }
    public withXLanguage(xLanguage: string): CreateScriptRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: AddScriptModel): CreateScriptRequest {
        this['body'] = body;
        return this;
    }
}