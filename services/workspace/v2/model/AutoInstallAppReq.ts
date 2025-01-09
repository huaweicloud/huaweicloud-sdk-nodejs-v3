import { AccountInfo } from './AccountInfo';


export class AutoInstallAppReq {
    private 'install_command'?: string;
    private 'uninstall_command'?: string;
    public users?: Array<AccountInfo>;
    public constructor() { 
    }
    public withInstallCommand(installCommand: string): AutoInstallAppReq {
        this['install_command'] = installCommand;
        return this;
    }
    public set installCommand(installCommand: string  | undefined) {
        this['install_command'] = installCommand;
    }
    public get installCommand(): string | undefined {
        return this['install_command'];
    }
    public withUninstallCommand(uninstallCommand: string): AutoInstallAppReq {
        this['uninstall_command'] = uninstallCommand;
        return this;
    }
    public set uninstallCommand(uninstallCommand: string  | undefined) {
        this['uninstall_command'] = uninstallCommand;
    }
    public get uninstallCommand(): string | undefined {
        return this['uninstall_command'];
    }
    public withUsers(users: Array<AccountInfo>): AutoInstallAppReq {
        this['users'] = users;
        return this;
    }
}