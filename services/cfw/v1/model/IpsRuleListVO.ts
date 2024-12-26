import { IpsRuleVO } from './IpsRuleVO';


export class IpsRuleListVO {
    private 'fw_instance_id'?: string;
    public limit?: number;
    private 'object_id'?: string;
    public offset?: number;
    public records?: Array<IpsRuleVO>;
    public total?: number;
    public constructor() { 
    }
    public withFwInstanceId(fwInstanceId: string): IpsRuleListVO {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withLimit(limit: number): IpsRuleListVO {
        this['limit'] = limit;
        return this;
    }
    public withObjectId(objectId: string): IpsRuleListVO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withOffset(offset: number): IpsRuleListVO {
        this['offset'] = offset;
        return this;
    }
    public withRecords(records: Array<IpsRuleVO>): IpsRuleListVO {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): IpsRuleListVO {
        this['total'] = total;
        return this;
    }
}