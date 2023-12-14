

export class BuildTaskInfo {
    private 'build_mode'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'category_id'?: string;
    public constructor(buildMode?: string) { 
        this['build_mode'] = buildMode;
    }
    public withBuildMode(buildMode: string): BuildTaskInfo {
        this['build_mode'] = buildMode;
        return this;
    }
    public set buildMode(buildMode: string  | undefined) {
        this['build_mode'] = buildMode;
    }
    public get buildMode(): string | undefined {
        return this['build_mode'];
    }
    public withStartTime(startTime: string): BuildTaskInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): BuildTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCategoryId(categoryId: string): BuildTaskInfo {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
}