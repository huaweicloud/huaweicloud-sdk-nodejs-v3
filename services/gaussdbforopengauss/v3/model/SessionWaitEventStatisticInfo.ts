

export class SessionWaitEventStatisticInfo {
    private 'node_name'?: string;
    private 'event_name'?: string;
    public count?: string;
    public constructor() { 
    }
    public withNodeName(nodeName: string): SessionWaitEventStatisticInfo {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withEventName(eventName: string): SessionWaitEventStatisticInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withCount(count: string): SessionWaitEventStatisticInfo {
        this['count'] = count;
        return this;
    }
}