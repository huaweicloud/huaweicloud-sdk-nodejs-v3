import { ResizeDesktopData } from './ResizeDesktopData';


export class ResizeDesktopReq {
    public desktops?: Array<ResizeDesktopData>;
    private 'product_id'?: string;
    public mode?: string;
    private 'auto_placement'?: string;
    public constructor(desktops?: Array<ResizeDesktopData>, productId?: string, mode?: string) { 
        this['desktops'] = desktops;
        this['product_id'] = productId;
        this['mode'] = mode;
    }
    public withDesktops(desktops: Array<ResizeDesktopData>): ResizeDesktopReq {
        this['desktops'] = desktops;
        return this;
    }
    public withProductId(productId: string): ResizeDesktopReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withMode(mode: string): ResizeDesktopReq {
        this['mode'] = mode;
        return this;
    }
    public withAutoPlacement(autoPlacement: string): ResizeDesktopReq {
        this['auto_placement'] = autoPlacement;
        return this;
    }
    public set autoPlacement(autoPlacement: string  | undefined) {
        this['auto_placement'] = autoPlacement;
    }
    public get autoPlacement(): string | undefined {
        return this['auto_placement'];
    }
}