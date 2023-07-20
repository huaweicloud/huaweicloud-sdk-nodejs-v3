import { Link } from './Link';


export class VolumeTransferSummary {
    public id?: string;
    public links?: Array<Link>;
    public name?: string;
    private 'volume_id'?: string;
    public constructor(id?: string, links?: Array<Link>, name?: string, volumeId?: string) { 
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
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
}