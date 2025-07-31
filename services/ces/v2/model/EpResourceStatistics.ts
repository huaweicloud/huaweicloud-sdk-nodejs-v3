

export class EpResourceStatistics {
    private 'extend_relation_id'?: string;
    public unhealthy?: number;
    public total?: number;
    private 'event_unhealthy'?: number;
    public namespaces?: number;
    public constructor() { 
    }
    public withExtendRelationId(extendRelationId: string): EpResourceStatistics {
        this['extend_relation_id'] = extendRelationId;
        return this;
    }
    public set extendRelationId(extendRelationId: string  | undefined) {
        this['extend_relation_id'] = extendRelationId;
    }
    public get extendRelationId(): string | undefined {
        return this['extend_relation_id'];
    }
    public withUnhealthy(unhealthy: number): EpResourceStatistics {
        this['unhealthy'] = unhealthy;
        return this;
    }
    public withTotal(total: number): EpResourceStatistics {
        this['total'] = total;
        return this;
    }
    public withEventUnhealthy(eventUnhealthy: number): EpResourceStatistics {
        this['event_unhealthy'] = eventUnhealthy;
        return this;
    }
    public set eventUnhealthy(eventUnhealthy: number  | undefined) {
        this['event_unhealthy'] = eventUnhealthy;
    }
    public get eventUnhealthy(): number | undefined {
        return this['event_unhealthy'];
    }
    public withNamespaces(namespaces: number): EpResourceStatistics {
        this['namespaces'] = namespaces;
        return this;
    }
}