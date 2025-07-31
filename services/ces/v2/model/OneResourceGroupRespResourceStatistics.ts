

export class OneResourceGroupRespResourceStatistics {
    public unhealthy?: number;
    public total?: number;
    private 'event_unhealthy'?: number;
    public namespaces?: number;
    public constructor() { 
    }
    public withUnhealthy(unhealthy: number): OneResourceGroupRespResourceStatistics {
        this['unhealthy'] = unhealthy;
        return this;
    }
    public withTotal(total: number): OneResourceGroupRespResourceStatistics {
        this['total'] = total;
        return this;
    }
    public withEventUnhealthy(eventUnhealthy: number): OneResourceGroupRespResourceStatistics {
        this['event_unhealthy'] = eventUnhealthy;
        return this;
    }
    public set eventUnhealthy(eventUnhealthy: number  | undefined) {
        this['event_unhealthy'] = eventUnhealthy;
    }
    public get eventUnhealthy(): number | undefined {
        return this['event_unhealthy'];
    }
    public withNamespaces(namespaces: number): OneResourceGroupRespResourceStatistics {
        this['namespaces'] = namespaces;
        return this;
    }
}