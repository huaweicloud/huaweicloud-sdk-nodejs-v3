import { RuleAclListResponseDTODataRecords } from './RuleAclListResponseDTODataRecords';


export class RuleAclListResponseDTOData {
    public offset?: number;
    public limit?: number;
    public total?: number;
    private 'object_id'?: string;
    private 'up_rules_count'?: number;
    public records?: Array<RuleAclListResponseDTODataRecords>;
    public constructor() { 
    }
    public withOffset(offset: number): RuleAclListResponseDTOData {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): RuleAclListResponseDTOData {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): RuleAclListResponseDTOData {
        this['total'] = total;
        return this;
    }
    public withObjectId(objectId: string): RuleAclListResponseDTOData {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withUpRulesCount(upRulesCount: number): RuleAclListResponseDTOData {
        this['up_rules_count'] = upRulesCount;
        return this;
    }
    public set upRulesCount(upRulesCount: number  | undefined) {
        this['up_rules_count'] = upRulesCount;
    }
    public get upRulesCount(): number | undefined {
        return this['up_rules_count'];
    }
    public withRecords(records: Array<RuleAclListResponseDTODataRecords>): RuleAclListResponseDTOData {
        this['records'] = records;
        return this;
    }
}