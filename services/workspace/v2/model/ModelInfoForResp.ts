import { BaseModeInfo } from './BaseModeInfo';
import { ModelCompat } from './ModelCompat';
import { ModelCost } from './ModelCost';


export class ModelInfoForResp {
    public id?: string;
    public name?: string;
    public input?: Array<string>;
    private 'context_window'?: number;
    private 'max_tokens'?: number;
    public reasoning?: boolean;
    public cost?: ModelCost;
    public compat?: ModelCompat;
    private 'is_builtin'?: boolean;
    private 'provider_model_id'?: string;
    private 'provider_id'?: string;
    private 'provider_name'?: string;
    public description?: string;
    public priority?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): ModelInfoForResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ModelInfoForResp {
        this['name'] = name;
        return this;
    }
    public withInput(input: Array<string>): ModelInfoForResp {
        this['input'] = input;
        return this;
    }
    public withContextWindow(contextWindow: number): ModelInfoForResp {
        this['context_window'] = contextWindow;
        return this;
    }
    public set contextWindow(contextWindow: number  | undefined) {
        this['context_window'] = contextWindow;
    }
    public get contextWindow(): number | undefined {
        return this['context_window'];
    }
    public withMaxTokens(maxTokens: number): ModelInfoForResp {
        this['max_tokens'] = maxTokens;
        return this;
    }
    public set maxTokens(maxTokens: number  | undefined) {
        this['max_tokens'] = maxTokens;
    }
    public get maxTokens(): number | undefined {
        return this['max_tokens'];
    }
    public withReasoning(reasoning: boolean): ModelInfoForResp {
        this['reasoning'] = reasoning;
        return this;
    }
    public withCost(cost: ModelCost): ModelInfoForResp {
        this['cost'] = cost;
        return this;
    }
    public withCompat(compat: ModelCompat): ModelInfoForResp {
        this['compat'] = compat;
        return this;
    }
    public withIsBuiltin(isBuiltin: boolean): ModelInfoForResp {
        this['is_builtin'] = isBuiltin;
        return this;
    }
    public set isBuiltin(isBuiltin: boolean  | undefined) {
        this['is_builtin'] = isBuiltin;
    }
    public get isBuiltin(): boolean | undefined {
        return this['is_builtin'];
    }
    public withProviderModelId(providerModelId: string): ModelInfoForResp {
        this['provider_model_id'] = providerModelId;
        return this;
    }
    public set providerModelId(providerModelId: string  | undefined) {
        this['provider_model_id'] = providerModelId;
    }
    public get providerModelId(): string | undefined {
        return this['provider_model_id'];
    }
    public withProviderId(providerId: string): ModelInfoForResp {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withProviderName(providerName: string): ModelInfoForResp {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withDescription(description: string): ModelInfoForResp {
        this['description'] = description;
        return this;
    }
    public withPriority(priority: number): ModelInfoForResp {
        this['priority'] = priority;
        return this;
    }
    public withCreateTime(createTime: string): ModelInfoForResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ModelInfoForResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}