

export class ShowResourceRelationsDetailRequest {
    private 'resource_id': string | undefined;
    public direction: ShowResourceRelationsDetailRequestDirectionEnum;
    public limit?: number;
    public marker?: string;
    public constructor(resourceId?: any, direction?: any) { 
        this['resource_id'] = resourceId;
        this['direction'] = direction;
    }
    public withResourceId(resourceId: string): ShowResourceRelationsDetailRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withDirection(direction: ShowResourceRelationsDetailRequestDirectionEnum): ShowResourceRelationsDetailRequest {
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
