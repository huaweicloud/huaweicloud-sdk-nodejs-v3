import { DimensionResp } from './DimensionResp';


export class Resource {
    private 'relation_id'?: string;
    public namespace?: string;
    public dimensions?: Array<DimensionResp>;
    public status?: ResourceStatusEnum | string;
    public constructor() { 
    }
    public withRelationId(relationId: string): Resource {
        this['relation_id'] = relationId;
        return this;
    }
    public set relationId(relationId: string  | undefined) {
        this['relation_id'] = relationId;
    }
    public get relationId(): string | undefined {
        return this['relation_id'];
    }
    public withNamespace(namespace: string): Resource {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<DimensionResp>): Resource {
        this['dimensions'] = dimensions;
        return this;
    }
    public withStatus(status: ResourceStatusEnum | string): Resource {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceStatusEnum {
    HEALTH = 'health',
    UNHEALTH = 'unhealth',
    NO_ALARM_RULE = 'no_alarm_rule'
}
