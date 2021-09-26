

export class PageInfo {
    private 'next_marker': number | undefined;
    private 'previous_marker': number | undefined;
    private 'current_count': number | undefined;
    public constructor(nextMarker?: any, previousMarker?: any, currentCount?: any) { 
        this['next_marker'] = nextMarker;
        this['previous_marker'] = previousMarker;
        this['current_count'] = currentCount;
    }
    public withNextMarker(nextMarker: number): PageInfo {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker() {
        return this['next_marker'];
    }
    public withPreviousMarker(previousMarker: number): PageInfo {
        this['previous_marker'] = previousMarker;
        return this;
    }
    public set previousMarker(previousMarker: number | undefined) {
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