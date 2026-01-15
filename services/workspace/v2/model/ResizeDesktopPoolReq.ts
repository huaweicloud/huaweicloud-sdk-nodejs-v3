

export class ResizeDesktopPoolReq {
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    public mode?: string;
    private 'handle_type'?: ResizeDesktopPoolReqHandleTypeEnum | string;
    private 'desktop_ids'?: Array<string>;
    public constructor(productId?: string) { 
        this['product_id'] = productId;
    }
    public withProductId(productId: string): ResizeDesktopPoolReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): ResizeDesktopPoolReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withMode(mode: string): ResizeDesktopPoolReq {
        this['mode'] = mode;
        return this;
    }
    public withHandleType(handleType: ResizeDesktopPoolReqHandleTypeEnum | string): ResizeDesktopPoolReq {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: ResizeDesktopPoolReqHandleTypeEnum | string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): ResizeDesktopPoolReqHandleTypeEnum | string | undefined {
        return this['handle_type'];
    }
    public withDesktopIds(desktopIds: Array<string>): ResizeDesktopPoolReq {
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

/**
    * @export
    * @enum {string}
    */
export enum ResizeDesktopPoolReqHandleTypeEnum {
    ONLY_FOR_EXPAND = 'ONLY_FOR_EXPAND',
    FOR_EXPAND_AND_IDLE = 'FOR_EXPAND_AND_IDLE',
    FOR_EXPAND_AND_ALL = 'FOR_EXPAND_AND_ALL'
}
