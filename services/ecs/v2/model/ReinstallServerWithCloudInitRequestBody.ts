import { ReinstallServerWithCloudInitOption } from './ReinstallServerWithCloudInitOption';


export class ReinstallServerWithCloudInitRequestBody {
    private 'os-reinstall': ReinstallServerWithCloudInitOption | undefined;
    public constructor(osReinstall?: any) { 
        this['os-reinstall'] = osReinstall;
    }
    public withOsReinstall(osReinstall: ReinstallServerWithCloudInitOption): ReinstallServerWithCloudInitRequestBody {
        this['os-reinstall'] = osReinstall;
        return this;
    }
    public set osReinstall(osReinstall: ReinstallServerWithCloudInitOption | undefined) {
        this['os-reinstall'] = osReinstall;
    }
    public get osReinstall() {
        return this['os-reinstall'];
    }
}