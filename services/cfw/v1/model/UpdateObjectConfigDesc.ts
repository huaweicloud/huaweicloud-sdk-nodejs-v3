

export class UpdateObjectConfigDesc {
    public description?: string;
    private 'fw_instance_id'?: string;
    private 'item_id'?: string;
    private 'set_id'?: string;
    public type?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateObjectConfigDesc {
        this['description'] = description;
        return this;
    }
    public withFwInstanceId(fwInstanceId: string): UpdateObjectConfigDesc {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withItemId(itemId: string): UpdateObjectConfigDesc {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string  | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId(): string | undefined {
        return this['item_id'];
    }
    public withSetId(setId: string): UpdateObjectConfigDesc {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withType(type: string): UpdateObjectConfigDesc {
        this['type'] = type;
        return this;
    }
}