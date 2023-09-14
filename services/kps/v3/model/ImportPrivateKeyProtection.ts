import { Encryption } from './Encryption';


export class ImportPrivateKeyProtection {
    private 'private_key'?: string;
    public encryption?: Encryption;
    public constructor(privateKey?: string, encryption?: Encryption) { 
        this['private_key'] = privateKey;
        this['encryption'] = encryption;
    }
    public withPrivateKey(privateKey: string): ImportPrivateKeyProtection {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withEncryption(encryption: Encryption): ImportPrivateKeyProtection {
        this['encryption'] = encryption;
        return this;
    }
}