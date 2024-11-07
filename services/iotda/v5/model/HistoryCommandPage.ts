

export class HistoryCommandPage {
    public marker?: string;
    public constructor() { 
    }
    public withMarker(marker: string): HistoryCommandPage {
        this['marker'] = marker;
        return this;
    }
}