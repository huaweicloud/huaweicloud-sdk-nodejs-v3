import { BatchUpdatePublicRecordsetsConditionvalue } from './BatchUpdatePublicRecordsetsConditionvalue';


export class BatchUpdatePublicRecordsetsFilter {
    public relation?: string;
    public conditions?: Array<BatchUpdatePublicRecordsetsConditionvalue>;
    public constructor(relation?: string, conditions?: Array<BatchUpdatePublicRecordsetsConditionvalue>) { 
        this['relation'] = relation;
        this['conditions'] = conditions;
    }
    public withRelation(relation: string): BatchUpdatePublicRecordsetsFilter {
        this['relation'] = relation;
        return this;
    }
    public withConditions(conditions: Array<BatchUpdatePublicRecordsetsConditionvalue>): BatchUpdatePublicRecordsetsFilter {
        this['conditions'] = conditions;
        return this;
    }
}