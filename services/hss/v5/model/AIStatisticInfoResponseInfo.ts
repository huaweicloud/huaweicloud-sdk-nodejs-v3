

export class AIStatisticInfoResponseInfo {
    private 'ai_component_name'?: string;
    public num?: number;
    public constructor() { 
    }
    public withAiComponentName(aiComponentName: string): AIStatisticInfoResponseInfo {
        this['ai_component_name'] = aiComponentName;
        return this;
    }
    public set aiComponentName(aiComponentName: string  | undefined) {
        this['ai_component_name'] = aiComponentName;
    }
    public get aiComponentName(): string | undefined {
        return this['ai_component_name'];
    }
    public withNum(num: number): AIStatisticInfoResponseInfo {
        this['num'] = num;
        return this;
    }
}