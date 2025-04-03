

export class LiveJobRunConfig {
    private 'allow_resource_type'?: LiveJobRunConfigAllowResourceTypeEnum | string;
    private 'single_job_in_room'?: boolean;
    public constructor() { 
    }
    public withAllowResourceType(allowResourceType: LiveJobRunConfigAllowResourceTypeEnum | string): LiveJobRunConfig {
        this['allow_resource_type'] = allowResourceType;
        return this;
    }
    public set allowResourceType(allowResourceType: LiveJobRunConfigAllowResourceTypeEnum | string  | undefined) {
        this['allow_resource_type'] = allowResourceType;
    }
    public get allowResourceType(): LiveJobRunConfigAllowResourceTypeEnum | string | undefined {
        return this['allow_resource_type'];
    }
    public withSingleJobInRoom(singleJobInRoom: boolean): LiveJobRunConfig {
        this['single_job_in_room'] = singleJobInRoom;
        return this;
    }
    public set singleJobInRoom(singleJobInRoom: boolean  | undefined) {
        this['single_job_in_room'] = singleJobInRoom;
    }
    public get singleJobInRoom(): boolean | undefined {
        return this['single_job_in_room'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LiveJobRunConfigAllowResourceTypeEnum {
    PERIOD = 'PERIOD',
    ONDEMAND = 'ONDEMAND',
    UNLIMITED = 'UNLIMITED'
}
