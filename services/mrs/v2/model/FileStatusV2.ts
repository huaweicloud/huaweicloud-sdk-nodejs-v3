

export class FileStatusV2 {
    private 'path_suffix'?: string;
    public owner?: string;
    public group?: string;
    public permission?: string;
    public replication?: number;
    private 'block_size'?: number;
    public length?: number;
    public type?: string;
    private 'children_num'?: number;
    private 'access_time'?: number;
    private 'modification_time'?: number;
    public constructor() { 
    }
    public withPathSuffix(pathSuffix: string): FileStatusV2 {
        this['path_suffix'] = pathSuffix;
        return this;
    }
    public set pathSuffix(pathSuffix: string  | undefined) {
        this['path_suffix'] = pathSuffix;
    }
    public get pathSuffix(): string | undefined {
        return this['path_suffix'];
    }
    public withOwner(owner: string): FileStatusV2 {
        this['owner'] = owner;
        return this;
    }
    public withGroup(group: string): FileStatusV2 {
        this['group'] = group;
        return this;
    }
    public withPermission(permission: string): FileStatusV2 {
        this['permission'] = permission;
        return this;
    }
    public withReplication(replication: number): FileStatusV2 {
        this['replication'] = replication;
        return this;
    }
    public withBlockSize(blockSize: number): FileStatusV2 {
        this['block_size'] = blockSize;
        return this;
    }
    public set blockSize(blockSize: number  | undefined) {
        this['block_size'] = blockSize;
    }
    public get blockSize(): number | undefined {
        return this['block_size'];
    }
    public withLength(length: number): FileStatusV2 {
        this['length'] = length;
        return this;
    }
    public withType(type: string): FileStatusV2 {
        this['type'] = type;
        return this;
    }
    public withChildrenNum(childrenNum: number): FileStatusV2 {
        this['children_num'] = childrenNum;
        return this;
    }
    public set childrenNum(childrenNum: number  | undefined) {
        this['children_num'] = childrenNum;
    }
    public get childrenNum(): number | undefined {
        return this['children_num'];
    }
    public withAccessTime(accessTime: number): FileStatusV2 {
        this['access_time'] = accessTime;
        return this;
    }
    public set accessTime(accessTime: number  | undefined) {
        this['access_time'] = accessTime;
    }
    public get accessTime(): number | undefined {
        return this['access_time'];
    }
    public withModificationTime(modificationTime: number): FileStatusV2 {
        this['modification_time'] = modificationTime;
        return this;
    }
    public set modificationTime(modificationTime: number  | undefined) {
        this['modification_time'] = modificationTime;
    }
    public get modificationTime(): number | undefined {
        return this['modification_time'];
    }
}