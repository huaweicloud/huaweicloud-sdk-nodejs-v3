import { AlarmInfo } from './AlarmInfo';


export class ClusterOps {
    public alarm?: AlarmInfo;
    public constructor(alarm?: AlarmInfo) { 
        this['alarm'] = alarm;
    }
    public withAlarm(alarm: AlarmInfo): ClusterOps {
        this['alarm'] = alarm;
        return this;
    }
}