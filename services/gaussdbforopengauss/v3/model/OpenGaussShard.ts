

export class OpenGaussShard {
    public count?: number;
    public constructor(count?: number) { 
        this['count'] = count;
    }
    public withCount(count: number): OpenGaussShard {
        this['count'] = count;
        return this;
    }
}