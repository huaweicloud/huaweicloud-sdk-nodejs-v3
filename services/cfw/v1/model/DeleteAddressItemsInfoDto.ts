

export class DeleteAddressItemsInfoDto {
    private 'set_id'?: string;
    private 'address_item_ids'?: Array<string>;
    public constructor(setId?: string, addressItemIds?: Array<string>) { 
        this['set_id'] = setId;
        this['address_item_ids'] = addressItemIds;
    }
    public withSetId(setId: string): DeleteAddressItemsInfoDto {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withAddressItemIds(addressItemIds: Array<string>): DeleteAddressItemsInfoDto {
        this['address_item_ids'] = addressItemIds;
        return this;
    }
    public set addressItemIds(addressItemIds: Array<string>  | undefined) {
        this['address_item_ids'] = addressItemIds;
    }
    public get addressItemIds(): Array<string> | undefined {
        return this['address_item_ids'];
    }
}