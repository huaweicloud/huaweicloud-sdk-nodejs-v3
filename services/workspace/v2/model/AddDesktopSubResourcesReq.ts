

export class AddDesktopSubResourcesReq {
    private 'sub_resource_sku'?: string;
    private 'order_id'?: string;
    private 'desktop_ids'?: Array<string>;
    public constructor(subResourceSku?: string, desktopIds?: Array<string>) { 
        this['sub_resource_sku'] = subResourceSku;
        this['desktop_ids'] = desktopIds;
    }
    public withSubResourceSku(subResourceSku: string): AddDesktopSubResourcesReq {
        this['sub_resource_sku'] = subResourceSku;
        return this;
    }
    public set subResourceSku(subResourceSku: string  | undefined) {
        this['sub_resource_sku'] = subResourceSku;
    }
    public get subResourceSku(): string | undefined {
        return this['sub_resource_sku'];
    }
    public withOrderId(orderId: string): AddDesktopSubResourcesReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withDesktopIds(desktopIds: Array<string>): AddDesktopSubResourcesReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
}