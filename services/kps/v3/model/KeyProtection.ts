import { Encryption } from './Encryption';


export class KeyProtection {
    private 'private_key'?: string;
    public encryption?: Encryption;
    public constructor(encryption?: Encryption) { 
        this['encryption'] = encryption;
    }
    public withPrivateKey(privateKey: string): KeyProtection {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withEncryption(encryption: Encryption): KeyProtection {
        this['encryption'] = encryption;
        return this;
    }
}