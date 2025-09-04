

export class UpdateEdgeModuleStateReqDTO {
    public state?: UpdateEdgeModuleStateReqDTOStateEnum | string;
    public constructor() { 
    }
    public withState(state: UpdateEdgeModuleStateReqDTOStateEnum | string): UpdateEdgeModuleStateReqDTO {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateEdgeModuleStateReqDTOStateEnum {
    RUNNING = 'RUNNING',
    STOPPED = 'STOPPED'
}
