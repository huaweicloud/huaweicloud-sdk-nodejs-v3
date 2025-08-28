import { HostVaultInfoDefaultVault } from './HostVaultInfoDefaultVault';
import { HostVaultInfoVaults } from './HostVaultInfoVaults';


export class HostVaultInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'asset_value'?: string;
    private 'default_backup_name_suffix'?: string;
    private 'default_vault'?: HostVaultInfoDefaultVault;
    public vaults?: Array<HostVaultInfoVaults>;
    public constructor() { 
    }
    public withHostId(hostId: string): HostVaultInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): HostVaultInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: string): HostVaultInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): HostVaultInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withAssetValue(assetValue: string): HostVaultInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withDefaultBackupNameSuffix(defaultBackupNameSuffix: string): HostVaultInfo {
        this['default_backup_name_suffix'] = defaultBackupNameSuffix;
        return this;
    }
    public set defaultBackupNameSuffix(defaultBackupNameSuffix: string  | undefined) {
        this['default_backup_name_suffix'] = defaultBackupNameSuffix;
    }
    public get defaultBackupNameSuffix(): string | undefined {
        return this['default_backup_name_suffix'];
    }
    public withDefaultVault(defaultVault: HostVaultInfoDefaultVault): HostVaultInfo {
        this['default_vault'] = defaultVault;
        return this;
    }
    public set defaultVault(defaultVault: HostVaultInfoDefaultVault  | undefined) {
        this['default_vault'] = defaultVault;
    }
    public get defaultVault(): HostVaultInfoDefaultVault | undefined {
        return this['default_vault'];
    }
    public withVaults(vaults: Array<HostVaultInfoVaults>): HostVaultInfo {
        this['vaults'] = vaults;
        return this;
    }
}