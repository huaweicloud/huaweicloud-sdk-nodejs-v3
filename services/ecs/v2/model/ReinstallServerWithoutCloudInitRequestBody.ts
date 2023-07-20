import { ReinstallServerWithoutCloudInitOption } from './ReinstallServerWithoutCloudInitOption';


export class ReinstallServerWithoutCloudInitRequestBody {
    private 'os-reinstall'?: ReinstallServerWithoutCloudInitOption;
    public constructor(osReinstall?: ReinstallServerWithoutCloudInitOption) { 
        this['os-reinstall'] = osReinstall;
    }
    public withOsReinstall(osReinstall: ReinstallServerWithoutCloudInitOption): ReinstallServerWithoutCloudInitRequestBody {
        this['os-reinstall'] = osReinstall;
        return this;
    }
    public set osReinstall(osReinstall: ReinstallServerWithoutCloudInitOption  | undefined) {
        this['os-reinstall'] = osReinstall;
    }
    public get osReinstall(): ReinstallServerWithoutCloudInitOption | undefined {
        return this['os-reinstall'];
    }
}