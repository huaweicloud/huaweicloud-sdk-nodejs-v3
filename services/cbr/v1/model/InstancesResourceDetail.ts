import { Vault } from './Vault';


export class InstancesResourceDetail {
    public vault?: Vault;
    public constructor() { 
    }
    public withVault(vault: Vault): InstancesResourceDetail {
        this['vault'] = vault;
        return this;
    }
}