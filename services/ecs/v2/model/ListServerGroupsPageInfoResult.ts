

export class ListServerGroupsPageInfoResult {
    private 'next_marker'?: string;
    public constructor() { 
    }
    public withNextMarker(nextMarker: string): ListServerGroupsPageInfoResult {
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