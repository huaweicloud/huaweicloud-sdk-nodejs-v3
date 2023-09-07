

export class IncreComponentDetail {
    public type?: IncreComponentDetailTypeEnum | string;
    public status?: string;
    private 'start_time'?: string;
    private 'start_point'?: string;
    private 'current_point'?: string;
    private 'resolution_time'?: string;
    public delay?: string;
    public constructor() { 
    }
    public withType(type: IncreComponentDetailTypeEnum | string): IncreComponentDetail {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): IncreComponentDetail {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): IncreComponentDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStartPoint(startPoint: string): IncreComponentDetail {
        this['start_point'] = startPoint;
        return this;
    }
    public set startPoint(startPoint: string  | undefined) {
        this['start_point'] = startPoint;
    }
    public get startPoint(): string | undefined {
        return this['start_point'];
    }
    public withCurrentPoint(currentPoint: string): IncreComponentDetail {
        this['current_point'] = currentPoint;
        return this;
    }
    public set currentPoint(currentPoint: string  | undefined) {
        this['current_point'] = currentPoint;
    }
    public get currentPoint(): string | undefined {
        return this['current_point'];
    }
    public withResolutionTime(resolutionTime: string): IncreComponentDetail {
        this['resolution_time'] = resolutionTime;
        return this;
    }
    public set resolutionTime(resolutionTime: string  | undefined) {
        this['resolution_time'] = resolutionTime;
    }
    public get resolutionTime(): string | undefined {
        return this['resolution_time'];
    }
    public withDelay(delay: string): IncreComponentDetail {
        this['delay'] = delay;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IncreComponentDetailTypeEnum {
    CAPTURE = 'capture',
    APPLY = 'apply'
}
