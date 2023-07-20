import { LogicalVolumes } from './LogicalVolumes';


export class VolumeGroups {
    public components?: string;
    private 'free_size'?: number;
    private 'logical_volumes'?: Array<LogicalVolumes>;
    public name?: string;
    public size?: number;
    public constructor() { 
    }
    public withComponents(components: string): VolumeGroups {
        this['components'] = components;
        return this;
    }
    public withFreeSize(freeSize: number): VolumeGroups {
        this['free_size'] = freeSize;
        return this;
    }
    public set freeSize(freeSize: number  | undefined) {
        this['free_size'] = freeSize;
    }
    public get freeSize(): number | undefined {
        return this['free_size'];
    }
    public withLogicalVolumes(logicalVolumes: Array<LogicalVolumes>): VolumeGroups {
        this['logical_volumes'] = logicalVolumes;
        return this;
    }
    public set logicalVolumes(logicalVolumes: Array<LogicalVolumes>  | undefined) {
        this['logical_volumes'] = logicalVolumes;
    }
    public get logicalVolumes(): Array<LogicalVolumes> | undefined {
        return this['logical_volumes'];
    }
    public withName(name: string): VolumeGroups {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): VolumeGroups {
        this['size'] = size;
        return this;
    }
}