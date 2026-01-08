import { Qos } from './Qos';


export class BatchModifyQosVolumesReq {
    private 'volume_ids'?: Array<string>;
    public qos?: Qos;
    public constructor(volumeIds?: Array<string>, qos?: Qos) { 
        this['volume_ids'] = volumeIds;
        this['qos'] = qos;
    }
    public withVolumeIds(volumeIds: Array<string>): BatchModifyQosVolumesReq {
        this['volume_ids'] = volumeIds;
        return this;
    }
    public set volumeIds(volumeIds: Array<string>  | undefined) {
        this['volume_ids'] = volumeIds;
    }
    public get volumeIds(): Array<string> | undefined {
        return this['volume_ids'];
    }
    public withQos(qos: Qos): BatchModifyQosVolumesReq {
        this['qos'] = qos;
        return this;
    }
}