import { AddServiceItemsUsingPOSTRequestBodyServiceItems } from './AddServiceItemsUsingPOSTRequestBodyServiceItems';


export class AddServiceItemsUsingPOSTRequestBody {
    private 'set_id'?: string;
    private 'service_items'?: Array<AddServiceItemsUsingPOSTRequestBodyServiceItems>;
    public constructor(setId?: string, serviceItems?: Array<AddServiceItemsUsingPOSTRequestBodyServiceItems>) { 
        this['set_id'] = setId;
        this['service_items'] = serviceItems;
    }
    public withSetId(setId: string): AddServiceItemsUsingPOSTRequestBody {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withServiceItems(serviceItems: Array<AddServiceItemsUsingPOSTRequestBodyServiceItems>): AddServiceItemsUsingPOSTRequestBody {
        this['service_items'] = serviceItems;
        return this;
    }
    public set serviceItems(serviceItems: Array<AddServiceItemsUsingPOSTRequestBodyServiceItems>  | undefined) {
        this['service_items'] = serviceItems;
    }
    public get serviceItems(): Array<AddServiceItemsUsingPOSTRequestBodyServiceItems> | undefined {
        return this['service_items'];
    }
}