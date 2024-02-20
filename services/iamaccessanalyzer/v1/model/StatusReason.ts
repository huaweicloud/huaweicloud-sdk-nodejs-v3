

export class StatusReason {
    public code?: StatusReasonCodeEnum | string;
    public constructor(code?: string) { 
        this['code'] = code;
    }
    public withCode(code: StatusReasonCodeEnum | string): StatusReason {
        this['code'] = code;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StatusReasonCodeEnum {
    SERVICE_LINKED_AGENCY_CREATION_FAILED = 'service_linked_agency_creation_failed'
}
