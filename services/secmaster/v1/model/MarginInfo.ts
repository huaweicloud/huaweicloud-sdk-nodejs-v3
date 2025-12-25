

export class MarginInfo {
    public top?: number;
    public left?: number;
    public bottom?: number;
    public right?: number;
    public constructor() { 
    }
    public withTop(top: number): MarginInfo {
        this['top'] = top;
        return this;
    }
    public withLeft(left: number): MarginInfo {
        this['left'] = left;
        return this;
    }
    public withBottom(bottom: number): MarginInfo {
        this['bottom'] = bottom;
        return this;
    }
    public withRight(right: number): MarginInfo {
        this['right'] = right;
        return this;
    }
}