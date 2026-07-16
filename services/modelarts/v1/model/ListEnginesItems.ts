import { ListEnginesImageInfo } from './ListEnginesImageInfo';


export class ListEnginesItems {
    private 'engine_id'?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'v1_compatible'?: boolean;
    private 'run_user'?: string;
    private 'image_info'?: ListEnginesImageInfo;
    public constructor() { 
    }
    public withEngineId(engineId: string): ListEnginesItems {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withEngineName(engineName: string): ListEnginesItems {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): ListEnginesItems {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withV1Compatible(v1Compatible: boolean): ListEnginesItems {
        this['v1_compatible'] = v1Compatible;
        return this;
    }
    public set v1Compatible(v1Compatible: boolean  | undefined) {
        this['v1_compatible'] = v1Compatible;
    }
    public get v1Compatible(): boolean | undefined {
        return this['v1_compatible'];
    }
    public withRunUser(runUser: string): ListEnginesItems {
        this['run_user'] = runUser;
        return this;
    }
    public set runUser(runUser: string  | undefined) {
        this['run_user'] = runUser;
    }
    public get runUser(): string | undefined {
        return this['run_user'];
    }
    public withImageInfo(imageInfo: ListEnginesImageInfo): ListEnginesItems {
        this['image_info'] = imageInfo;
        return this;
    }
    public set imageInfo(imageInfo: ListEnginesImageInfo  | undefined) {
        this['image_info'] = imageInfo;
    }
    public get imageInfo(): ListEnginesImageInfo | undefined {
        return this['image_info'];
    }
}