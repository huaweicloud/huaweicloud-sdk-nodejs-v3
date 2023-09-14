import { ModifyVolumeQoSOption } from './ModifyVolumeQoSOption';


export class ModifyVolumeQoSRequestBody {
    private 'qos_modify'?: ModifyVolumeQoSOption;
    public constructor(qosModify?: ModifyVolumeQoSOption) { 
        this['qos_modify'] = qosModify;
    }
    public withQosModify(qosModify: ModifyVolumeQoSOption): ModifyVolumeQoSRequestBody {
        this['qos_modify'] = qosModify;
        return this;
    }
    public set qosModify(qosModify: ModifyVolumeQoSOption  | undefined) {
        this['qos_modify'] = qosModify;
    }
    public get qosModify(): ModifyVolumeQoSOption | undefined {
        return this['qos_modify'];
    }
}