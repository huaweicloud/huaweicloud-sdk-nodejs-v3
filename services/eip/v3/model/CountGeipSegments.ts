

export class CountGeipSegments {
    public count?: number;
    public constructor(count?: number) { 
        this['count'] = count;
    }
    public withCount(count: number): CountGeipSegments {
        this['count'] = count;
        return this;
    }
}