

export class PageInfo {
    private 'current_count'?: string;
    private 'previous_marker'?: string;
    private 'next_marker'?: string;
    public constructor(currentCount?: string, previousMarker?: string, nextMarker?: string) { 
        this['current_count'] = currentCount;
        this['previous_marker'] = previousMarker;
        this['next_marker'] = nextMarker;
    }
    public withCurrentCount(currentCount: string): PageInfo {
        this['current_count'] = currentCount;
        return this;
    }
    public set currentCount(currentCount: string  | undefined) {
        this['current_count'] = currentCount;
    }
    public get currentCount(): string | undefined {
        return this['current_count'];
    }
    public withPreviousMarker(previousMarker: string): PageInfo {
        this['previous_marker'] = previousMarker;
        return this;
    }
    public set previousMarker(previousMarker: string  | undefined) {
        this['previous_marker'] = previousMarker;
    }
    public get previousMarker(): string | undefined {
        return this['previous_marker'];
    }
    public withNextMarker(nextMarker: string): PageInfo {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
}