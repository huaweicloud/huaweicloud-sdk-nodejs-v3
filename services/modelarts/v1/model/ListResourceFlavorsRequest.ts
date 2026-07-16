

export class ListResourceFlavorsRequest {
    private 'continue'?: string;
    public limit?: number;
    public labelSelector?: string;
    public constructor() { 
    }
    public withContinue(_continue: string): ListResourceFlavorsRequest {
        this['continue'] = _continue;
        return this;
    }
    public set _continue(_continue: string  | undefined) {
        this['continue'] = _continue;
    }
    public get _continue(): string | undefined {
        return this['continue'];
    }
    public withLimit(limit: number): ListResourceFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withLabelSelector(labelSelector: string): ListResourceFlavorsRequest {
        this['labelSelector'] = labelSelector;
        return this;
    }
}