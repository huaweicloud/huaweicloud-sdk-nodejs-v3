

export class PageInfo {
    private 'current_count'?: number | undefined;
    private 'next_marker'?: string | undefined;
    public constructor() { 
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
}