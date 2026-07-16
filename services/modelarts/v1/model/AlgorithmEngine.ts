import { Engine } from './Engine';


export class AlgorithmEngine {
    private 'engine_id'?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'v1_compatible'?: boolean;
    private 'run_user'?: string;
    private 'image_url'?: string;
    public constructor() { 
    }
    public withEngineId(engineId: string): AlgorithmEngine {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withEngineName(engineName: string): AlgorithmEngine {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): AlgorithmEngine {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withV1Compatible(v1Compatible: boolean): AlgorithmEngine {
        this['v1_compatible'] = v1Compatible;
        return this;
    }
    public set v1Compatible(v1Compatible: boolean  | undefined) {
        this['v1_compatible'] = v1Compatible;
    }
    public get v1Compatible(): boolean | undefined {
        return this['v1_compatible'];
    }
    public withRunUser(runUser: string): AlgorithmEngine {
        this['run_user'] = runUser;
        return this;
    }
    public set runUser(runUser: string  | undefined) {
        this['run_user'] = runUser;
    }
    public get runUser(): string | undefined {
        return this['run_user'];
    }
    public withImageUrl(imageUrl: string): AlgorithmEngine {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
}