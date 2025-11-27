

export class ListMeta {
    public resourceVersion?: string;
    private 'continue'?: string;
    public remainingItemCount?: string;
    public constructor() { 
    }
    public withResourceVersion(resourceVersion: string): ListMeta {
        this['resourceVersion'] = resourceVersion;
        return this;
    }
    public withContinue(_continue: string): ListMeta {
        this['continue'] = _continue;
        return this;
    }
    public set _continue(_continue: string  | undefined) {
        this['continue'] = _continue;
    }
    public get _continue(): string | undefined {
        return this['continue'];
    }
    public withRemainingItemCount(remainingItemCount: string): ListMeta {
        this['remainingItemCount'] = remainingItemCount;
        return this;
    }
}