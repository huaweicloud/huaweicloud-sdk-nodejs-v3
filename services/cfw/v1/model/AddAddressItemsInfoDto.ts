import { AddAddressItemsInfoDtoAddressItems } from './AddAddressItemsInfoDtoAddressItems';


export class AddAddressItemsInfoDto {
    private 'set_id'?: string;
    private 'address_items'?: Array<AddAddressItemsInfoDtoAddressItems>;
    public constructor() { 
    }
    public withSetId(setId: string): AddAddressItemsInfoDto {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withAddressItems(addressItems: Array<AddAddressItemsInfoDtoAddressItems>): AddAddressItemsInfoDto {
        this['address_items'] = addressItems;
        return this;
    }
    public set addressItems(addressItems: Array<AddAddressItemsInfoDtoAddressItems>  | undefined) {
        this['address_items'] = addressItems;
    }
    public get addressItems(): Array<AddAddressItemsInfoDtoAddressItems> | undefined {
        return this['address_items'];
    }
}