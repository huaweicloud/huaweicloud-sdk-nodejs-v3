

export class ShowResourceRelationsRequest {
    private 'resource_id': string | undefined;
    public direction: ShowResourceRelationsRequestDirectionEnum;
    public limit?: number;
    public marker?: string;
    public constructor(resourceId?: any, direction?: any) { 
        this['resource_id'] = resourceId;
        this['direction'] = direction;
    }
    public withResourceId(resourceId: string): ShowResourceRelationsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withDirection(direction: ShowResourceRelationsRequestDirectionEnum): ShowResourceRelationsRequest {
        this['direction'] = direction;
        return this;
    }
    public withLimit(limit: number): ShowResourceRelationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowResourceRelationsRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceRelationsRequestDirectionEnum {
    IN = 'in',
    OUT = 'out'
}
