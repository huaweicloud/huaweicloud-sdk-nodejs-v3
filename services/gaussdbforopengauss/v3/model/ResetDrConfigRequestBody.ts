

export class ResetDrConfigRequestBody {
    private 'opposite_data_cidr'?: string;
    public constructor() { 
    }
    public withOppositeDataCidr(oppositeDataCidr: string): ResetDrConfigRequestBody {
        this['opposite_data_cidr'] = oppositeDataCidr;
        return this;
    }
    public set oppositeDataCidr(oppositeDataCidr: string  | undefined) {
        this['opposite_data_cidr'] = oppositeDataCidr;
    }
    public get oppositeDataCidr(): string | undefined {
        return this['opposite_data_cidr'];
    }
}