import { Link } from './Link';


export class VolumeTransferSummary {
    public id: string;
    public links: Array<Link>;
    public name: string;
    private 'volume_id': string | undefined;
    public constructor(id?: any, links?: any, name?: any, volumeId?: any) { 
        this['id'] = id;
        this['links'] = links;
        this['name'] = name;
        this['volume_id'] = volumeId;
    }
    public withId(id: string): VolumeTransferSummary {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): VolumeTransferSummary {
        this['links'] = links;
        return this;
    }
    public withName(name: string): VolumeTransferSummary {
        this['name'] = name;
        return this;
    }
    public withVolumeId(volumeId: string): VolumeTransferSummary {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
}