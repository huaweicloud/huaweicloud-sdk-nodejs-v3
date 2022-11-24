import { AddressSetListResponseDTODataRecords } from './AddressSetListResponseDTODataRecords';


export class AddressSetListResponseDTOData {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public records?: Array<AddressSetListResponseDTODataRecords>;
    public constructor() { 
    }
    public withOffset(offset: number): AddressSetListResponseDTOData {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): AddressSetListResponseDTOData {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): AddressSetListResponseDTOData {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<AddressSetListResponseDTODataRecords>): AddressSetListResponseDTOData {
        this['records'] = records;
        return this;
    }
}