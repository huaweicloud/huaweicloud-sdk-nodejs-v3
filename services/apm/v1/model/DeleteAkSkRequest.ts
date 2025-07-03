

export class DeleteAkSkRequest {
    public ak?: string;
    public constructor(ak?: string) { 
        this['ak'] = ak;
    }
    public withAk(ak: string): DeleteAkSkRequest {
        this['ak'] = ak;
        return this;
    }
}