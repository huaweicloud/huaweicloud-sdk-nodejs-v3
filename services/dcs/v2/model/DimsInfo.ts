

export class DimsInfo {
    private 'dim_k'?: string;
    private 'dim_v'?: string;
    public constructor() { 
    }
    public withDimK(dimK: string): DimsInfo {
        this['dim_k'] = dimK;
        return this;
    }
    public set dimK(dimK: string  | undefined) {
        this['dim_k'] = dimK;
    }
    public get dimK(): string | undefined {
        return this['dim_k'];
    }
    public withDimV(dimV: string): DimsInfo {
        this['dim_v'] = dimV;
        return this;
    }
    public set dimV(dimV: string  | undefined) {
        this['dim_v'] = dimV;
    }
    public get dimV(): string | undefined {
        return this['dim_v'];
    }
}