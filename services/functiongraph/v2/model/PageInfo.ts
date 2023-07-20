

export class PageInfo {
    private 'next_marker'?: number;
    private 'previous_marker'?: number;
    private 'current_count'?: number;
    public constructor(nextMarker?: number, previousMarker?: number, currentCount?: number) { 
        this['next_marker'] = nextMarker;
        this['previous_marker'] = previousMarker;
        this['current_count'] = currentCount;
    }
    public withNextMarker(nextMarker: number): PageInfo {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): number | undefined {
        return this['next_marker'];
    }
    public withPreviousMarker(previousMarker: number): PageInfo {
        this['previous_marker'] = previousMarker;
        return this;
    }
    public set previousMarker(previousMarker: number  | undefined) {
        this['previous_marker'] = previousMarker;
    }
    public get previousMarker(): number | undefined {
        return this['previous_marker'];
    }
    public withCurrentCount(currentCount: number): PageInfo {
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