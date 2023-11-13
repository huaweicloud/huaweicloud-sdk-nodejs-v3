

export class ShowCeshierarchyRespExchanges {
    public name?: string;
    public vhost?: string;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespExchanges {
        this['name'] = name;
        return this;
    }
    public withVhost(vhost: string): ShowCeshierarchyRespExchanges {
        this['vhost'] = vhost;
        return this;
    }
}