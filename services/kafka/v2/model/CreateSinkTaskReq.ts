import { ObsDestinationDescriptor } from './ObsDestinationDescriptor';


export class CreateSinkTaskReq {
    private 'source_type': CreateSinkTaskReqSourceTypeEnum | undefined;
    private 'task_name': string | undefined;
    private 'destination_type': CreateSinkTaskReqDestinationTypeEnum | undefined;
    private 'obs_destination_descriptor': ObsDestinationDescriptor | undefined;
    public constructor(sourceType?: any, taskName?: any, destinationType?: any, obsDestinationDescriptor?: any) { 
        this['source_type'] = sourceType;
        this['task_name'] = taskName;
        this['destination_type'] = destinationType;
        this['obs_destination_descriptor'] = obsDestinationDescriptor;
    }
    public withSourceType(sourceType: CreateSinkTaskReqSourceTypeEnum): CreateSinkTaskReq {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: CreateSinkTaskReqSourceTypeEnum | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType() {
        return this['source_type'];
    }
    public withTaskName(taskName: string): CreateSinkTaskReq {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withDestinationType(destinationType: CreateSinkTaskReqDestinationTypeEnum): CreateSinkTaskReq {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: CreateSinkTaskReqDestinationTypeEnum | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType() {
        return this['destination_type'];
    }
    public withObsDestinationDescriptor(obsDestinationDescriptor: ObsDestinationDescriptor): CreateSinkTaskReq {
        this['obs_destination_descriptor'] = obsDestinationDescriptor;
        return this;
    }
    public set obsDestinationDescriptor(obsDestinationDescriptor: ObsDestinationDescriptor | undefined) {
        this['obs_destination_descriptor'] = obsDestinationDescriptor;
    }
    public get obsDestinationDescriptor() {
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
