

export class EventStreamingOperateReq {
    public operation?: EventStreamingOperateReqOperationEnum | string;
    public constructor() { 
    }
    public withOperation(operation: EventStreamingOperateReqOperationEnum | string): EventStreamingOperateReq {
        this['operation'] = operation;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventStreamingOperateReqOperationEnum {
    START = 'START',
    PAUSE = 'PAUSE'
}
