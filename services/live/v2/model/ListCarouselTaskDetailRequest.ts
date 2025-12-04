

export class ListCarouselTaskDetailRequest {
    private 'carousel_task_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(carouselTaskId?: string) { 
        this['carousel_task_id'] = carouselTaskId;
    }
    public withCarouselTaskId(carouselTaskId: string): ListCarouselTaskDetailRequest {
        this['carousel_task_id'] = carouselTaskId;
        return this;
    }
    public set carouselTaskId(carouselTaskId: string  | undefined) {
        this['carousel_task_id'] = carouselTaskId;
    }
    public get carouselTaskId(): string | undefined {
        return this['carousel_task_id'];
    }
    public withStartTime(startTime: string): ListCarouselTaskDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListCarouselTaskDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}