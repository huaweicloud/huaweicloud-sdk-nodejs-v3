

export class ResourceFlavorListMetadata {
    private 'continue'?: string;
    public remainingItemCount?: number;
    public constructor() { 
    }
    public withContinue(_continue: string): ResourceFlavorListMetadata {
        this['continue'] = _continue;
        return this;
    }
    public set _continue(_continue: string  | undefined) {
        this['continue'] = _continue;
    }
    public get _continue(): string | undefined {
        return this['continue'];
    }
    public withRemainingItemCount(remainingItemCount: number): ResourceFlavorListMetadata {
        this['remainingItemCount'] = remainingItemCount;
        return this;
    }
}