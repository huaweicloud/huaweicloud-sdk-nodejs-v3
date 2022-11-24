import { RuleAclListResponseDTODataRecords } from './RuleAclListResponseDTODataRecords';


export class RuleAclListResponseDTOData {
    public offset?: number;
    public limit?: number;
    public total?: number;
    private 'object_id'?: string | undefined;
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
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withRecords(records: Array<RuleAclListResponseDTODataRecords>): RuleAclListResponseDTOData {
        this['records'] = records;
        return this;
    }
}