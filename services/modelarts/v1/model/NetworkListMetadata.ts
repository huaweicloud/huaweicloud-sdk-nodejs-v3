

export class NetworkListMetadata {
    private 'continue'?: string;
    public remainingItemCount?: number;
    public constructor() { 
    }
    public withContinue(_continue: string): NetworkListMetadata {
        this['continue'] = _continue;
        return this;
    }
    public set _continue(_continue: string  | undefined) {
        this['continue'] = _continue;
    }
    public get _continue(): string | undefined {
        return this['continue'];
    }
    public withRemainingItemCount(remainingItemCount: number): NetworkListMetadata {
        this['remainingItemCount'] = remainingItemCount;
        return this;
    }
}