import { ModelCompat } from './ModelCompat';
import { ModelCost } from './ModelCost';


export class UpdateModelReq {
    public name?: string;
    public description?: string;
    public input?: Array<string>;
    private 'context_window'?: number;
    private 'max_tokens'?: number;
    public reasoning?: boolean;
    public cost?: ModelCost;
    public compat?: ModelCompat;
    public constructor() { 
    }
    public withName(name: string): UpdateModelReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateModelReq {
        this['description'] = description;
        return this;
    }
    public withInput(input: Array<string>): UpdateModelReq {
        this['input'] = input;
        return this;
    }
    public withContextWindow(contextWindow: number): UpdateModelReq {
        this['context_window'] = contextWindow;
        return this;
    }
    public set contextWindow(contextWindow: number  | undefined) {
        this['context_window'] = contextWindow;
    }
    public get contextWindow(): number | undefined {
        return this['context_window'];
    }
    public withMaxTokens(maxTokens: number): UpdateModelReq {
        this['max_tokens'] = maxTokens;
        return this;
    }
    public set maxTokens(maxTokens: number  | undefined) {
        this['max_tokens'] = maxTokens;
    }
    public get maxTokens(): number | undefined {
        return this['max_tokens'];
    }
    public withReasoning(reasoning: boolean): UpdateModelReq {
        this['reasoning'] = reasoning;
        return this;
    }
    public withCost(cost: ModelCost): UpdateModelReq {
        this['cost'] = cost;
        return this;
    }
    public withCompat(compat: ModelCompat): UpdateModelReq {
        this['compat'] = compat;
        return this;
    }
}