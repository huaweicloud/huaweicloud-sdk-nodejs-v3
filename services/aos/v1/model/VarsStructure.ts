import { EncryptionStructure } from './EncryptionStructure';


export class VarsStructure {
    private 'var_key'?: string;
    private 'var_value'?: string;
    public encryption?: EncryptionStructure;
    public constructor(varKey?: string, varValue?: string) { 
        this['var_key'] = varKey;
        this['var_value'] = varValue;
    }
    public withVarKey(varKey: string): VarsStructure {
        this['var_key'] = varKey;
        return this;
    }
    public set varKey(varKey: string  | undefined) {
        this['var_key'] = varKey;
    }
    public get varKey(): string | undefined {
        return this['var_key'];
    }
    public withVarValue(varValue: string): VarsStructure {
        this['var_value'] = varValue;
        return this;
    }
    public set varValue(varValue: string  | undefined) {
        this['var_value'] = varValue;
    }
    public get varValue(): string | undefined {
        return this['var_value'];
    }
    public withEncryption(encryption: EncryptionStructure): VarsStructure {
        this['encryption'] = encryption;
        return this;
    }
}