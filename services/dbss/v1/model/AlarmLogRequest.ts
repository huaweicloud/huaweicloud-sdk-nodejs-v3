import { AlarmLogRequestTime } from './AlarmLogRequestTime';


export class AlarmLogRequest {
    public time?: AlarmLogRequestTime;
    public risk?: AlarmLogRequestRiskEnum | string;
    public type?: string;
    public status?: AlarmLogRequestStatusEnum | string;
    public page?: number;
    public size?: number;
    public constructor(time?: AlarmLogRequestTime) { 
        this['time'] = time;
    }
    public withTime(time: AlarmLogRequestTime): AlarmLogRequest {
        this['time'] = time;
        return this;
    }
    public withRisk(risk: AlarmLogRequestRiskEnum | string): AlarmLogRequest {
        this['risk'] = risk;
        return this;
    }
    public withType(type: string): AlarmLogRequest {
        this['type'] = type;
        return this;
    }
    public withStatus(status: AlarmLogRequestStatusEnum | string): AlarmLogRequest {
        this['status'] = status;
        return this;
    }
    public withPage(page: number): AlarmLogRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): AlarmLogRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmLogRequestRiskEnum {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}
/**
    * @export
    * @enum {string}
    */
export enum AlarmLogRequestStatusEnum {
    DONE = 'DONE',
    UNDO = 'UNDO'
}
