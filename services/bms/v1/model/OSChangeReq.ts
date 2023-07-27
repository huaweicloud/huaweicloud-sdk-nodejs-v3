import { OsChange } from './OsChange';


export class OSChangeReq {
    private 'os-change'?: OsChange;
    public constructor(osChange?: OsChange) { 
        this['os-change'] = osChange;
    }
    public withOsChange(osChange: OsChange): OSChangeReq {
        this['os-change'] = osChange;
        return this;
    }
    public set osChange(osChange: OsChange  | undefined) {
        this['os-change'] = osChange;
    }
    public get osChange(): OsChange | undefined {
        return this['os-change'];
    }
}