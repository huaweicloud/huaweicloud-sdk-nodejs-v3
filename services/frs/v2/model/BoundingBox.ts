

export class BoundingBox {
    public width: number;
    private 'top_left_y': number | undefined;
    private 'top_left_x': number | undefined;
    public height: number;
    public constructor(width?: any, topLeftY?: any, topLeftX?: any, height?: any) { 
        this['width'] = width;
        this['top_left_y'] = topLeftY;
        this['top_left_x'] = topLeftX;
        this['height'] = height;
    }
    public withWidth(width: number): BoundingBox {
        this['width'] = width;
        return this;
    }
    public withTopLeftY(topLeftY: number): BoundingBox {
        this['top_left_y'] = topLeftY;
        return this;
    }
    public set topLeftY(topLeftY: number | undefined) {
        this['top_left_y'] = topLeftY;
    }
    public get topLeftY() {
        return this['top_left_y'];
    }
    public withTopLeftX(topLeftX: number): BoundingBox {
        this['top_left_x'] = topLeftX;
        return this;
    }
    public set topLeftX(topLeftX: number | undefined) {
        this['top_left_x'] = topLeftX;
    }
    public get topLeftX() {
        return this['top_left_x'];
    }
    public withHeight(height: number): BoundingBox {
        this['height'] = height;
        return this;
    }
}