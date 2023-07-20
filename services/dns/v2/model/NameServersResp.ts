import { NsRecords } from './NsRecords';


export class NameServersResp {
    public type?: string;
    public region?: string;
    private 'ns_records'?: Array<NsRecords>;
    public constructor() { 
    }
    public withType(type: string): NameServersResp {
        this['type'] = type;
        return this;
    }
    public withRegion(region: string): NameServersResp {
        this['region'] = region;
        return this;
    }
    public withNsRecords(nsRecords: Array<NsRecords>): NameServersResp {
        this['ns_records'] = nsRecords;
        return this;
    }
    public set nsRecords(nsRecords: Array<NsRecords>  | undefined) {
        this['ns_records'] = nsRecords;
    }
    public get nsRecords(): Array<NsRecords> | undefined {
        return this['ns_records'];
    }
}