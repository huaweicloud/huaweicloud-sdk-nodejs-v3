

export class PageInfoTagValues {
    private 'next_marker'?: string;
    private 'current_count'?: number;
    public constructor(nextMarker?: string, currentCount?: number) { 
        this['next_marker'] = nextMarker;
        this['current_count'] = currentCount;
    }
    public withNextMarker(nextMarker: string): PageInfoTagValues {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withCurrentCount(currentCount: number): PageInfoTagValues {
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