import { VaultGet } from './VaultGet';


export class ProtectableResult {
    public code?: string;
    public reason?: string;
    public result?: boolean;
    public vault?: VaultGet;
    public message?: string;
    public constructor(result?: boolean) { 
        this['result'] = result;
    }
    public withCode(code: string): ProtectableResult {
        this['code'] = code;
        return this;
    }
    public withReason(reason: string): ProtectableResult {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: boolean): ProtectableResult {
        this['result'] = result;
        return this;
    }
    public withVault(vault: VaultGet): ProtectableResult {
        this['vault'] = vault;
        return this;
    }
    public withMessage(message: string): ProtectableResult {
        this['message'] = message;
        return this;
    }
}