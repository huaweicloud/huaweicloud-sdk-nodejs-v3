import { OsStopBodyType } from './OsStopBodyType';


export class OsStopBody {
    private 'os-stop'?: OsStopBodyType;
    public constructor(osStop?: OsStopBodyType) { 
        this['os-stop'] = osStop;
    }
    public withOsStop(osStop: OsStopBodyType): OsStopBody {
        this['os-stop'] = osStop;
        return this;
    }
    public set osStop(osStop: OsStopBodyType  | undefined) {
        this['os-stop'] = osStop;
    }
    public get osStop(): OsStopBodyType | undefined {
        return this['os-stop'];
    }
}