

export class AlterAutoVolumeExpandConfig {
    private 'auto_volume_expand_enable'?: boolean;
    private 'expand_threshold'?: number;
    private 'max_volume_size'?: number;
    private 'expand_increment'?: number;
    public constructor(autoVolumeExpandEnable?: boolean) { 
        this['auto_volume_expand_enable'] = autoVolumeExpandEnable;
    }
    public withAutoVolumeExpandEnable(autoVolumeExpandEnable: boolean): AlterAutoVolumeExpandConfig {
        this['auto_volume_expand_enable'] = autoVolumeExpandEnable;
        return this;
    }
    public set autoVolumeExpandEnable(autoVolumeExpandEnable: boolean  | undefined) {
        this['auto_volume_expand_enable'] = autoVolumeExpandEnable;
    }
    public get autoVolumeExpandEnable(): boolean | undefined {
        return this['auto_volume_expand_enable'];
    }
    public withExpandThreshold(expandThreshold: number): AlterAutoVolumeExpandConfig {
        this['expand_threshold'] = expandThreshold;
        return this;
    }
    public set expandThreshold(expandThreshold: number  | undefined) {
        this['expand_threshold'] = expandThreshold;
    }
    public get expandThreshold(): number | undefined {
        return this['expand_threshold'];
    }
    public withMaxVolumeSize(maxVolumeSize: number): AlterAutoVolumeExpandConfig {
        this['max_volume_size'] = maxVolumeSize;
        return this;
    }
    public set maxVolumeSize(maxVolumeSize: number  | undefined) {
        this['max_volume_size'] = maxVolumeSize;
    }
    public get maxVolumeSize(): number | undefined {
        return this['max_volume_size'];
    }
    public withExpandIncrement(expandIncrement: number): AlterAutoVolumeExpandConfig {
        this['expand_increment'] = expandIncrement;
        return this;
    }
    public set expandIncrement(expandIncrement: number  | undefined) {
        this['expand_increment'] = expandIncrement;
    }
    public get expandIncrement(): number | undefined {
        return this['expand_increment'];
    }
}