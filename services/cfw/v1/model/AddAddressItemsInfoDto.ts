import { AddAddressItemsInfoDtoAddressItems } from './AddAddressItemsInfoDtoAddressItems';


export class AddAddressItemsInfoDto {
    private 'set_id'?: string | undefined;
    private 'address_items'?: Array<AddAddressItemsInfoDtoAddressItems> | undefined;
    public constructor() { 
    }
    public withSetId(setId: string): AddAddressItemsInfoDto {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string | undefined) {
        this['set_id'] = setId;
    }
    public get setId() {
        return this['set_id'];
    }
    public withAddressItems(addressItems: Array<AddAddressItemsInfoDtoAddressItems>): AddAddressItemsInfoDto {
        this['address_items'] = addressItems;
        return this;
    }
    public set addressItems(addressItems: Array<AddAddressItemsInfoDtoAddressItems> | undefined) {
        this['address_items'] = addressItems;
    }
    public get addressItems() {
        return this['address_items'];
    }
}