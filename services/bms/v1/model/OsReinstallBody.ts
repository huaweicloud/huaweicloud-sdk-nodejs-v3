import { OsReinstall } from './OsReinstall';


export class OsReinstallBody {
    private 'os-reinstall'?: OsReinstall;
    public constructor(osReinstall?: OsReinstall) { 
        this['os-reinstall'] = osReinstall;
    }
    public withOsReinstall(osReinstall: OsReinstall): OsReinstallBody {
        this['os-reinstall'] = osReinstall;
        return this;
    }
    public set osReinstall(osReinstall: OsReinstall  | undefined) {
        this['os-reinstall'] = osReinstall;
    }
    public get osReinstall(): OsReinstall | undefined {
        return this['os-reinstall'];
    }
}