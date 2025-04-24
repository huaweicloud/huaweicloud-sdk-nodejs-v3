

export class ListAgenciesRequest {
    public type?: ListAgenciesRequestTypeEnum | string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: ListAgenciesRequestTypeEnum | string): ListAgenciesRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAgenciesRequestTypeEnum {
    TARGET_CONNECTION = 'TARGET_CONNECTION',
    CUSTOM_SOURCE_RABBITMQ = 'CUSTOM_SOURCE_RABBITMQ',
    EG_RESTORE_AGENCY = 'EG_RESTORE_AGENCY'
}
