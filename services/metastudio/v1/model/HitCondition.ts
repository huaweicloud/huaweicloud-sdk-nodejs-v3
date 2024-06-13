import { HitConditionTag } from './HitConditionTag';


export class HitCondition {
    public relation?: HitConditionRelationEnum | string;
    public priority?: number;
    public tags?: Array<HitConditionTag>;
    public constructor() { 
    }
    public withRelation(relation: HitConditionRelationEnum | string): HitCondition {
        this['relation'] = relation;
        return this;
    }
    public withPriority(priority: number): HitCondition {
        this['priority'] = priority;
        return this;
    }
    public withTags(tags: Array<HitConditionTag>): HitCondition {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HitConditionRelationEnum {
    AND = 'AND',
    OR = 'OR',
    RESERVED = 'RESERVED'
}
