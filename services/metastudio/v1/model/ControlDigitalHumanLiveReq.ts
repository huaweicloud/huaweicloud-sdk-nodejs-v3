

export class ControlDigitalHumanLiveReq {
    public command?: ControlDigitalHumanLiveReqCommandEnum | string;
    public params?: object;
    public constructor(command?: string) { 
        this['command'] = command;
    }
    public withCommand(command: ControlDigitalHumanLiveReqCommandEnum | string): ControlDigitalHumanLiveReq {
        this['command'] = command;
        return this;
    }
    public withParams(params: object): ControlDigitalHumanLiveReq {
        this['params'] = params;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ControlDigitalHumanLiveReqCommandEnum {
    BODY_POS_RESET = 'BODY_POS_RESET',
    HIPS_POS_ADJUST = 'HIPS_POS_ADJUST',
    EYE_POS = 'EYE_POS',
    SKELETON_ROTATION_ADJUST = 'SKELETON_ROTATION_ADJUST',
    LOCK_SKELETONS = 'LOCK_SKELETONS',
    UNLOCK_SKELETONS = 'UNLOCK_SKELETONS'
}
