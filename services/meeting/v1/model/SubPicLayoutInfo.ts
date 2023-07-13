

export class SubPicLayoutInfo {
    public id?: number;
    public left?: number;
    public top?: number;
    public xSize?: number;
    public ySize?: number;
    public constructor() { 
    }
    public withId(id: number): SubPicLayoutInfo {
        this['id'] = id;
        return this;
    }
    public withLeft(left: number): SubPicLayoutInfo {
        this['left'] = left;
        return this;
    }
    public withTop(top: number): SubPicLayoutInfo {
        this['top'] = top;
        return this;
    }
    public withXSize(xSize: number): SubPicLayoutInfo {
        this['xSize'] = xSize;
        return this;
    }
    public withYSize(ySize: number): SubPicLayoutInfo {
        this['ySize'] = ySize;
        return this;
    }
}