

export class QRLocationDetail {
    private 'top_left_x'?: number;
    private 'top_left_y'?: number;
    private 'bottom_right_x'?: number;
    private 'bottom_right_y'?: number;
    public constructor() { 
    }
    public withTopLeftX(topLeftX: number): QRLocationDetail {
        this['top_left_x'] = topLeftX;
        return this;
    }
    public set topLeftX(topLeftX: number  | undefined) {
        this['top_left_x'] = topLeftX;
    }
    public get topLeftX(): number | undefined {
        return this['top_left_x'];
    }
    public withTopLeftY(topLeftY: number): QRLocationDetail {
        this['top_left_y'] = topLeftY;
        return this;
    }
    public set topLeftY(topLeftY: number  | undefined) {
        this['top_left_y'] = topLeftY;
    }
    public get topLeftY(): number | undefined {
        return this['top_left_y'];
    }
    public withBottomRightX(bottomRightX: number): QRLocationDetail {
        this['bottom_right_x'] = bottomRightX;
        return this;
    }
    public set bottomRightX(bottomRightX: number  | undefined) {
        this['bottom_right_x'] = bottomRightX;
    }
    public get bottomRightX(): number | undefined {
        return this['bottom_right_x'];
    }
    public withBottomRightY(bottomRightY: number): QRLocationDetail {
        this['bottom_right_y'] = bottomRightY;
        return this;
    }
    public set bottomRightY(bottomRightY: number  | undefined) {
        this['bottom_right_y'] = bottomRightY;
    }
    public get bottomRightY(): number | undefined {
        return this['bottom_right_y'];
    }
}