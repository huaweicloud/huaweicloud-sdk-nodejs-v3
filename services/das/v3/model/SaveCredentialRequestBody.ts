

export class SaveCredentialRequestBody {
    public ak?: string;
    public sk?: string;
    public constructor(ak?: string, sk?: string) { 
        this['ak'] = ak;
        this['sk'] = sk;
    }
    public withAk(ak: string): SaveCredentialRequestBody {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): SaveCredentialRequestBody {
        this['sk'] = sk;
        return this;
    }
}