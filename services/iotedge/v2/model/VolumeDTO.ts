

export class VolumeDTO {
    public name?: string;
    public type?: string;
    public source?: string;
    public destination?: string;
    private 'read_only'?: boolean;
    public constructor(name?: string, source?: string, destination?: string) { 
        this['name'] = name;
        this['source'] = source;
        this['destination'] = destination;
    }
    public withName(name: string): VolumeDTO {
        this['name'] = name;
        return this;
    }
    public withType(type: string): VolumeDTO {
        this['type'] = type;
        return this;
    }
    public withSource(source: string): VolumeDTO {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: string): VolumeDTO {
        this['destination'] = destination;
        return this;
    }
    public withReadOnly(readOnly: boolean): VolumeDTO {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
}