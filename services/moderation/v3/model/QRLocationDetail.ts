

export class QRLocationDetail {
    private 'top_left_x'?: number | undefined;
    private 'top_left_y'?: number | undefined;
    private 'bottom_right_x'?: number | undefined;
    private 'bottom_right_y'?: number | undefined;
    public constructor() { 
    }
    public withTopLeftX(topLeftX: number): QRLocationDetail {
        this['top_left_x'] = topLeftX;
        return this;
    }
    public set topLeftX(topLeftX: number | undefined) {
        this['top_left_x'] = topLeftX;
    }
    public get topLeftX() {
        return this['top_left_x'];
    }
    public withTopLeftY(topLeftY: number): QRLocationDetail {
        this['top_left_y'] = topLeftY;
        return this;
    }
    public set topLeftY(topLeftY: number | undefined) {
        this['top_left_y'] = topLeftY;
    }
    public get topLeftY() {
        return this['top_left_y'];
    }
    public withBottomRightX(bottomRightX: number): QRLocationDetail {
        this['bottom_right_x'] = bottomRightX;
        return this;
    }
    public set bottomRightX(bottomRightX: number | undefined) {
        this['bottom_right_x'] = bottomRightX;
    }
    public get bottomRightX() {
        return this['bottom_right_x'];
    }
    public withBottomRightY(bottomRightY: number): QRLocationDetail {
        this['bottom_right_y'] = bottomRightY;
        return this;
    }
    public set bottomRightY(bottomRightY: number | undefined) {
        this['bottom_right_y'] = bottomRightY;
    }
    public get bottomRightY() {
        return this['bottom_right_y'];
    }
}