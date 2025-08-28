

export class WebFrameworkInfo {
    public catalogue?: string;
    public name?: string;
    private 'file_name'?: string;
    private 'file_type'?: string;
    public version?: string;
    public path?: string;
    public hash?: string;
    public mode?: string;
    public pid?: number;
    public uid?: number;
    public gid?: number;
    private 'proc_path'?: string;
    private 'record_time'?: number;
    private 'container_id'?: string;
    private 'container_name'?: string;
    public constructor() { 
    }
    public withCatalogue(catalogue: string): WebFrameworkInfo {
        this['catalogue'] = catalogue;
        return this;
    }
    public withName(name: string): WebFrameworkInfo {
        this['name'] = name;
        return this;
    }
    public withFileName(fileName: string): WebFrameworkInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): WebFrameworkInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withVersion(version: string): WebFrameworkInfo {
        this['version'] = version;
        return this;
    }
    public withPath(path: string): WebFrameworkInfo {
        this['path'] = path;
        return this;
    }
    public withHash(hash: string): WebFrameworkInfo {
        this['hash'] = hash;
        return this;
    }
    public withMode(mode: string): WebFrameworkInfo {
        this['mode'] = mode;
        return this;
    }
    public withPid(pid: number): WebFrameworkInfo {
        this['pid'] = pid;
        return this;
    }
    public withUid(uid: number): WebFrameworkInfo {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: number): WebFrameworkInfo {
        this['gid'] = gid;
        return this;
    }
    public withProcPath(procPath: string): WebFrameworkInfo {
        this['proc_path'] = procPath;
        return this;
    }
    public set procPath(procPath: string  | undefined) {
        this['proc_path'] = procPath;
    }
    public get procPath(): string | undefined {
        return this['proc_path'];
    }
    public withRecordTime(recordTime: number): WebFrameworkInfo {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
    public withContainerId(containerId: string): WebFrameworkInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): WebFrameworkInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
}