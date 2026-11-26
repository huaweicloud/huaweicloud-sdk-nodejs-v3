import { Owner } from './Owner';


export class Content {
    public owner?: Owner;
    public etag?: string;
    public type?: string;
    public key?: string;
    private 'last_modified'?: string;
    public size?: number;
    private 'storage_class'?: string;
    public constructor() { 
    }
    public withOwner(owner: Owner): Content {
        this['owner'] = owner;
        return this;
    }
    public withEtag(etag: string): Content {
        this['etag'] = etag;
        return this;
    }
    public withType(type: string): Content {
        this['type'] = type;
        return this;
    }
    public withKey(key: string): Content {
        this['key'] = key;
        return this;
    }
    public withLastModified(lastModified: string): Content {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: string  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): string | undefined {
        return this['last_modified'];
    }
    public withSize(size: number): Content {
        this['size'] = size;
        return this;
    }
    public withStorageClass(storageClass: string): Content {
        this['storage_class'] = storageClass;
        return this;
    }
    public set storageClass(storageClass: string  | undefined) {
        this['storage_class'] = storageClass;
    }
    public get storageClass(): string | undefined {
        return this['storage_class'];
    }
}