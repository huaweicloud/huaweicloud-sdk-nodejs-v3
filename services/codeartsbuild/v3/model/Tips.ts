

export class Tips {
    public status?: number;
    private 'next_action'?: number;
    private 'next_action_remain_day'?: number;
    private 'next_action_url'?: string;
    public constructor() { 
    }
    public withStatus(status: number): Tips {
        this['status'] = status;
        return this;
    }
    public withNextAction(nextAction: number): Tips {
        this['next_action'] = nextAction;
        return this;
    }
    public set nextAction(nextAction: number  | undefined) {
        this['next_action'] = nextAction;
    }
    public get nextAction(): number | undefined {
        return this['next_action'];
    }
    public withNextActionRemainDay(nextActionRemainDay: number): Tips {
        this['next_action_remain_day'] = nextActionRemainDay;
        return this;
    }
    public set nextActionRemainDay(nextActionRemainDay: number  | undefined) {
        this['next_action_remain_day'] = nextActionRemainDay;
    }
    public get nextActionRemainDay(): number | undefined {
        return this['next_action_remain_day'];
    }
    public withNextActionUrl(nextActionUrl: string): Tips {
        this['next_action_url'] = nextActionUrl;
        return this;
    }
    public set nextActionUrl(nextActionUrl: string  | undefined) {
        this['next_action_url'] = nextActionUrl;
    }
    public get nextActionUrl(): string | undefined {
        return this['next_action_url'];
    }
}