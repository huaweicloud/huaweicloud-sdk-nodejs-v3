

export class CreatePolicyRequestBody {
    public name?: string;
    private 'log_action_replaced'?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreatePolicyRequestBody {
        this['name'] = name;
        return this;
    }
    public withLogActionReplaced(logActionReplaced: boolean): CreatePolicyRequestBody {
        this['log_action_replaced'] = logActionReplaced;
        return this;
    }
    public set logActionReplaced(logActionReplaced: boolean  | undefined) {
        this['log_action_replaced'] = logActionReplaced;
    }
    public get logActionReplaced(): boolean | undefined {
        return this['log_action_replaced'];
    }
}