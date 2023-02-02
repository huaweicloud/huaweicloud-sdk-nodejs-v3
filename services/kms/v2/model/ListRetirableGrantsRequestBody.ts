

export class ListRetirableGrantsRequestBody {
    public limit?: string;
    public marker?: string;
    public sequence?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListRetirableGrantsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRetirableGrantsRequestBody {
        this['marker'] = marker;
        return this;
    }
    public withSequence(sequence: string): ListRetirableGrantsRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}