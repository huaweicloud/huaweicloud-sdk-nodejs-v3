

export class UpdateEdgeAppVersionStateDTO {
    public state?: UpdateEdgeAppVersionStateDTOStateEnum | string;
    public constructor() { 
    }
    public withState(state: UpdateEdgeAppVersionStateDTOStateEnum | string): UpdateEdgeAppVersionStateDTO {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateEdgeAppVersionStateDTOStateEnum {
    PUBLISHED = 'PUBLISHED',
    OFF_SHELF = 'OFF_SHELF'
}
