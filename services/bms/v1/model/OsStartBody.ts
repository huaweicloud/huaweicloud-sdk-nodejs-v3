import { StartServersInfo } from './StartServersInfo';


export class OsStartBody {
    private 'os-start'?: StartServersInfo;
    public constructor(osStart?: StartServersInfo) { 
        this['os-start'] = osStart;
    }
    public withOsStart(osStart: StartServersInfo): OsStartBody {
        this['os-start'] = osStart;
        return this;
    }
    public set osStart(osStart: StartServersInfo  | undefined) {
        this['os-start'] = osStart;
    }
    public get osStart(): StartServersInfo | undefined {
        return this['os-start'];
    }
}