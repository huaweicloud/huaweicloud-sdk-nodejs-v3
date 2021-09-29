import { ServerId } from './ServerId';


export class BatchResetServersPasswordRequestBody {
    private 'new_password': string | undefined;
    private 'dry_run'?: boolean | undefined;
    public servers: Array<ServerId>;
    public constructor(newPassword?: any, servers?: any) { 
        this['new_password'] = newPassword;
        this['servers'] = servers;
    }
    public withNewPassword(newPassword: string): BatchResetServersPasswordRequestBody {
        this['new_password'] = newPassword;
        return this;
    }
    public set newPassword(newPassword: string | undefined) {
        this['new_password'] = newPassword;
    }
    public get newPassword() {
        return this['new_password'];
    }
    public withDryRun(dryRun: boolean): BatchResetServersPasswordRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withServers(servers: Array<ServerId>): BatchResetServersPasswordRequestBody {
        this['servers'] = servers;
        return this;
    }
}