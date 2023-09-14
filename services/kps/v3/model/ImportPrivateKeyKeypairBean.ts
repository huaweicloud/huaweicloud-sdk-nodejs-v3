import { ImportPrivateKeyProtection } from './ImportPrivateKeyProtection';


export class ImportPrivateKeyKeypairBean {
    public name?: string;
    private 'user_id'?: string;
    private 'key_protection'?: ImportPrivateKeyProtection;
    public constructor(name?: string, keyProtection?: ImportPrivateKeyProtection) { 
        this['name'] = name;
        this['key_protection'] = keyProtection;
    }
    public withName(name: string): ImportPrivateKeyKeypairBean {
        this['name'] = name;
        return this;
    }
    public withUserId(userId: string): ImportPrivateKeyKeypairBean {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withKeyProtection(keyProtection: ImportPrivateKeyProtection): ImportPrivateKeyKeypairBean {
        this['key_protection'] = keyProtection;
        return this;
    }
    public set keyProtection(keyProtection: ImportPrivateKeyProtection  | undefined) {
        this['key_protection'] = keyProtection;
    }
    public get keyProtection(): ImportPrivateKeyProtection | undefined {
        return this['key_protection'];
    }
}