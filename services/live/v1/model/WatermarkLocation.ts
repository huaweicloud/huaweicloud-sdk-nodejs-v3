

export class WatermarkLocation {
    public location?: WatermarkLocationLocationEnum | string;
    private 'x_offset'?: number;
    private 'y_offset'?: number;
    public constructor() { 
    }
    public withLocation(location: WatermarkLocationLocationEnum | string): WatermarkLocation {
        this['location'] = location;
        return this;
    }
    public withXOffset(xOffset: number): WatermarkLocation {
        this['x_offset'] = xOffset;
        return this;
    }
    public set xOffset(xOffset: number  | undefined) {
        this['x_offset'] = xOffset;
    }
    public get xOffset(): number | undefined {
        return this['x_offset'];
    }
    public withYOffset(yOffset: number): WatermarkLocation {
        this['y_offset'] = yOffset;
        return this;
    }
    public set yOffset(yOffset: number  | undefined) {
        this['y_offset'] = yOffset;
    }
    public get yOffset(): number | undefined {
        return this['y_offset'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WatermarkLocationLocationEnum {
    TOPLEFT = 'TOPLEFT',
    TOPRIGHT = 'TOPRIGHT',
    BOTTOMLEFT = 'BOTTOMLEFT',
    BOTTOMRIGHT = 'BOTTOMRIGHT',
    RANDOM = 'RANDOM'
}
