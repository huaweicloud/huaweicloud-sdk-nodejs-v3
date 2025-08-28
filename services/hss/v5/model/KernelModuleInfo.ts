

export class KernelModuleInfo {
    public name?: string;
    private 'file_name'?: string;
    public version?: string;
    public srcversion?: string;
    public path?: string;
    public size?: number;
    public mode?: string;
    public uid?: number;
    public ctime?: number;
    public mtime?: number;
    public hash?: string;
    public desc?: string;
    private 'record_time'?: number;
    public constructor() { 
    }
    public withName(name: string): KernelModuleInfo {
        this['name'] = name;
        return this;
    }
    public withFileName(fileName: string): KernelModuleInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withVersion(version: string): KernelModuleInfo {
        this['version'] = version;
        return this;
    }
    public withSrcversion(srcversion: string): KernelModuleInfo {
        this['srcversion'] = srcversion;
        return this;
    }
    public withPath(path: string): KernelModuleInfo {
        this['path'] = path;
        return this;
    }
    public withSize(size: number): KernelModuleInfo {
        this['size'] = size;
        return this;
    }
    public withMode(mode: string): KernelModuleInfo {
        this['mode'] = mode;
        return this;
    }
    public withUid(uid: number): KernelModuleInfo {
        this['uid'] = uid;
        return this;
    }
    public withCtime(ctime: number): KernelModuleInfo {
        this['ctime'] = ctime;
        return this;
    }
    public withMtime(mtime: number): KernelModuleInfo {
        this['mtime'] = mtime;
        return this;
    }
    public withHash(hash: string): KernelModuleInfo {
        this['hash'] = hash;
        return this;
    }
    public withDesc(desc: string): KernelModuleInfo {
        this['desc'] = desc;
        return this;
    }
    public withRecordTime(recordTime: number): KernelModuleInfo {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
}