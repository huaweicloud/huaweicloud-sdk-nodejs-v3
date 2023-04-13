

export class ImageTaggingBoundingBox {
    public width?: number;
    public height?: number;
    private 'top_left_x'?: number | undefined;
    private 'top_left_y'?: number | undefined;
    public constructor() { 
    }
    public withWidth(width: number): ImageTaggingBoundingBox {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): ImageTaggingBoundingBox {
        this['height'] = height;
        return this;
    }
    public withTopLeftX(topLeftX: number): ImageTaggingBoundingBox {
        this['top_left_x'] = topLeftX;
        return this;
    }
    public set topLeftX(topLeftX: number | undefined) {
        this['top_left_x'] = topLeftX;
    }
    public get topLeftX() {
        return this['top_left_x'];
    }
    public withTopLeftY(topLeftY: number): ImageTaggingBoundingBox {
        this['top_left_y'] = topLeftY;
        return this;
    }
    public set topLeftY(topLeftY: number | undefined) {
        this['top_left_y'] = topLeftY;
    }
    public get topLeftY() {
        return this['top_left_y'];
    }
}