

export class QueueCommandPage {
    public count?: number;
    public marker?: string;
    public constructor() { 
    }
    public withCount(count: number): QueueCommandPage {
        this['count'] = count;
        return this;
    }
    public withMarker(marker: string): QueueCommandPage {
        this['marker'] = marker;
        return this;
    }
}