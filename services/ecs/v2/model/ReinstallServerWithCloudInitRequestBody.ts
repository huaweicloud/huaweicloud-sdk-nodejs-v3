import { ReinstallServerWithCloudInitOption } from './ReinstallServerWithCloudInitOption';


export class ReinstallServerWithCloudInitRequestBody {
    private 'os-reinstall'?: ReinstallServerWithCloudInitOption;
    public constructor(osReinstall?: ReinstallServerWithCloudInitOption) { 
        this['os-reinstall'] = osReinstall;
    }
    public withOsReinstall(osReinstall: ReinstallServerWithCloudInitOption): ReinstallServerWithCloudInitRequestBody {
        this['os-reinstall'] = osReinstall;
        return this;
    }
    public set osReinstall(osReinstall: ReinstallServerWithCloudInitOption  | undefined) {
        this['os-reinstall'] = osReinstall;
    }
    public get osReinstall(): ReinstallServerWithCloudInitOption | undefined {
        return this['os-reinstall'];
    }
}