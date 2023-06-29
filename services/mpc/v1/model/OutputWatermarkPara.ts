

export class OutputWatermarkPara {
    private 'time_duration'?: number | undefined;
    public constructor() { 
    }
    public withTimeDuration(timeDuration: number): OutputWatermarkPara {
        this['time_duration'] = timeDuration;
        return this;
    }
    public set timeDuration(timeDuration: number | undefined) {
        this['time_duration'] = timeDuration;
    }
    public get timeDuration() {
        return this['time_duration'];
    }
}