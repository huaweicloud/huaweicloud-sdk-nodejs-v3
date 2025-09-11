

export class SwitchWdrSnapshotRequestBody {
    public status?: SwitchWdrSnapshotRequestBodyStatusEnum | string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: SwitchWdrSnapshotRequestBodyStatusEnum | string): SwitchWdrSnapshotRequestBody {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchWdrSnapshotRequestBodyStatusEnum {
    ON = 'ON',
    OFF = 'OFF'
}
