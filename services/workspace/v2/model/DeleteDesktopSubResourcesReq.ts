

export class DeleteDesktopSubResourcesReq {
    private 'desktop_ids'?: Array<string>;
    private 'sub_resource_type'?: string;
    private 'order_id'?: string;
    public constructor(desktopIds?: Array<string>, subResourceType?: string) { 
        this['desktop_ids'] = desktopIds;
        this['sub_resource_type'] = subResourceType;
    }
    public withDesktopIds(desktopIds: Array<string>): DeleteDesktopSubResourcesReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withSubResourceType(subResourceType: string): DeleteDesktopSubResourcesReq {
        this['sub_resource_type'] = subResourceType;
        return this;
    }
    public set subResourceType(subResourceType: string  | undefined) {
        this['sub_resource_type'] = subResourceType;
    }
    public get subResourceType(): string | undefined {
        return this['sub_resource_type'];
    }
    public withOrderId(orderId: string): DeleteDesktopSubResourcesReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}