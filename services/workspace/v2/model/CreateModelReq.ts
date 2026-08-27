import { ModelCompat } from './ModelCompat';
import { ModelCost } from './ModelCost';


export class CreateModelReq {
    public name?: string;
    public input?: Array<string>;
    private 'provider_model_id'?: string;
    public description?: string;
    public reasoning?: boolean;
    public cost?: ModelCost;
    private 'context_window'?: number;
    private 'max_tokens'?: number;
    public compat?: ModelCompat;
    public constructor(name?: string, providerModelId?: string) { 
        this['name'] = name;
        this['provider_model_id'] = providerModelId;
    }
    public withName(name: string): CreateModelReq {
        this['name'] = name;
        return this;
    }
    public withInput(input: Array<string>): CreateModelReq {
        this['input'] = input;
        return this;
    }
    public withProviderModelId(providerModelId: string): CreateModelReq {
        this['provider_model_id'] = providerModelId;
        return this;
    }
    public set providerModelId(providerModelId: string  | undefined) {
        this['provider_model_id'] = providerModelId;
    }
    public get providerModelId(): string | undefined {
        return this['provider_model_id'];
    }
    public withDescription(description: string): CreateModelReq {
        this['description'] = description;
        return this;
    }
    public withReasoning(reasoning: boolean): CreateModelReq {
        this['reasoning'] = reasoning;
        return this;
    }
    public withCost(cost: ModelCost): CreateModelReq {
        this['cost'] = cost;
        return this;
    }
    public withContextWindow(contextWindow: number): CreateModelReq {
        this['context_window'] = contextWindow;
        return this;
    }
    public set contextWindow(contextWindow: number  | undefined) {
        this['context_window'] = contextWindow;
    }
    public get contextWindow(): number | undefined {
        return this['context_window'];
    }
    public withMaxTokens(maxTokens: number): CreateModelReq {
        this['max_tokens'] = maxTokens;
        return this;
    }
    public set maxTokens(maxTokens: number  | undefined) {
        this['max_tokens'] = maxTokens;
    }
    public get maxTokens(): number | undefined {
        return this['max_tokens'];
    }
    public withCompat(compat: ModelCompat): CreateModelReq {
        this['compat'] = compat;
        return this;
    }
}