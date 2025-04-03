

export class ActionConfig {
    private 'action_interval'?: number;
    public constructor() { 
    }
    public withActionInterval(actionInterval: number): ActionConfig {
        this['action_interval'] = actionInterval;
        return this;
    }
    public set actionInterval(actionInterval: number  | undefined) {
        this['action_interval'] = actionInterval;
    }
    public get actionInterval(): number | undefined {
        return this['action_interval'];
    }
}