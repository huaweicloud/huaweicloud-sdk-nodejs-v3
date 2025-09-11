

export class BaseWidgetInfoRespLocation {
    public top?: number;
    public left?: number;
    public width?: number;
    public height?: number;
    public constructor(top?: number, left?: number, width?: number, height?: number) { 
        this['top'] = top;
        this['left'] = left;
        this['width'] = width;
        this['height'] = height;
    }
    public withTop(top: number): BaseWidgetInfoRespLocation {
        this['top'] = top;
        return this;
    }
    public withLeft(left: number): BaseWidgetInfoRespLocation {
        this['left'] = left;
        return this;
    }
    public withWidth(width: number): BaseWidgetInfoRespLocation {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): BaseWidgetInfoRespLocation {
        this['height'] = height;
        return this;
    }
}