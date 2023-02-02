import { Encryption } from './Encryption';


export class KeyProtection {
    private 'private_key'?: string | undefined;
    public encryption?: Encryption;
    public constructor() { 
    }
    public withPrivateKey(privateKey: string): KeyProtection {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey() {
        return this['private_key'];
    }
    public withEncryption(encryption: Encryption): KeyProtection {
        this['encryption'] = encryption;
        return this;
    }
}