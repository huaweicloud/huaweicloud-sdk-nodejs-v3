

export class LogConfigDTO {
    public size?: number;
    public level?: string;
    private 'rotate_num'?: number;
    private 'rotate_period'?: string;
    public type?: string;
    public component?: string;
    public constructor() { 
    }
    public withSize(size: number): LogConfigDTO {
        this['size'] = size;
        return this;
    }
    public withLevel(level: string): LogConfigDTO {
        this['level'] = level;
        return this;
    }
    public withRotateNum(rotateNum: number): LogConfigDTO {
        this['rotate_num'] = rotateNum;
        return this;
    }
    public set rotateNum(rotateNum: number  | undefined) {
        this['rotate_num'] = rotateNum;
    }
    public get rotateNum(): number | undefined {
        return this['rotate_num'];
    }
    public withRotatePeriod(rotatePeriod: string): LogConfigDTO {
        this['rotate_period'] = rotatePeriod;
        return this;
    }
    public set rotatePeriod(rotatePeriod: string  | undefined) {
        this['rotate_period'] = rotatePeriod;
    }
    public get rotatePeriod(): string | undefined {
        return this['rotate_period'];
    }
    public withType(type: string): LogConfigDTO {
        this['type'] = type;
        return this;
    }
    public withComponent(component: string): LogConfigDTO {
        this['component'] = component;
        return this;
    }
}