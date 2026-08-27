import { ModelCompat } from './ModelCompat';
import { ModelCost } from './ModelCost';


export class BaseModeInfo {
    public id?: string;
    public name?: string;
    public input?: Array<string>;
    private 'context_window'?: number;
    private 'max_tokens'?: number;
    public reasoning?: boolean;
    public cost?: ModelCost;
    public compat?: ModelCompat;
    private 'is_builtin'?: boolean;
    public constructor() { 
    }
    public withId(id: string): BaseModeInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BaseModeInfo {
        this['name'] = name;
        return this;
    }
    public withInput(input: Array<string>): BaseModeInfo {
        this['input'] = input;
        return this;
    }
    public withContextWindow(contextWindow: number): BaseModeInfo {
        this['context_window'] = contextWindow;
        return this;
    }
    public set contextWindow(contextWindow: number  | undefined) {
        this['context_window'] = contextWindow;
    }
    public get contextWindow(): number | undefined {
        return this['context_window'];
    }
    public withMaxTokens(maxTokens: number): BaseModeInfo {
        this['max_tokens'] = maxTokens;
        return this;
    }
    public set maxTokens(maxTokens: number  | undefined) {
        this['max_tokens'] = maxTokens;
    }
    public get maxTokens(): number | undefined {
        return this['max_tokens'];
    }
    public withReasoning(reasoning: boolean): BaseModeInfo {
        this['reasoning'] = reasoning;
        return this;
    }
    public withCost(cost: ModelCost): BaseModeInfo {
        this['cost'] = cost;
        return this;
    }
    public withCompat(compat: ModelCompat): BaseModeInfo {
        this['compat'] = compat;
        return this;
    }
    public withIsBuiltin(isBuiltin: boolean): BaseModeInfo {
        this['is_builtin'] = isBuiltin;
        return this;
    }
    public set isBuiltin(isBuiltin: boolean  | undefined) {
        this['is_builtin'] = isBuiltin;
    }
    public get isBuiltin(): boolean | undefined {
        return this['is_builtin'];
    }
}