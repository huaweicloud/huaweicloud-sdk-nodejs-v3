

export class RelationModel {
    public key?: string;
    public value?: Array<string>;
    public relation?: RelationModelRelationEnum | string;
    public constructor() { 
    }
    public withKey(key: string): RelationModel {
        this['key'] = key;
        return this;
    }
    public withValue(value: Array<string>): RelationModel {
        this['value'] = value;
        return this;
    }
    public withRelation(relation: RelationModelRelationEnum | string): RelationModel {
        this['relation'] = relation;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RelationModelRelationEnum {
    AND = 'AND',
    OR = 'OR',
    NOT = 'NOT'
}
