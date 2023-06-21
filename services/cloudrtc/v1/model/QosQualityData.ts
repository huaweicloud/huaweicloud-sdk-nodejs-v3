import { TimeFloatValueData } from './TimeFloatValueData';


export class QosQualityData {
    public uid?: string;
    public peerid?: string;
    public mid?: string;
    public data?: Array<TimeFloatValueData>;
    public constructor() { 
    }
    public withUid(uid: string): QosQualityData {
        this['uid'] = uid;
        return this;
    }
    public withPeerid(peerid: string): QosQualityData {
        this['peerid'] = peerid;
        return this;
    }
    public withMid(mid: string): QosQualityData {
        this['mid'] = mid;
        return this;
    }
    public withData(data: Array<TimeFloatValueData>): QosQualityData {
        this['data'] = data;
        return this;
    }
}