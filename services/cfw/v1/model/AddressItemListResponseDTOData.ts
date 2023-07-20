import { AddressItemListResponseDTODataRecords } from './AddressItemListResponseDTODataRecords';


export class AddressItemListResponseDTOData {
    public offset?: number;
    public limit?: number;
    public total?: number;
    private 'set_id'?: string;
    public records?: Array<AddressItemListResponseDTODataRecords>;
    public constructor() { 
    }
    public withOffset(offset: number): AddressItemListResponseDTOData {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): AddressItemListResponseDTOData {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): AddressItemListResponseDTOData {
        this['total'] = total;
        return this;
    }
    public withSetId(setId: string): AddressItemListResponseDTOData {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withRecords(records: Array<AddressItemListResponseDTODataRecords>): AddressItemListResponseDTOData {
        this['records'] = records;
        return this;
    }
}