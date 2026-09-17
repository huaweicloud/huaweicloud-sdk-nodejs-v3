

export class PointValidityingDTO {
    public min?: object;
    public max?: object;
    private 'outlier_filtering'?: boolean;
    public constructor(min?: object, max?: object) { 
        this['min'] = min;
        this['max'] = max;
    }
    public withMin(min: object): PointValidityingDTO {
        this['min'] = min;
        return this;
    }
    public withMax(max: object): PointValidityingDTO {
        this['max'] = max;
        return this;
    }
    public withOutlierFiltering(outlierFiltering: boolean): PointValidityingDTO {
        this['outlier_filtering'] = outlierFiltering;
        return this;
    }
    public set outlierFiltering(outlierFiltering: boolean  | undefined) {
        this['outlier_filtering'] = outlierFiltering;
    }
    public get outlierFiltering(): boolean | undefined {
        return this['outlier_filtering'];
    }
}