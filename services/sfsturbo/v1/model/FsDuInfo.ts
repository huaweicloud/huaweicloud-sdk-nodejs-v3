import { FsFileCount } from './FsFileCount';


export class FsDuInfo {
    public path?: string;
    private 'used_capacity'?: number;
    private 'file_count'?: FsFileCount;
    public message?: string;
    public constructor() { 
    }
    public withPath(path: string): FsDuInfo {
        this['path'] = path;
        return this;
    }
    public withUsedCapacity(usedCapacity: number): FsDuInfo {
        this['used_capacity'] = usedCapacity;
        return this;
    }
    public set usedCapacity(usedCapacity: number  | undefined) {
        this['used_capacity'] = usedCapacity;
    }
    public get usedCapacity(): number | undefined {
        return this['used_capacity'];
    }
    public withFileCount(fileCount: FsFileCount): FsDuInfo {
        this['file_count'] = fileCount;
        return this;
    }
    public set fileCount(fileCount: FsFileCount  | undefined) {
        this['file_count'] = fileCount;
    }
    public get fileCount(): FsFileCount | undefined {
        return this['file_count'];
    }
    public withMessage(message: string): FsDuInfo {
        this['message'] = message;
        return this;
    }
}