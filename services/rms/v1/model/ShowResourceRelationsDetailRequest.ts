

export class ShowResourceRelationsDetailRequest {
    private 'resource_id'?: string;
    public direction?: ShowResourceRelationsDetailRequestDirectionEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor(resourceId?: string, direction?: string) { 
        this['resource_id'] = resourceId;
        this['direction'] = direction;
    }
    public withResourceId(resourceId: string): ShowResourceRelationsDetailRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withDirection(direction: ShowResourceRelationsDetailRequestDirectionEnum | string): ShowResourceRelationsDetailRequest {
        this['direction'] = direction;
        return this;
    }
    public withLimit(limit: number): ShowResourceRelationsDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowResourceRelationsDetailRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceRelationsDetailRequestDirectionEnum {
    IN = 'in',
    OUT = 'out'
}
