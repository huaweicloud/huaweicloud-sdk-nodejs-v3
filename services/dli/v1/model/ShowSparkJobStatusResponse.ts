
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSparkJobStatusResponse extends SdkResponse {
    public id?: string;
    public state?: ShowSparkJobStatusResponseStateEnum | string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSparkJobStatusResponse {
        this['id'] = id;
        return this;
    }
    public withState(state: ShowSparkJobStatusResponseStateEnum | string): ShowSparkJobStatusResponse {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSparkJobStatusResponseStateEnum {
    STARTING = 'starting',
    RUNNING = 'running',
    DEAD = 'dead',
    SUCCESS = 'success',
    RECOVERING = 'recovering'
}
