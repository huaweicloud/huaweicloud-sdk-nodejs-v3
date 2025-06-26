

export class DisplayOptionsVideoQualityOptions {
    private 'average_video_quality'?: number;
    private 'lowest_video_quality'?: number;
    private 'highest_video_quality'?: number;
    public constructor() { 
    }
    public withAverageVideoQuality(averageVideoQuality: number): DisplayOptionsVideoQualityOptions {
        this['average_video_quality'] = averageVideoQuality;
        return this;
    }
    public set averageVideoQuality(averageVideoQuality: number  | undefined) {
        this['average_video_quality'] = averageVideoQuality;
    }
    public get averageVideoQuality(): number | undefined {
        return this['average_video_quality'];
    }
    public withLowestVideoQuality(lowestVideoQuality: number): DisplayOptionsVideoQualityOptions {
        this['lowest_video_quality'] = lowestVideoQuality;
        return this;
    }
    public set lowestVideoQuality(lowestVideoQuality: number  | undefined) {
        this['lowest_video_quality'] = lowestVideoQuality;
    }
    public get lowestVideoQuality(): number | undefined {
        return this['lowest_video_quality'];
    }
    public withHighestVideoQuality(highestVideoQuality: number): DisplayOptionsVideoQualityOptions {
        this['highest_video_quality'] = highestVideoQuality;
        return this;
    }
    public set highestVideoQuality(highestVideoQuality: number  | undefined) {
        this['highest_video_quality'] = highestVideoQuality;
    }
    public get highestVideoQuality(): number | undefined {
        return this['highest_video_quality'];
    }
}