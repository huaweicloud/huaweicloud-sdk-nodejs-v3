

export class HumanPosition2D {
    public position?: HumanPosition2DPositionEnum | string;
    private 'position_x'?: number;
    private 'position_y'?: number;
    public constructor() { 
    }
    public withPosition(position: HumanPosition2DPositionEnum | string): HumanPosition2D {
        this['position'] = position;
        return this;
    }
    public withPositionX(positionX: number): HumanPosition2D {
        this['position_x'] = positionX;
        return this;
    }
    public set positionX(positionX: number  | undefined) {
        this['position_x'] = positionX;
    }
    public get positionX(): number | undefined {
        return this['position_x'];
    }
    public withPositionY(positionY: number): HumanPosition2D {
        this['position_y'] = positionY;
        return this;
    }
    public set positionY(positionY: number  | undefined) {
        this['position_y'] = positionY;
    }
    public get positionY(): number | undefined {
        return this['position_y'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HumanPosition2DPositionEnum {
    LEFT = 'LEFT',
    MIDDLE = 'MIDDLE',
    RIGHT = 'RIGHT'
}
