import { Condition } from './Condition';


export class CombRelation {
    private 'logical_operator'?: CombRelationLogicalOperatorEnum | string;
    public conditions?: Array<Condition>;
    public constructor(logicalOperator?: string, conditions?: Array<Condition>) { 
        this['logical_operator'] = logicalOperator;
        this['conditions'] = conditions;
    }
    public withLogicalOperator(logicalOperator: CombRelationLogicalOperatorEnum | string): CombRelation {
        this['logical_operator'] = logicalOperator;
        return this;
    }
    public set logicalOperator(logicalOperator: CombRelationLogicalOperatorEnum | string  | undefined) {
        this['logical_operator'] = logicalOperator;
    }
    public get logicalOperator(): CombRelationLogicalOperatorEnum | string | undefined {
        return this['logical_operator'];
    }
    public withConditions(conditions: Array<Condition>): CombRelation {
        this['conditions'] = conditions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CombRelationLogicalOperatorEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}
