

export class KmsInfo {
    private 'aes_256'?: number;
    public sm4?: number;
    private 'rsa_2048'?: number;
    private 'rsa_3072'?: number;
    private 'rsa_4096'?: number;
    private 'ec_p256'?: number;
    private 'ec_p384'?: number;
    public sm2?: number;
    public constructor() { 
    }
    public withAes256(aes256: number): KmsInfo {
        this['aes_256'] = aes256;
        return this;
    }
    public set aes256(aes256: number  | undefined) {
        this['aes_256'] = aes256;
    }
    public get aes256(): number | undefined {
        return this['aes_256'];
    }
    public withSm4(sm4: number): KmsInfo {
        this['sm4'] = sm4;
        return this;
    }
    public withRsa2048(rsa2048: number): KmsInfo {
        this['rsa_2048'] = rsa2048;
        return this;
    }
    public set rsa2048(rsa2048: number  | undefined) {
        this['rsa_2048'] = rsa2048;
    }
    public get rsa2048(): number | undefined {
        return this['rsa_2048'];
    }
    public withRsa3072(rsa3072: number): KmsInfo {
        this['rsa_3072'] = rsa3072;
        return this;
    }
    public set rsa3072(rsa3072: number  | undefined) {
        this['rsa_3072'] = rsa3072;
    }
    public get rsa3072(): number | undefined {
        return this['rsa_3072'];
    }
    public withRsa4096(rsa4096: number): KmsInfo {
        this['rsa_4096'] = rsa4096;
        return this;
    }
    public set rsa4096(rsa4096: number  | undefined) {
        this['rsa_4096'] = rsa4096;
    }
    public get rsa4096(): number | undefined {
        return this['rsa_4096'];
    }
    public withEcP256(ecP256: number): KmsInfo {
        this['ec_p256'] = ecP256;
        return this;
    }
    public set ecP256(ecP256: number  | undefined) {
        this['ec_p256'] = ecP256;
    }
    public get ecP256(): number | undefined {
        return this['ec_p256'];
    }
    public withEcP384(ecP384: number): KmsInfo {
        this['ec_p384'] = ecP384;
        return this;
    }
    public set ecP384(ecP384: number  | undefined) {
        this['ec_p384'] = ecP384;
    }
    public get ecP384(): number | undefined {
        return this['ec_p384'];
    }
    public withSm2(sm2: number): KmsInfo {
        this['sm2'] = sm2;
        return this;
    }
}