import { KeyProtection } from './KeyProtection';


export class ImportPrivateKeyAction {
    public name?: string;
    private 'user_id'?: string;
    private 'key_protection'?: KeyProtection;
    public constructor(name?: string, keyProtection?: KeyProtection) { 
        this['name'] = name;
        this['key_protection'] = keyProtection;
    }
    public withName(name: string): ImportPrivateKeyAction {
        this['name'] = name;
        return this;
    }
    public withUserId(userId: string): ImportPrivateKeyAction {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withKeyProtection(keyProtection: KeyProtection): ImportPrivateKeyAction {
        this['key_protection'] = keyProtection;
        return this;
    }
    public set keyProtection(keyProtection: KeyProtection  | undefined) {
        this['key_protection'] = keyProtection;
    }
    public get keyProtection(): KeyProtection | undefined {
        return this['key_protection'];
    }
}