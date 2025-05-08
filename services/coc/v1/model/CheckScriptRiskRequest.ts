import { JobScriptAnalyzeRequest } from './JobScriptAnalyzeRequest';


export class CheckScriptRiskRequest {
    private 'X-Language'?: string;
    private 'x-project-id'?: string;
    private 'x-user-profile'?: string;
    public body?: JobScriptAnalyzeRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CheckScriptRiskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withXProjectId(xProjectId: string): CheckScriptRiskRequest {
        this['x-project-id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['x-project-id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['x-project-id'];
    }
    public withXUserProfile(xUserProfile: string): CheckScriptRiskRequest {
        this['x-user-profile'] = xUserProfile;
        return this;
    }
    public set xUserProfile(xUserProfile: string  | undefined) {
        this['x-user-profile'] = xUserProfile;
    }
    public get xUserProfile(): string | undefined {
        return this['x-user-profile'];
    }
    public withBody(body: JobScriptAnalyzeRequest): CheckScriptRiskRequest {
        this['body'] = body;
        return this;
    }
}