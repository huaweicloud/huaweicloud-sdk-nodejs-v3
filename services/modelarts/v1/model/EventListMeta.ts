

export class EventListMeta {
    private 'continue'?: string;
    public remainingItemCount?: number;
    public constructor() { 
    }
    public withContinue(_continue: string): EventListMeta {
        this['continue'] = _continue;
        return this;
    }
    public set _continue(_continue: string  | undefined) {
        this['continue'] = _continue;
    }
    public get _continue(): string | undefined {
        return this['continue'];
    }
    public withRemainingItemCount(remainingItemCount: number): EventListMeta {
        this['remainingItemCount'] = remainingItemCount;
        return this;
    }
}