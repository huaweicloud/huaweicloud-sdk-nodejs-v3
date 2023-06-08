import { NsRecords } from './NsRecords';


export class NameServersResp {
    public type?: string;
    public region?: string;
    private 'ns_records'?: Array<NsRecords> | undefined;
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
    public set nsRecords(nsRecords: Array<NsRecords> | undefined) {
        this['ns_records'] = nsRecords;
    }
    public get nsRecords() {
        return this['ns_records'];
    }
}