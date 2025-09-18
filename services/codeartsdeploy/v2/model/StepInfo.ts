

export class StepInfo {
    public region?: string;
    public id?: number;
    public offset?: number;
    public enable?: boolean;
    public name?: string;
    private 'current_offset'?: number;
    private 'elapsed_time'?: number;
    private 'faq_url'?: string;
    public constructor() { 
    }
    public withRegion(region: string): StepInfo {
        this['region'] = region;
        return this;
    }
    public withId(id: number): StepInfo {
        this['id'] = id;
        return this;
    }
    public withOffset(offset: number): StepInfo {
        this['offset'] = offset;
        return this;
    }
    public withEnable(enable: boolean): StepInfo {
        this['enable'] = enable;
        return this;
    }
    public withName(name: string): StepInfo {
        this['name'] = name;
        return this;
    }
    public withCurrentOffset(currentOffset: number): StepInfo {
        this['current_offset'] = currentOffset;
        return this;
    }
    public set currentOffset(currentOffset: number  | undefined) {
        this['current_offset'] = currentOffset;
    }
    public get currentOffset(): number | undefined {
        return this['current_offset'];
    }
    public withElapsedTime(elapsedTime: number): StepInfo {
        this['elapsed_time'] = elapsedTime;
        return this;
    }
    public set elapsedTime(elapsedTime: number  | undefined) {
        this['elapsed_time'] = elapsedTime;
    }
    public get elapsedTime(): number | undefined {
        return this['elapsed_time'];
    }
    public withFaqUrl(faqUrl: string): StepInfo {
        this['faq_url'] = faqUrl;
        return this;
    }
    public set faqUrl(faqUrl: string  | undefined) {
        this['faq_url'] = faqUrl;
    }
    public get faqUrl(): string | undefined {
        return this['faq_url'];
    }
}