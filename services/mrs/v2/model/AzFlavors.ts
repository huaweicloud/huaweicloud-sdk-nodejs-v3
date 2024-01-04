import { Flavor } from './Flavor';


export class AzFlavors {
    private 'az_code'?: string;
    private 'az_name'?: string;
    public master?: Array<Flavor>;
    public core?: Array<Flavor>;
    public task?: Array<Flavor>;
    public constructor() { 
    }
    public withAzCode(azCode: string): AzFlavors {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withAzName(azName: string): AzFlavors {
        this['az_name'] = azName;
        return this;
    }
    public set azName(azName: string  | undefined) {
        this['az_name'] = azName;
    }
    public get azName(): string | undefined {
        return this['az_name'];
    }
    public withMaster(master: Array<Flavor>): AzFlavors {
        this['master'] = master;
        return this;
    }
    public withCore(core: Array<Flavor>): AzFlavors {
        this['core'] = core;
        return this;
    }
    public withTask(task: Array<Flavor>): AzFlavors {
        this['task'] = task;
        return this;
    }
}