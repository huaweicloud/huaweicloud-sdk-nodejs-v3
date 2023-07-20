

export class PageInfoOption {
    private 'previous_marker'?: string;
    private 'next_marker'?: string;
    private 'current_count'?: number;
    public constructor() { 
    }
    public withPreviousMarker(previousMarker: string): PageInfoOption {
        this['previous_marker'] = previousMarker;
        return this;
    }
    public set previousMarker(previousMarker: string  | undefined) {
        this['previous_marker'] = previousMarker;
    }
    public get previousMarker(): string | undefined {
        return this['previous_marker'];
    }
    public withNextMarker(nextMarker: string): PageInfoOption {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withCurrentCount(currentCount: number): PageInfoOption {
        this['current_count'] = currentCount;
        return this;
    }
    public set currentCount(currentCount: number  | undefined) {
        this['current_count'] = currentCount;
    }
    public get currentCount(): number | undefined {
        return this['current_count'];
    }
}