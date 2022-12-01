import { ServiceItemListResponseDtoDataRecords } from './ServiceItemListResponseDtoDataRecords';


export class ServiceItemListResponseDtoData {
    public offset?: number;
    public limit?: number;
    public total?: number;
    private 'set_id'?: string | undefined;
    public records?: Array<ServiceItemListResponseDtoDataRecords>;
    public constructor() { 
    }
    public withOffset(offset: number): ServiceItemListResponseDtoData {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ServiceItemListResponseDtoData {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ServiceItemListResponseDtoData {
        this['total'] = total;
        return this;
    }
    public withSetId(setId: string): ServiceItemListResponseDtoData {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string | undefined) {
        this['set_id'] = setId;
    }
    public get setId() {
        return this['set_id'];
    }
    public withRecords(records: Array<ServiceItemListResponseDtoDataRecords>): ServiceItemListResponseDtoData {
        this['records'] = records;
        return this;
    }
}