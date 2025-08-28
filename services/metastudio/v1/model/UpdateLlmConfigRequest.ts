import { UpdateLlmConfigReq } from './UpdateLlmConfigReq';


export class UpdateLlmConfigRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'llm_config_id'?: string;
    public body?: UpdateLlmConfigReq;
    public constructor(llmConfigId?: string) { 
        this['llm_config_id'] = llmConfigId;
    }
    public withAuthorization(authorization: string): UpdateLlmConfigRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateLlmConfigRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): UpdateLlmConfigRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): UpdateLlmConfigRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withLlmConfigId(llmConfigId: string): UpdateLlmConfigRequest {
        this['llm_config_id'] = llmConfigId;
        return this;
    }
    public set llmConfigId(llmConfigId: string  | undefined) {
        this['llm_config_id'] = llmConfigId;
    }
    public get llmConfigId(): string | undefined {
        return this['llm_config_id'];
    }
    public withBody(body: UpdateLlmConfigReq): UpdateLlmConfigRequest {
        this['body'] = body;
        return this;
    }
}