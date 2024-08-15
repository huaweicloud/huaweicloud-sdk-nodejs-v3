import { JobScriptOrderOperationBody } from './JobScriptOrderOperationBody';


export class OperateScriptJobRequest {
    private 'execute_uuid'?: string;
    private 'X-Language'?: string;
    private 'x-project-id'?: string;
    private 'x-user-profile'?: string;
    public body?: JobScriptOrderOperationBody;
    public constructor(executeUuid?: string) { 
        this['execute_uuid'] = executeUuid;
    }
    public withExecuteUuid(executeUuid: string): OperateScriptJobRequest {
        this['execute_uuid'] = executeUuid;
        return this;
    }
    public set executeUuid(executeUuid: string  | undefined) {
        this['execute_uuid'] = executeUuid;
    }
    public get executeUuid(): string | undefined {
        return this['execute_uuid'];
    }
    public withXLanguage(xLanguage: string): OperateScriptJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withXProjectId(xProjectId: string): OperateScriptJobRequest {
        this['x-project-id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['x-project-id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['x-project-id'];
    }
    public withXUserProfile(xUserProfile: string): OperateScriptJobRequest {
        this['x-user-profile'] = xUserProfile;
        return this;
    }
    public set xUserProfile(xUserProfile: string  | undefined) {
        this['x-user-profile'] = xUserProfile;
    }
    public get xUserProfile(): string | undefined {
        return this['x-user-profile'];
    }
    public withBody(body: JobScriptOrderOperationBody): OperateScriptJobRequest {
        this['body'] = body;
        return this;
    }
}