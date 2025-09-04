

export class PointCleanDTO {
    private 'silent_window'?: number;
    public deviation?: number;
    public constructor(silentWindow?: number, deviation?: number) { 
        this['silent_window'] = silentWindow;
        this['deviation'] = deviation;
    }
    public withSilentWindow(silentWindow: number): PointCleanDTO {
        this['silent_window'] = silentWindow;
        return this;
    }
    public set silentWindow(silentWindow: number  | undefined) {
        this['silent_window'] = silentWindow;
    }
    public get silentWindow(): number | undefined {
        return this['silent_window'];
    }
    public withDeviation(deviation: number): PointCleanDTO {
        this['deviation'] = deviation;
        return this;
    }
}