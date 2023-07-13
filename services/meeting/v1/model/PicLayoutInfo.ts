import { SubPicLayoutInfo } from './SubPicLayoutInfo';


export class PicLayoutInfo {
    public x?: number;
    public y?: number;
    public subPicLayoutInfoList?: Array<SubPicLayoutInfo>;
    public constructor() { 
    }
    public withX(x: number): PicLayoutInfo {
        this['x'] = x;
        return this;
    }
    public withY(y: number): PicLayoutInfo {
        this['y'] = y;
        return this;
    }
    public withSubPicLayoutInfoList(subPicLayoutInfoList: Array<SubPicLayoutInfo>): PicLayoutInfo {
        this['subPicLayoutInfoList'] = subPicLayoutInfoList;
        return this;
    }
}