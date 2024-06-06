

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
    DELEGATED_ADMINISTRATOR_DEREGISTERED = 'delegated_administrator_deregistered',
    TRUSTED_SERVICE_DISABLED = 'trusted_service_disabled',
    INTERNAL_ERROR = 'internal_error',
    ORGANIZATION_DELETED = 'organization_deleted',
    SERVICE_LINKED_AGENCY_CREATION_FAILED = 'service_linked_agency_creation_failed'
}
