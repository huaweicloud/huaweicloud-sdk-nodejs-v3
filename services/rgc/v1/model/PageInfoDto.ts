

export class PageInfoDto {
    private 'next_marker'?: string;
    private 'current_count'?: number;
    public constructor(nextMarker?: string) { 
        this['next_marker'] = nextMarker;
    }
    public withNextMarker(nextMarker: string): PageInfoDto {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withCurrentCount(currentCount: number): PageInfoDto {
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