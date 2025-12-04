
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLlmConfigResponse extends SdkResponse {
    private 'llm_config_id'?: string;
    public name?: string;
    private 'llm_url'?: string;
    public model?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withLlmConfigId(llmConfigId: string): ShowLlmConfigResponse {
        this['llm_config_id'] = llmConfigId;
        return this;
    }
    public set llmConfigId(llmConfigId: string  | undefined) {
        this['llm_config_id'] = llmConfigId;
    }
    public get llmConfigId(): string | undefined {
        return this['llm_config_id'];
    }
    public withName(name: string): ShowLlmConfigResponse {
        this['name'] = name;
        return this;
    }
    public withLlmUrl(llmUrl: string): ShowLlmConfigResponse {
        this['llm_url'] = llmUrl;
        return this;
    }
    public set llmUrl(llmUrl: string  | undefined) {
        this['llm_url'] = llmUrl;
    }
    public get llmUrl(): string | undefined {
        return this['llm_url'];
    }
    public withModel(model: string): ShowLlmConfigResponse {
        this['model'] = model;
        return this;
    }
    public withCreateTime(createTime: string): ShowLlmConfigResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowLlmConfigResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowLlmConfigResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}