import { ResizeFlavorObject } from './ResizeFlavorObject';


export class ResizeFlavorRequest {
    private 'resize_flavor'?: ResizeFlavorObject;
    public constructor(resizeFlavor?: ResizeFlavorObject) { 
        this['resize_flavor'] = resizeFlavor;
    }
    public withResizeFlavor(resizeFlavor: ResizeFlavorObject): ResizeFlavorRequest {
        this['resize_flavor'] = resizeFlavor;
        return this;
    }
    public set resizeFlavor(resizeFlavor: ResizeFlavorObject  | undefined) {
        this['resize_flavor'] = resizeFlavor;
    }
    public get resizeFlavor(): ResizeFlavorObject | undefined {
        return this['resize_flavor'];
    }
}