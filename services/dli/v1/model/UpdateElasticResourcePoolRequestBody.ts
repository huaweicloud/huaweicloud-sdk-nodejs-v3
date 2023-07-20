

export class UpdateElasticResourcePoolRequestBody {
    public description?: string;
    private 'max_cu'?: number;
    private 'min_cu'?: number;
    public constructor() { 
    }
    public withDescription(description: string): UpdateElasticResourcePoolRequestBody {
        this['description'] = description;
        return this;
    }
    public withMaxCu(maxCu: number): UpdateElasticResourcePoolRequestBody {
        this['max_cu'] = maxCu;
        return this;
    }
    public set maxCu(maxCu: number  | undefined) {
        this['max_cu'] = maxCu;
    }
    public get maxCu(): number | undefined {
        return this['max_cu'];
    }
    public withMinCu(minCu: number): UpdateElasticResourcePoolRequestBody {
        this['min_cu'] = minCu;
        return this;
    }
    public set minCu(minCu: number  | undefined) {
        this['min_cu'] = minCu;
    }
    public get minCu(): number | undefined {
        return this['min_cu'];
    }
}