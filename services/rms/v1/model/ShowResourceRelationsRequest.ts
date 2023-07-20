

export class ShowResourceRelationsRequest {
    private 'resource_id'?: string;
    public direction?: ShowResourceRelationsRequestDirectionEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor(resourceId?: string, direction?: string) { 
        this['resource_id'] = resourceId;
        this['direction'] = direction;
    }
    public withResourceId(resourceId: string): ShowResourceRelationsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withDirection(direction: ShowResourceRelationsRequestDirectionEnum | string): ShowResourceRelationsRequest {
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
