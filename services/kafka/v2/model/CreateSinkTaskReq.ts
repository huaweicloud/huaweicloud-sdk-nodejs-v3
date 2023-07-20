import { ObsDestinationDescriptor } from './ObsDestinationDescriptor';


export class CreateSinkTaskReq {
    private 'source_type'?: CreateSinkTaskReqSourceTypeEnum | string;
    private 'task_name'?: string;
    private 'destination_type'?: CreateSinkTaskReqDestinationTypeEnum | string;
    private 'obs_destination_descriptor'?: ObsDestinationDescriptor;
    public constructor(sourceType?: string, taskName?: string, destinationType?: string, obsDestinationDescriptor?: ObsDestinationDescriptor) { 
        this['source_type'] = sourceType;
        this['task_name'] = taskName;
        this['destination_type'] = destinationType;
        this['obs_destination_descriptor'] = obsDestinationDescriptor;
    }
    public withSourceType(sourceType: CreateSinkTaskReqSourceTypeEnum | string): CreateSinkTaskReq {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: CreateSinkTaskReqSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): CreateSinkTaskReqSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withTaskName(taskName: string): CreateSinkTaskReq {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withDestinationType(destinationType: CreateSinkTaskReqDestinationTypeEnum | string): CreateSinkTaskReq {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: CreateSinkTaskReqDestinationTypeEnum | string  | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType(): CreateSinkTaskReqDestinationTypeEnum | string | undefined {
        return this['destination_type'];
    }
    public withObsDestinationDescriptor(obsDestinationDescriptor: ObsDestinationDescriptor): CreateSinkTaskReq {
        this['obs_destination_descriptor'] = obsDestinationDescriptor;
        return this;
    }
    public set obsDestinationDescriptor(obsDestinationDescriptor: ObsDestinationDescriptor  | undefined) {
        this['obs_destination_descriptor'] = obsDestinationDescriptor;
    }
    public get obsDestinationDescriptor(): ObsDestinationDescriptor | undefined {
        return this['obs_destination_descriptor'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSinkTaskReqSourceTypeEnum {
    BLOB = 'BLOB'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSinkTaskReqDestinationTypeEnum {
    OBS = 'OBS'
}
