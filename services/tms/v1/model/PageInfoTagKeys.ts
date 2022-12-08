

export class PageInfoTagKeys {
    private 'next_marker': string | undefined;
    private 'current_count': number | undefined;
    public constructor(nextMarker?: any, currentCount?: any) { 
        this['next_marker'] = nextMarker;
        this['current_count'] = currentCount;
    }
    public withNextMarker(nextMarker: string): PageInfoTagKeys {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker() {
        return this['next_marker'];
    }
    public withCurrentCount(currentCount: number): PageInfoTagKeys {
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