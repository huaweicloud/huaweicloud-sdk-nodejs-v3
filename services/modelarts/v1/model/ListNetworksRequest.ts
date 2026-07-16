

export class ListNetworksRequest {
    public labelSelector?: string;
    public limit?: number;
    private 'continue'?: string;
    public constructor() { 
    }
    public withLabelSelector(labelSelector: string): ListNetworksRequest {
        this['labelSelector'] = labelSelector;
        return this;
    }
    public withLimit(limit: number): ListNetworksRequest {
        this['limit'] = limit;
        return this;
    }
    public withContinue(_continue: string): ListNetworksRequest {
        this['continue'] = _continue;
        return this;
    }
    public set _continue(_continue: string  | undefined) {
        this['continue'] = _continue;
    }
    public get _continue(): string | undefined {
        return this['continue'];
    }
}