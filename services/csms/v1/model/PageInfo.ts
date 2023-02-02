

export class PageInfo {
    private 'next_marker'?: string | undefined;
    private 'previous_marker'?: string | undefined;
    private 'current_count'?: number | undefined;
    public constructor() { 
    }
    public withNextMarker(nextMarker: string): PageInfo {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker() {
        return this['next_marker'];
    }
    public withPreviousMarker(previousMarker: string): PageInfo {
        this['previous_marker'] = previousMarker;
        return this;
    }
    public set previousMarker(previousMarker: string | undefined) {
        this['previous_marker'] = previousMarker;
    }
    public get previousMarker() {
        return this['previous_marker'];
    }
    public withCurrentCount(currentCount: number): PageInfo {
        this['current_count'] = currentCount;
        return this;
    }
    public set currentCount(currentCount: number | undefined) {
        this['current_count'] = currentCount;
    }
    public get currentCount() {
        return this['current_count'];
    }
}