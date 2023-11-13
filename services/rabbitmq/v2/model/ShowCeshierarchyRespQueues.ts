

export class ShowCeshierarchyRespQueues {
    public name?: string;
    public vhost?: string;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespQueues {
        this['name'] = name;
        return this;
    }
    public withVhost(vhost: string): ShowCeshierarchyRespQueues {
        this['vhost'] = vhost;
        return this;
    }
}