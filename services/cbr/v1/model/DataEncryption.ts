

export class DataEncryption {
    public cmkid?: string;
    private 'encrypted_algorithm'?: string;
    public constructor() { 
    }
    public withCmkid(cmkid: string): DataEncryption {
        this['cmkid'] = cmkid;
        return this;
    }
    public withEncryptedAlgorithm(encryptedAlgorithm: string): DataEncryption {
        this['encrypted_algorithm'] = encryptedAlgorithm;
        return this;
    }
    public set encryptedAlgorithm(encryptedAlgorithm: string  | undefined) {
        this['encrypted_algorithm'] = encryptedAlgorithm;
    }
    public get encryptedAlgorithm(): string | undefined {
        return this['encrypted_algorithm'];
    }
}