

export class JarPackageInfo {
    private 'file_name'?: string;
    private 'file_type'?: string;
    public catalogue?: string;
    public version?: string;
    public path?: string;
    public mode?: string;
    public uid?: number;
    public hash?: string;
    public pid?: number;
    private 'proc_path'?: string;
    private 'record_time'?: number;
    private 'container_id'?: string;
    private 'container_name'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): JarPackageInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): JarPackageInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withCatalogue(catalogue: string): JarPackageInfo {
        this['catalogue'] = catalogue;
        return this;
    }
    public withVersion(version: string): JarPackageInfo {
        this['version'] = version;
        return this;
    }
    public withPath(path: string): JarPackageInfo {
        this['path'] = path;
        return this;
    }
    public withMode(mode: string): JarPackageInfo {
        this['mode'] = mode;
        return this;
    }
    public withUid(uid: number): JarPackageInfo {
        this['uid'] = uid;
        return this;
    }
    public withHash(hash: string): JarPackageInfo {
        this['hash'] = hash;
        return this;
    }
    public withPid(pid: number): JarPackageInfo {
        this['pid'] = pid;
        return this;
    }
    public withProcPath(procPath: string): JarPackageInfo {
        this['proc_path'] = procPath;
        return this;
    }
    public set procPath(procPath: string  | undefined) {
        this['proc_path'] = procPath;
    }
    public get procPath(): string | undefined {
        return this['proc_path'];
    }
    public withRecordTime(recordTime: number): JarPackageInfo {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
    public withContainerId(containerId: string): JarPackageInfo {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): JarPackageInfo {
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