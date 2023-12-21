

export class CreateClusterInstanceBody {
    private 'instance_type'?: string;
    private 'instance_num'?: number;
    public flavor?: string;
    private 'volume_type'?: string;
    private 'volume_size'?: number;
    private 'flavor_type'?: string;
    public constructor(instanceType?: string, instanceNum?: number) { 
        this['instance_type'] = instanceType;
        this['instance_num'] = instanceNum;
    }
    public withInstanceType(instanceType: string): CreateClusterInstanceBody {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceNum(instanceNum: number): CreateClusterInstanceBody {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withFlavor(flavor: string): CreateClusterInstanceBody {
        this['flavor'] = flavor;
        return this;
    }
    public withVolumeType(volumeType: string): CreateClusterInstanceBody {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withVolumeSize(volumeSize: number): CreateClusterInstanceBody {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): number | undefined {
        return this['volume_size'];
    }
    public withFlavorType(flavorType: string): CreateClusterInstanceBody {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
}