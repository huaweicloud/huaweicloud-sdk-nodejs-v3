

export class NodePageInfo {
    public currentCount?: number;
    public nextMarker?: string;
    public constructor(currentCount?: number) { 
        this['currentCount'] = currentCount;
    }
    public withCurrentCount(currentCount: number): NodePageInfo {
        this['currentCount'] = currentCount;
        return this;
    }
    public withNextMarker(nextMarker: string): NodePageInfo {
        this['nextMarker'] = nextMarker;
        return this;
    }
}