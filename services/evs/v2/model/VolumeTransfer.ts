import { Link } from './Link';


export class VolumeTransfer {
    private 'created_at'?: string;
    public id?: string;
    public links?: Array<Link>;
    public name?: string;
    private 'volume_id'?: string;
    public constructor(createdAt?: string, id?: string, links?: Array<Link>, name?: string, volumeId?: string) { 
        this['created_at'] = createdAt;
        this['id'] = id;
        this['links'] = links;
        this['name'] = name;
        this['volume_id'] = volumeId;
    }
    public withCreatedAt(createdAt: string): VolumeTransfer {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withId(id: string): VolumeTransfer {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): VolumeTransfer {
        this['links'] = links;
        return this;
    }
    public withName(name: string): VolumeTransfer {
        this['name'] = name;
        return this;
    }
    public withVolumeId(volumeId: string): VolumeTransfer {
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