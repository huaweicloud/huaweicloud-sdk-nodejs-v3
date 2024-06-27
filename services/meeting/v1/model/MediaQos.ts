import { Qos } from './Qos';


export class MediaQos {
    public upList?: Array<Qos>;
    public downList?: Array<Qos>;
    public constructor() { 
    }
    public withUpList(upList: Array<Qos>): MediaQos {
        this['upList'] = upList;
        return this;
    }
    public withDownList(downList: Array<Qos>): MediaQos {
        this['downList'] = downList;
        return this;
    }
}