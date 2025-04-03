

export class FilterDto {
    public supported?: boolean;
    public maxResults?: number;
    public constructor() { 
    }
    public withSupported(supported: boolean): FilterDto {
        this['supported'] = supported;
        return this;
    }
    public withMaxResults(maxResults: number): FilterDto {
        this['maxResults'] = maxResults;
        return this;
    }
}