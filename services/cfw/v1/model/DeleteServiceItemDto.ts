

export class DeleteServiceItemDto {
    private 'set_id'?: string;
    private 'service_item_ids'?: Array<string>;
    public constructor(setId?: string, serviceItemIds?: Array<string>) { 
        this['set_id'] = setId;
        this['service_item_ids'] = serviceItemIds;
    }
    public withSetId(setId: string): DeleteServiceItemDto {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withServiceItemIds(serviceItemIds: Array<string>): DeleteServiceItemDto {
        this['service_item_ids'] = serviceItemIds;
        return this;
    }
    public set serviceItemIds(serviceItemIds: Array<string>  | undefined) {
        this['service_item_ids'] = serviceItemIds;
    }
    public get serviceItemIds(): Array<string> | undefined {
        return this['service_item_ids'];
    }
}