import { ReinstallServerWithoutCloudInitOption } from './ReinstallServerWithoutCloudInitOption';


export class ReinstallServerWithoutCloudInitRequestBody {
    private 'os-reinstall': ReinstallServerWithoutCloudInitOption | undefined;
    public constructor(osReinstall?: any) { 
        this['os-reinstall'] = osReinstall;
    }
    public withOsReinstall(osReinstall: ReinstallServerWithoutCloudInitOption): ReinstallServerWithoutCloudInitRequestBody {
        this['os-reinstall'] = osReinstall;
        return this;
    }
    public set osReinstall(osReinstall: ReinstallServerWithoutCloudInitOption | undefined) {
        this['os-reinstall'] = osReinstall;
    }
    public get osReinstall() {
        return this['os-reinstall'];
    }
}