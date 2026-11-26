import { Platform } from './Platform';


export class Reference {
    private 'parent_id'?: number;
    private 'child_id'?: number;
    private 'child_digest'?: string;
    public platform?: Platform;
    public constructor() { 
    }
    public withParentId(parentId: number): Reference {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
    public withChildId(childId: number): Reference {
        this['child_id'] = childId;
        return this;
    }
    public set childId(childId: number  | undefined) {
        this['child_id'] = childId;
    }
    public get childId(): number | undefined {
        return this['child_id'];
    }
    public withChildDigest(childDigest: string): Reference {
        this['child_digest'] = childDigest;
        return this;
    }
    public set childDigest(childDigest: string  | undefined) {
        this['child_digest'] = childDigest;
    }
    public get childDigest(): string | undefined {
        return this['child_digest'];
    }
    public withPlatform(platform: Platform): Reference {
        this['platform'] = platform;
        return this;
    }
}