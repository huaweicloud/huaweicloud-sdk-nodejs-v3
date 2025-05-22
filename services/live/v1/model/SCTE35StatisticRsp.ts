import { SCTE35InfoItem } from './SCTE35InfoItem';


export class SCTE35StatisticRsp {
    public total?: number;
    private 'scte35_info'?: Array<SCTE35InfoItem>;
    public constructor(total?: number) { 
        this['total'] = total;
    }
    public withTotal(total: number): SCTE35StatisticRsp {
        this['total'] = total;
        return this;
    }
    public withScte35Info(scte35Info: Array<SCTE35InfoItem>): SCTE35StatisticRsp {
        this['scte35_info'] = scte35Info;
        return this;
    }
    public set scte35Info(scte35Info: Array<SCTE35InfoItem>  | undefined) {
        this['scte35_info'] = scte35Info;
    }
    public get scte35Info(): Array<SCTE35InfoItem> | undefined {
        return this['scte35_info'];
    }
}