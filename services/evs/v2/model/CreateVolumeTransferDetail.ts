import { Link } from './Link';


export class CreateVolumeTransferDetail {
    private 'auth_key': string | undefined;
    private 'created_at': string | undefined;
    public id: string;
    public links: Array<Link>;
    public name: string;
    private 'volume_id': string | undefined;
    public constructor(authKey?: any, createdAt?: any, id?: any, links?: any, name?: any, volumeId?: any) { 
        this['auth_key'] = authKey;
        this['created_at'] = createdAt;
        this['id'] = id;
        this['links'] = links;
        this['name'] = name;
        this['volume_id'] = volumeId;
    }
    public withAuthKey(authKey: string): CreateVolumeTransferDetail {
        this['auth_key'] = authKey;
        return this;
    }
    public set authKey(authKey: string | undefined) {
        this['auth_key'] = authKey;
    }
    public get authKey() {
        return this['auth_key'];
    }
    public withCreatedAt(createdAt: string): CreateVolumeTransferDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withId(id: string): CreateVolumeTransferDetail {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): CreateVolumeTransferDetail {
        this['links'] = links;
        return this;
    }
    public withName(name: string): CreateVolumeTransferDetail {
        this['name'] = name;
        return this;
    }
    public withVolumeId(volumeId: string): CreateVolumeTransferDetail {
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